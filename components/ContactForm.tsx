'use client'

import { useState, FormEvent } from 'react'
import { analytics } from '@/lib/analytics'

interface FormErrors {
  nome?: string
  email?: string
  telefone?: string
  mensagem?: string
}

export default function ContactForm() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    // Remove caracteres não numéricos
    const cleanPhone = phone.replace(/\D/g, '')
    // Valida telefone brasileiro (10 ou 11 dígitos)
    return cleanPhone.length >= 10 && cleanPhone.length <= 11
  }

  const formatPhone = (value: string): string => {
    // Remove tudo que não é dígito
    const numbers = value.replace(/\D/g, '')
    
    // Aplica máscara: (00) 00000-0000 ou (00) 0000-0000
    if (numbers.length <= 2) {
      return numbers
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validação do nome
    if (!nome.trim()) {
      newErrors.nome = 'Nome é obrigatório'
    } else if (nome.trim().length < 2) {
      newErrors.nome = 'Nome deve ter pelo menos 2 caracteres'
    }

    // Validação do email
    if (!email.trim()) {
      newErrors.email = 'Email é obrigatório'
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email inválido'
    }

    // Validação do telefone
    if (!telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório'
    } else if (!validatePhone(telefone)) {
      newErrors.telefone = 'Telefone inválido. Use o formato (00) 00000-0000'
    }

    // Validação da mensagem
    if (!mensagem.trim()) {
      newErrors.mensagem = 'Mensagem é obrigatória'
    } else if (mensagem.trim().length < 10) {
      newErrors.mensagem = 'Mensagem deve ter pelo menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitSuccess(false)

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome.trim(),
          email: email.trim(),
          telefone: telefone.trim(),
          mensagem: mensagem.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Erros de validação do servidor
        if (data.errors && Array.isArray(data.errors)) {
          const serverErrors: FormErrors = {}
          data.errors.forEach((error: string) => {
            if (error.includes('Nome')) serverErrors.nome = error
            else if (error.includes('Email')) serverErrors.email = error
            else if (error.includes('Telefone')) serverErrors.telefone = error
            else if (error.includes('Mensagem')) serverErrors.mensagem = error
          })
          setErrors(serverErrors)
        } else {
          // Erro genérico
          setErrors({
            mensagem: data.error || 'Erro ao enviar mensagem. Tente novamente.',
          })
        }
        setIsSubmitting(false)
        return
      }

      // Sucesso
      setSubmitSuccess(true)
      
      // Track evento de conversão no Google Analytics
      analytics.contactFormSubmit()
      
      setNome('')
      setEmail('')
      setTelefone('')
      setMensagem('')
      setErrors({})

      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setErrors({
        mensagem: 'Erro de conexão. Verifique sua internet e tente novamente.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Nome */}
      <div>
        <label htmlFor="nome" className="block text-gray-300 mb-2">
          Nome <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value)
            if (errors.nome) {
              setErrors({ ...errors, nome: undefined })
            }
          }}
          className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${
            errors.nome
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-700 focus:border-primary focus:ring-primary'
          }`}
          placeholder="Seu nome completo"
        />
        {errors.nome && (
          <p className="mt-1 text-sm text-red-500">{errors.nome}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-gray-300 mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (errors.email) {
              setErrors({ ...errors, email: undefined })
            }
          }}
          className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${
            errors.email
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-700 focus:border-primary focus:ring-primary'
          }`}
          placeholder="seu@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Telefone */}
      <div>
        <label htmlFor="telefone" className="block text-gray-300 mb-2">
          Telefone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="telefone"
          value={telefone}
          onChange={(e) => {
            const formatted = formatPhone(e.target.value)
            setTelefone(formatted)
            if (errors.telefone) {
              setErrors({ ...errors, telefone: undefined })
            }
          }}
          className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${
            errors.telefone
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-700 focus:border-primary focus:ring-primary'
          }`}
          placeholder="(00) 00000-0000"
          maxLength={15}
        />
        {errors.telefone && (
          <p className="mt-1 text-sm text-red-500">{errors.telefone}</p>
        )}
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="mensagem" className="block text-gray-300 mb-2">
          Mensagem <span className="text-red-500">*</span>
        </label>
        <textarea
          id="mensagem"
          value={mensagem}
          onChange={(e) => {
            setMensagem(e.target.value)
            if (errors.mensagem) {
              setErrors({ ...errors, mensagem: undefined })
            }
          }}
          rows={4}
          className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors resize-none ${
            errors.mensagem
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-700 focus:border-primary focus:ring-primary'
          }`}
          placeholder="Conte-nos sobre seu projeto ou dúvida..."
        />
        {errors.mensagem && (
          <p className="mt-1 text-sm text-red-500">{errors.mensagem}</p>
        )}
      </div>

      {/* Mensagem de sucesso */}
      {submitSuccess && (
        <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded-lg">
          <p className="font-medium">
            Mensagem enviada com sucesso! Entraremos em contato em breve.
          </p>
        </div>
      )}

      {/* Botão de envio */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-semibold px-8 py-4 rounded-lg transition-colors duration-200 ${
          isSubmitting
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-primary hover:bg-secondary text-white'
        }`}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </button>

      {/* Mensagem de erro geral */}
      {errors.mensagem && !errors.nome && !errors.email && !errors.telefone && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg">
          <p className="text-sm">{errors.mensagem}</p>
        </div>
      )}
    </form>
  )
}

