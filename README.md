# Site Evozzn

Site institucional e portfólio da agência Evozzn.

## Tecnologias

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Font: Inter

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Build

```bash
npm run build
```

## Deploy Automático

O projeto está configurado para fazer deploy automático na Vercel a cada push na branch `main`.

Para configurar o deploy automático pela primeira vez, veja a documentação em [docs/DEPLOY_SETUP.md](./docs/DEPLOY_SETUP.md).

## Configuração de Email

O formulário de contato está configurado para funcionar. Para ativar o envio real de emails:

1. Veja a documentação em [docs/EMAIL_SETUP.md](./docs/EMAIL_SETUP.md)
2. Configure as variáveis de ambiente no `.env.local`
3. Ative a integração no código da API

Por padrão, o sistema está em modo de desenvolvimento (apenas logs no console).

