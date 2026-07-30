import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  nome: string
  empresa: string
  whatsapp: string
  instagram?: string
  projeto?: string
}

// Validação server-side
function validateContactData(data: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.nome || data.nome.trim().length < 2) {
    errors.push('Nome deve ter pelo menos 2 caracteres')
  }

  if (!data.empresa || data.empresa.trim().length < 2) {
    errors.push('Empresa deve ter pelo menos 2 caracteres')
  }

  if (!data.whatsapp) {
    errors.push('WhatsApp é obrigatório')
  } else {
    // Remove caracteres não numéricos para validação
    const cleanPhone = data.whatsapp.replace(/\D/g, '')
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      errors.push('WhatsApp inválido. Use o formato (00) 00000-0000')
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

// Função para enviar email
// Para usar Resend em produção, descomente o código abaixo e configure RESEND_API_KEY
async function sendEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    /*
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'evozzn@gmail.com'
    const RESEND_TO_EMAIL = process.env.RESEND_TO_EMAIL || 'evozzn@gmail.com'

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
        subject: `Novo orçamento de ${data.nome}`,
        html: `
          <h2>Novo pedido de orçamento</h2>
          <p><strong>Nome:</strong> ${data.nome}</p>
          <p><strong>Empresa:</strong> ${data.empresa}</p>
          <p><strong>WhatsApp:</strong> ${data.whatsapp}</p>
          <p><strong>Instagram:</strong> ${data.instagram || 'Não informado'}</p>
          <p><strong>Projeto:</strong></p>
          <p>${(data.projeto || '').replace(/\n/g, '<br>')}</p>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return { success: false, error: errorData.message || 'Erro ao enviar email' }
    }

    return { success: true }
    */

    // Modo desenvolvimento: log apenas
    console.log('📧 Pedido de orçamento:', {
      nome: data.nome,
      empresa: data.empresa,
      whatsapp: data.whatsapp,
      instagram: data.instagram,
      projeto: data.projeto,
    })
    console.log('⚠️  Configure RESEND_API_KEY no .env para envio real')

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
        message: 'Solicitação enviada com sucesso!',
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
