# Configuração do Google Analytics 4

## 📊 Visão Geral

O Google Analytics 4 está integrado no site para rastrear:
- Visualizações de página
- Eventos de conversão (formulário de contato)
- Cliques em CTAs
- Cliques no WhatsApp
- Navegação do usuário

## 🚀 Configuração Inicial

### 1. Criar Conta no Google Analytics

1. Acesse: https://analytics.google.com/
2. Faça login com sua conta Google
3. Clique em "Criar" → "Propriedade"
4. Preencha:
   - Nome da propriedade: "Evozzn Site"
   - Fuso horário: (GMT-03:00) Brasília
   - Moeda: Real brasileiro (BRL)
5. Clique em "Avançar" e complete a configuração

### 2. Obter Measurement ID

1. No Google Analytics, vá em **Administrador** (ícone de engrenagem)
2. Na coluna **Propriedade**, clique em **Fluxos de dados**
3. Clique em **Adicionar fluxo** → **Web**
4. Preencha:
   - URL do site: `https://evozzn.com`
   - Nome do fluxo: "Evozzn Website"
5. Clique em **Criar fluxo**
6. Copie o **Measurement ID** (formato: `G-XXXXXXXXXX`)

### 3. Configurar Variável de Ambiente

Crie ou edite o arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Importante:**
- Substitua `G-XXXXXXXXXX` pelo seu Measurement ID real
- O prefixo `NEXT_PUBLIC_` é obrigatório para variáveis acessíveis no cliente
- Não commite o arquivo `.env.local` (já está no .gitignore)

### 4. Configurar no Vercel (Produção)

1. Acesse o dashboard do Vercel
2. Vá em **Settings** → **Environment Variables**
3. Adicione:
   - **Name:** `NEXT_PUBLIC_GA_ID`
   - **Value:** `G-XXXXXXXXXX` (seu Measurement ID)
   - **Environment:** Production, Preview, Development
4. Clique em **Save**
5. Faça um novo deploy

## ✅ Verificar se Está Funcionando

### 1. Teste Local

1. Configure o `.env.local` com seu GA ID
2. Inicie o servidor: `npm run dev`
3. Abra o site: http://localhost:3000
4. Abra o DevTools (F12) → **Console**
5. Você deve ver requisições para `googletagmanager.com`

### 2. Teste em Produção

1. Após configurar no Vercel e fazer deploy
2. Acesse o site em produção
3. No Google Analytics, vá em **Relatórios** → **Tempo real**
4. Você deve ver sua visita aparecendo (pode levar alguns minutos)

### 3. Teste de Eventos

1. Preencha e envie o formulário de contato
2. No Google Analytics, vá em **Eventos**
3. Procure pelo evento `form_submit`
4. Deve aparecer o evento registrado

## 📈 Eventos Rastreados

### Eventos Automáticos

- **page_view**: Visualização de página (automático)
- **session_start**: Início de sessão (automático)

### Eventos Customizados

- **form_submit**: Envio do formulário de contato
  - Parâmetros: `form_name`, `form_location`
  
- **cta_click**: Clique em botões CTA
  - Parâmetros: `cta_name`, `location`
  
- **whatsapp_click**: Clique no botão WhatsApp
  - Parâmetros: `location`
  
- **external_link_click**: Clique em links externos
  - Parâmetros: `link_url`, `link_text`

## 🔧 Adicionar Novos Eventos

Para adicionar tracking a novos elementos, use a função `analytics`:

```typescript
import { analytics } from '@/lib/analytics'

// Exemplo: Track de clique em botão
analytics.ctaClick('Solicitar Proposta', 'home_page')

// Exemplo: Track customizado
analytics.trackEvent('custom_event', {
  custom_param: 'value'
})
```

## 🎯 Configurar Conversões

### 1. Marcar Evento como Conversão

1. No Google Analytics, vá em **Administrador**
2. Na coluna **Propriedade**, clique em **Eventos**
3. Encontre o evento `form_submit`
4. Ative o toggle **Marcar como conversão**

### 2. Criar Evento Personalizado (Opcional)

1. Vá em **Administrador** → **Eventos personalizados**
2. Clique em **Criar evento personalizado**
3. Configure:
   - Nome: `form_submit`
   - Condição: `event_name equals form_submit`
4. Marque como conversão

## 📊 Relatórios Úteis

### Relatórios Principais

- **Tempo real**: Ver visitantes no momento
- **Aquisição**: De onde vêm os visitantes
- **Engajamento**: Páginas mais visitadas
- **Conversões**: Formulários enviados

### Relatórios Customizados

1. Vá em **Explorar** → **Criar exploração**
2. Crie relatórios personalizados conforme necessidade

## 🔒 Privacidade e LGPD

### Configurações de Privacidade

O Google Analytics já está configurado para:
- Respeitar configurações de privacidade do navegador
- Não rastrear usuários que optaram por não ser rastreados

### Política de Privacidade

Certifique-se de mencionar o uso do Google Analytics em sua política de privacidade.

## 🐛 Troubleshooting

### Analytics não está funcionando

1. Verifique se `NEXT_PUBLIC_GA_ID` está configurado
2. Verifique se o ID está correto (formato `G-XXXXXXXXXX`)
3. Limpe o cache do navegador
4. Verifique o console do navegador por erros

### Eventos não aparecem

1. Aguarde alguns minutos (pode haver delay)
2. Verifique se o evento está sendo disparado (console do navegador)
3. Verifique se está na propriedade correta do GA4

### Dados não aparecem em tempo real

- Pode levar até 24-48 horas para dados históricos aparecerem
- Dados em tempo real aparecem imediatamente
- Verifique se está no modo "Tempo real" no GA4

## 📚 Recursos Adicionais

- [Documentação do Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4)
- [Guia de Eventos GA4](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Google Tag Assistant](https://tagassistant.google.com/) - Ferramenta de debug




