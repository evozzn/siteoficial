import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  nome: string
  email: string
  telefone: string
  mensagem: string
}

// Validação server-side
function validateContactData(data: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.nome || data.nome.trim().length < 2) {
    errors.push('Nome deve ter pelo menos 2 caracteres')
  }

  if (!data.email) {
    errors.push('Email é obrigatório')
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      errors.push('Email inválido')
    }
  }

  if (!data.telefone) {
    errors.push('Telefone é obrigatório')
  } else {
    // Remove caracteres não numéricos para validação
    const cleanPhone = data.telefone.replace(/\D/g, '')
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      errors.push('Telefone inválido. Use o formato (00) 00000-0000')
    }
  }

  if (!data.mensagem || data.mensagem.trim().length < 10) {
    errors.push('Mensagem deve ter pelo menos 10 caracteres')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

// Função para enviar email (estrutura preparada para integração)
async function sendEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    // Opção 1: Usar Resend (recomendado para produção)
    // Descomente e configure se tiver API key do Resend
    /*
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'contato@evozzn.com'
    const RESEND_TO_EMAIL = process.env.RESEND_TO_EMAIL || 'contato@evozzn.com'

    if (!RESEND_API_KEY) {
      return { success: false, error: 'Serviço de email não configurado' }
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: RESEND_TO_EMAIL,
        subject: `Novo contato de ${data.nome}`,
        html: `
          <h2>Novo contato recebido</h2>
          <p><strong>Nome:</strong> ${data.nome}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Telefone:</strong> ${data.telefone}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${data.mensagem.replace(/\n/g, '<br>')}</p>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return { success: false, error: errorData.message || 'Erro ao enviar email' }
    }

    return { success: true }
    */

    // Opção 2: Log para desenvolvimento (substituir por serviço real em produção)
    console.log('📧 Email que seria enviado:')
    console.log('De:', data.email)
    console.log('Nome:', data.nome)
    console.log('Telefone:', data.telefone)
    console.log('Mensagem:', data.mensagem)
    console.log('\n⚠️  Configure RESEND_API_KEY no .env para envio real')

    // Simulação de sucesso para desenvolvimento
    // Em produção, substitua por chamada real ao serviço de email
    return { success: true }
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validação
    const validation = validateContactData(body)
    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.errors,
        },
        { status: 400 }
      )
    }

    // Enviar email
    const emailResult = await sendEmail(body)

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: emailResult.error || 'Erro ao enviar mensagem',
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Mensagem enviada com sucesso!',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro na API de contato:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Erro interno do servidor',
      },
      { status: 500 }
    )
  }
}

// Método não permitido
export async function GET() {
  return NextResponse.json(
    { error: 'Método não permitido' },
    { status: 405 }
  )
}

