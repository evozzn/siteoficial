'use client'

import { useState, FormEvent } from 'react'

interface FormErrors {
  nome?: string
  email?: string
  mensagem?: string
}

export default function ContactForm() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
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

    // Simulação de envio (sem API ainda)
    // Na Fase 7, isso será substituído por uma chamada de API real
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setNome('')
      setEmail('')
      setMensagem('')
      setErrors({})

      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1000)
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

      {/* Nota sobre API */}
      <p className="text-xs text-gray-500 text-center">
        * O formulário está em modo de demonstração. A integração com API será
        implementada na Fase 7.
      </p>
    </form>
  )
}

