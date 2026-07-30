'use client'

import { useState, FormEvent } from 'react'
import { analytics } from '@/lib/analytics'

interface FormErrors {
  nome?: string
  empresa?: string
  whatsapp?: string
  geral?: string
}

export default function ContactForm() {
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [instagram, setInstagram] = useState('')
  const [projeto, setProjeto] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validatePhone = (phone: string): boolean => {
    const cleanPhone = phone.replace(/\D/g, '')
    return cleanPhone.length >= 10 && cleanPhone.length <= 11
  }

  const formatPhone = (value: string): string => {
    const numbers = value.replace(/\D/g, '')

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

    if (!nome.trim()) {
      newErrors.nome = 'Nome é obrigatório'
    } else if (nome.trim().length < 2) {
      newErrors.nome = 'Nome deve ter pelo menos 2 caracteres'
    }

    if (!empresa.trim()) {
      newErrors.empresa = 'Empresa é obrigatória'
    } else if (empresa.trim().length < 2) {
      newErrors.empresa = 'Empresa deve ter pelo menos 2 caracteres'
    }

    if (!whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp é obrigatório'
    } else if (!validatePhone(whatsapp)) {
      newErrors.whatsapp = 'WhatsApp inválido. Use o formato (00) 00000-0000'
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
          empresa: empresa.trim(),
          whatsapp: whatsapp.trim(),
          instagram: instagram.trim(),
          projeto: projeto.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          const serverErrors: FormErrors = {}
          data.errors.forEach((error: string) => {
            if (error.includes('Nome')) serverErrors.nome = error
            else if (error.includes('Empresa')) serverErrors.empresa = error
            else if (error.includes('WhatsApp')) serverErrors.whatsapp = error
          })
          setErrors(serverErrors)
        } else {
          setErrors({
            geral: data.error || 'Erro ao enviar mensagem. Tente novamente.',
          })
        }
        setIsSubmitting(false)
        return
      }

      setSubmitSuccess(true)

      analytics.contactFormSubmit()

      setNome('')
      setEmpresa('')
      setWhatsapp('')
      setInstagram('')
      setProjeto('')
      setErrors({})

      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setErrors({
        geral: 'Erro de conexão. Verifique sua internet e tente novamente.',
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
          Nome <span className="text-primary">*</span>
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

      {/* Empresa */}
      <div>
        <label htmlFor="empresa" className="block text-gray-300 mb-2">
          Empresa <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          id="empresa"
          value={empresa}
          onChange={(e) => {
            setEmpresa(e.target.value)
            if (errors.empresa) {
              setErrors({ ...errors, empresa: undefined })
            }
          }}
          className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${
            errors.empresa
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-700 focus:border-primary focus:ring-primary'
          }`}
          placeholder="Nome da sua empresa"
        />
        {errors.empresa && (
          <p className="mt-1 text-sm text-red-500">{errors.empresa}</p>
        )}
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor="whatsapp" className="block text-gray-300 mb-2">
          WhatsApp <span className="text-primary">*</span>
        </label>
        <input
          type="tel"
          id="whatsapp"
          value={whatsapp}
          onChange={(e) => {
            const formatted = formatPhone(e.target.value)
            setWhatsapp(formatted)
            if (errors.whatsapp) {
              setErrors({ ...errors, whatsapp: undefined })
            }
          }}
          className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${
            errors.whatsapp
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-700 focus:border-primary focus:ring-primary'
          }`}
          placeholder="(00) 00000-0000"
          maxLength={15}
        />
        {errors.whatsapp && (
          <p className="mt-1 text-sm text-red-500">{errors.whatsapp}</p>
        )}
      </div>

      {/* Instagram */}
      <div>
        <label htmlFor="instagram" className="block text-gray-300 mb-2">
          Instagram
        </label>
        <input
          type="text"
          id="instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-primary focus:ring-primary transition-colors"
          placeholder="@seuperfil"
        />
      </div>

      {/* Projeto */}
      <div>
        <label htmlFor="projeto" className="block text-gray-300 mb-2">
          Conte um pouco sobre o seu projeto
        </label>
        <textarea
          id="projeto"
          value={projeto}
          onChange={(e) => setProjeto(e.target.value)}
          rows={4}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-primary focus:ring-primary transition-colors resize-none"
          placeholder="Fica à vontade pra contar o que precisa"
        />
      </div>

      {/* Mensagem de sucesso */}
      {submitSuccess && (
        <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded-lg">
          <p className="font-medium">
            Recebemos seu contato. A gente responde em breve.
          </p>
        </div>
      )}

      <p className="text-xs text-gray-500">
        Seus dados são usados só pra retornar seu contato.
      </p>

      {/* Botão de envio */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full transition-all duration-300 uppercase text-sm tracking-wide ${
          isSubmitting
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-primary hover:bg-secondary text-white transform hover:scale-105 glow-primary'
        }`}
      >
        {isSubmitting ? 'Enviando...' : 'Solicitar orçamento'}
        {!isSubmitting && (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        )}
      </button>

      {/* Mensagem de erro geral */}
      {errors.geral && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg">
          <p className="text-sm">{errors.geral}</p>
        </div>
      )}
    </form>
  )
}
