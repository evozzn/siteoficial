# Como Testar o Sitemap e Robots.txt

## 🧪 Teste Local (Desenvolvimento)

### 1. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

### 2. Acessar as URLs no navegador

Abra seu navegador e acesse:

- **Sitemap:** http://localhost:3000/sitemap.xml
- **Robots:** http://localhost:3000/robots.txt

Você deve ver:
- **Sitemap.xml:** Uma lista XML com todas as URLs do site
- **Robots.txt:** As regras de indexação

---

## 🏗️ Teste Local (Build de Produção)

### 1. Fazer build de produção

```bash
npm run build
```

### 2. Iniciar servidor de produção

```bash
npm start
```

### 3. Acessar as URLs

- **Sitemap:** http://localhost:3000/sitemap.xml
- **Robots:** http://localhost:3000/robots.txt

---

## ✅ Validação do XML

### Opção 1: Validador Online

1. Acesse: https://www.xml-sitemaps.com/validate-xml-sitemap.html
2. Cole a URL do seu sitemap: `https://evozzn.com/sitemap.xml`
3. Clique em "Validate"

### Opção 2: Google Search Console

1. Acesse: https://search.google.com/search-console
2. Adicione sua propriedade
3. Vá em "Sitemaps"
4. Envie: `sitemap.xml`
5. Verifique se há erros

### Opção 3: Validador de Robots.txt

1. Acesse: https://www.google.com/webmasters/tools/robots-testing-tool
2. Cole a URL do seu robots.txt
3. Verifique as regras

---

## 🌐 Teste em Produção (Vercel)

### 1. Após deploy no Vercel

Acesse:
- **Sitemap:** https://evozzn.com/sitemap.xml
- **Robots:** https://evozzn.com/robots.txt

### 2. Verificar no navegador

- O sitemap deve mostrar XML formatado
- O robots.txt deve mostrar as regras

### 3. Testar com curl (Terminal)

```bash
# Testar sitemap
curl https://evozzn.com/sitemap.xml

# Testar robots
curl https://evozzn.com/robots.txt
```

---

## 🔍 O que verificar no Sitemap

✅ Todas as URLs estão presentes:
- `/`
- `/home`
- `/sobre`
- `/servicos`
- `/cases`
- `/contato`

✅ Cada URL tem:
- `loc` (localização)
- `lastmod` (última modificação)
- `changefreq` (frequência de mudança)
- `priority` (prioridade)

✅ Formato XML válido

---

## 🔍 O que verificar no Robots.txt

✅ Regras corretas:
- `Allow: /` (permite indexação)
- `Disallow: /api/` (bloqueia APIs)
- `Disallow: /_next/` (bloqueia arquivos internos)

✅ Sitemap referenciado:
- `Sitemap: https://evozzn.com/sitemap.xml`

---

## 🛠️ Ferramentas Úteis

### Validação de Sitemap
- https://www.xml-sitemaps.com/validate-xml-sitemap.html
- https://validator.w3.org/

### Validação de Robots.txt
- https://www.google.com/webmasters/tools/robots-testing-tool
- https://technicalseo.com/tools/robots-txt/

### Teste de Indexação
- Google Search Console
- Bing Webmaster Tools

---

## 📝 Checklist de Testes

- [ ] Sitemap acessível em `/sitemap.xml`
- [ ] Robots.txt acessível em `/robots.txt`
- [ ] XML do sitemap é válido
- [ ] Todas as páginas estão no sitemap
- [ ] Prioridades configuradas corretamente
- [ ] Robots.txt bloqueia rotas corretas
- [ ] Sitemap referenciado no robots.txt
- [ ] Funciona em produção (após deploy)

---

## 🚨 Problemas Comuns

### Sitemap não aparece
- Verifique se o arquivo `app/sitemap.ts` existe
- Verifique se o build foi feito corretamente
- Limpe o cache: `.next` e refaça o build

### Robots.txt não aparece
- Verifique se o arquivo `app/robots.ts` existe
- Verifique se o build foi feito corretamente

### URLs incorretas no sitemap
- Verifique a variável `baseUrl` em `app/sitemap.ts`
- Certifique-se de usar o domínio correto




