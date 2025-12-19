/**
 * Serviço de email para envio de mensagens de contato
 * 
 * Para usar Resend em produção:
 * 1. Instale: npm install resend
 * 2. Configure RESEND_API_KEY no .env
 * 3. Descomente o código abaixo e remova a simulação
 */

interface EmailData {
  nome: string
  email: string
  telefone: string
  mensagem: string
}

export async function sendContactEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  // Exemplo de integração com Resend (descomente quando configurar)
  /*
  import { Resend } from 'resend'
  
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  try {
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'evozzn@gmail.com',
      to: process.env.RESEND_TO_EMAIL || 'evozzn@gmail.com',
      subject: `Novo contato de ${data.nome}`,
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> ${data.nome}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefone:</strong> ${data.telefone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${data.mensagem.replace(/\n/g, '<br>')}</p>
      `,
    })
    
    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro ao enviar email',
    }
  }
  */

  // Modo desenvolvimento (log apenas)
  console.log('📧 Email de contato:', data)
  return { success: true }
}

