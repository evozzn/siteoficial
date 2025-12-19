# Configuração de Deploy Automático

O projeto está configurado para fazer deploy automático na Vercel a cada push na branch `main`.

## Como Funciona

O GitHub Actions está configurado para:
- Detectar pushes na branch `main`
- Fazer build do projeto
- Fazer deploy automático na Vercel

## Configuração Necessária

Para o deploy automático funcionar, você precisa configurar o token da Vercel no GitHub:

### 1. Obter o Token da Vercel

1. Acesse [Vercel Dashboard](https://vercel.com/account/tokens)
2. Crie um novo token com permissões de deploy
3. Copie o token gerado

### 2. Adicionar o Token no GitHub

1. Acesse o repositório no GitHub: https://github.com/evozzn/siteoficial
2. Vá em **Settings** → **Secrets and variables** → **Actions**
3. Clique em **New repository secret**
4. Nome: `VERCEL_TOKEN`
5. Valor: Cole o token da Vercel
6. Clique em **Add secret**

### 3. Configurar o Projeto na Vercel (Primeira Vez)

Se ainda não tiver o projeto conectado na Vercel:

1. Acesse [Vercel Dashboard](https://vercel.com/dashboard)
2. Clique em **Add New Project**
3. Importe o repositório `evozzn/siteoficial`
4. Configure as variáveis de ambiente se necessário
5. Clique em **Deploy**

Após isso, os próximos deploys serão automáticos via GitHub Actions.

## Verificar Deploy

Após cada push na branch `main`, você pode verificar:

- **GitHub Actions**: https://github.com/evozzn/siteoficial/actions
- **Vercel Dashboard**: https://vercel.com/dashboard

O deploy será feito automaticamente e o site estará disponível em: https://siteoficial-nu.vercel.app
