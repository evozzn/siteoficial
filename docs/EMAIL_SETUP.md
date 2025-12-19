# Configuração de Email para Formulário de Contato

O formulário de contato está integrado com uma API route que permite envio de emails.

## Modo de Desenvolvimento (Atual)

Atualmente, o sistema está em modo de desenvolvimento e apenas registra os emails no console. Para ativar o envio real de emails, siga as instruções abaixo.

## Configuração com Resend (Recomendado)

### 1. Criar conta no Resend

1. Acesse [https://resend.com](https://resend.com)
2. Crie uma conta gratuita
3. Verifique seu domínio ou use o domínio de teste do Resend

### 2. Obter API Key

1. No dashboard do Resend, vá em "API Keys"
2. Crie uma nova API key
3. Copie a chave (formato: `re_xxxxxxxxxxxxx`)

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
RESEND_API_KEY=re_sua_chave_aqui
RESEND_FROM_EMAIL=contato@evozzn.com
RESEND_TO_EMAIL=contato@evozzn.com
```

### 4. Ativar Integração no Código

Edite o arquivo `app/api/contato/route.ts` e descomente o código do Resend (linhas comentadas).

### 5. Instalar Dependência (Opcional)

Se quiser usar a biblioteca oficial do Resend:

```bash
npm install resend
```

Depois, atualize `app/api/contato/route.ts` para usar a biblioteca.

## Alternativas

### SendGrid

```typescript
// Exemplo de integração com SendGrid
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

await sgMail.send({
  to: process.env.SENDGRID_TO_EMAIL,
  from: process.env.SENDGRID_FROM_EMAIL,
  subject: `Novo contato de ${data.nome}`,
  html: `...`,
})
```

### Nodemailer (SMTP)

```typescript
// Exemplo com Nodemailer
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

await transporter.sendMail({
  from: process.env.SMTP_FROM,
  to: process.env.SMTP_TO,
  subject: `Novo contato de ${data.nome}`,
  html: `...`,
})
```

## Estrutura da API

### Endpoint: `/api/contato`

**Método:** POST

**Body:**
```json
{
  "nome": "João Silva",
  "email": "joao@example.com",
  "mensagem": "Gostaria de saber mais sobre seus serviços."
}
```

**Resposta de Sucesso (200):**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso!"
}
```

**Resposta de Erro (400/500):**
```json
{
  "success": false,
  "errors": ["Nome deve ter pelo menos 2 caracteres"],
  "error": "Mensagem de erro"
}
```

## Validações

- **Nome:** Mínimo 2 caracteres
- **Email:** Formato válido de email
- **Mensagem:** Mínimo 10 caracteres

## Segurança

- Validação server-side implementada
- Proteção contra spam (pode adicionar rate limiting)
- Sanitização de dados de entrada
- CORS configurado automaticamente pelo Next.js

## Próximos Passos

1. Configurar serviço de email (Resend recomendado)
2. Adicionar rate limiting (opcional)
3. Adicionar notificações (Slack, Discord, etc.)
4. Implementar banco de dados para histórico (opcional)



