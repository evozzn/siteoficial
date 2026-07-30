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
  const [ultimoEnvio, setUltimoEnvio] = useState<{
    nome: string
    empresa: string
    projeto: string
  } | null>(null)

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
      setUltimoEnvio({
        nome: nome.trim(),
        empresa: empresa.trim(),
        projeto: projeto.trim(),
      })

      analytics.contactFormSubmit()

      setNome('')
      setEmpresa('')
      setWhatsapp('')
      setInstagram('')
      setProjeto('')
      setErrors({})
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
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            @
          </span>
          <input
            type="text"
            id="instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value.replace(/^@+/, ''))}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-8 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-primary focus:ring-primary transition-colors"
            placeholder="seuperfil"
          />
        </div>
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
            Enviado. Nossa equipe já está analisando e logo entramos em contato.
          </p>
        </div>
      )}

      <p className="text-xs text-gray-500">
        Seus dados são usados só pra retornar seu contato.
      </p>

      {/* Botões de envio */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={isSubmitting || submitSuccess}
          className={`flex-1 inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full transition-all duration-300 uppercase text-sm tracking-wide ${
            isSubmitting || submitSuccess
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-primary hover:bg-secondary text-white transform hover:scale-105 glow-primary'
          }`}
        >
          {submitSuccess
            ? 'Orçamento enviado!'
            : isSubmitting
            ? 'Enviando...'
            : 'Solicitar orçamento'}
          {!isSubmitting && !submitSuccess && (
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

        {submitSuccess && ultimoEnvio && (
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5571987497742'}?text=${encodeURIComponent(
              `Olá, me chamo ${ultimoEnvio.nome}, da empresa ${ultimoEnvio.empresa}. Acabei de solicitar um orçamento pelo site.${
                ultimoEnvio.projeto ? ` Sobre o projeto: ${ultimoEnvio.projeto}` : ''
              }`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full transition-all duration-300 uppercase text-sm tracking-wide bg-green-600 hover:bg-green-700 text-white transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Continuar no Whatsapp
          </a>
        )}
      </div>

      {/* Mensagem de erro geral */}
      {errors.geral && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg">
          <p className="text-sm">{errors.geral}</p>
        </div>
      )}
    </form>
  )
}
