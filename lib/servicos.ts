export interface Servico {
  slug: string
  titulo: string
  categoria: string
  descricao: string
  resumo: string
  beneficios: string[]
  icone: string
}

export interface ServicoHome {
  titulo: string
  descricao: string
  destaque: string
  icone: string
  destino: string
}

// Páginas reais de serviço (geradas em /servicos/[slug]).
// Inteligência de Dados e Conteúdo & Social não têm página própria:
// o conteúdo delas foi unificado dentro de Social Media, já que não são
// pilares separados na documentação interna da Evozzn.
export const servicos: Servico[] = [
  {
    slug: 'social-media',
    titulo: 'Social Media',
    categoria: 'Social Media',
    descricao:
      'Diagnóstico de perfil, linha editorial e gestão completa da presença, mês a mês.',
    resumo:
      'Cuidamos do diagnóstico, da linha editorial e da gestão completa das suas redes sociais, com estratégia de conteúdo orientada por dados reais e atendimento próximo.',
    beneficios: [
      'Presença consistente nas redes',
      'Estratégia de conteúdo alinhada ao público certo',
      'Direção de arte padronizada em cada post',
      'Copy estratégica em carrosséis e legendas',
      'Decisões orientadas por dados de performance',
      'Relatório mensal de performance',
    ],
    icone:
      'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5l.01 0',
  },
  {
    slug: 'producao-e-edicao-de-video',
    titulo: 'Produção e Edição de Vídeo',
    categoria: 'Vídeo',
    descricao:
      'Captação em campo, roteiro, edição e entrega pronta pra publicar.',
    resumo:
      'Captação em campo, roteiro e edição ponta a ponta, pra Reels, institucionais e conteúdo comercial, com entrega pronta pra publicar.',
    beneficios: [
      'Captação profissional em campo (filmmaker)',
      'Roteiro e storytelling',
      'Edição e montagem completas',
      'Entrega final pronta pra publicar',
    ],
    icone:
      'M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z',
  },
  {
    slug: 'ux-ui-e-web-design',
    titulo: 'UX/UI e Web Design',
    categoria: 'Web Design',
    descricao:
      'Sites institucionais e landing pages, aplicando a identidade visual que a marca já tem.',
    resumo:
      'Sites institucionais e landing pages estruturados pra conversão, aplicando a identidade visual que a sua marca já tem.',
    beneficios: [
      'Estrutura pensada pra conversão',
      'Aplicação da identidade visual existente',
      'Design responsivo em qualquer tela',
      'Performance e velocidade de carregamento',
    ],
    icone:
      'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.128V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25',
  },
  {
    slug: 'direcao-de-arte',
    titulo: 'Direção de Arte',
    categoria: 'Direção de Arte',
    descricao: 'Padronização visual de posts, carrosséis e capas de Reels.',
    resumo:
      'Padronizamos a identidade visual de posts, carrosséis, stories e capas de Reels, pra cada peça sair reconhecível como a sua marca, não como mais um post genérico de agência.',
    beneficios: [
      'Grid e identidade visual consistentes em todos os posts',
      'Templates prontos pra carrosséis, stories e capas de Reels',
      'Padronização de cores, tipografia e composição',
      'Entregas reconhecíveis como a sua marca, não genéricas',
    ],
    icone:
      'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42',
  },
  {
    slug: 'copywriting-estrategico',
    titulo: 'Copywriting Estratégico',
    categoria: 'Copywriting',
    descricao:
      'Ganchos, headlines, CTAs e roteiros pensados pra conversão.',
    resumo:
      'Ganchos, headlines, CTAs e roteiros pensados pra conversão, não só pra preencher espaço na tela.',
    beneficios: [
      'Textos com propósito de conversão',
      'CTAs claros e diretos',
      'Roteiros pra vídeo e redes sociais',
      'Linguagem alinhada à voz da marca',
    ],
    icone:
      'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z',
  },
  {
    slug: 'relatorios-e-metricas',
    titulo: 'Relatórios e Métricas',
    categoria: 'Métricas',
    descricao:
      'Acompanhamento de performance e relatório mensal, sem enrolação.',
    resumo:
      'Acompanhamento de performance e relatório mensal, direto ao ponto, mostrando o que funcionou e o que muda no próximo mês.',
    beneficios: [
      'Relatório mensal claro',
      'Métricas que importam pro negócio',
      'Acompanhamento contínuo',
      'Transparência total no processo',
    ],
    icone:
      'M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z',
  },
  {
    slug: 'automacao',
    titulo: 'Automação',
    categoria: 'Automação',
    descricao: 'Otimização da jornada do cliente com automação.',
    resumo:
      'Estruturamos fluxos de atendimento automatizado, como respostas programadas e triagem inicial de leads, pra reduzir o tempo entre o primeiro contato e a conversão.',
    beneficios: [
      'Resposta mais rápida no primeiro contato',
      'Decisões de automação orientadas por dados e relatórios, não por achismo',
      'Menos tarefas manuais e repetitivas',
      'Jornada do cliente mais fluida',
      'Processo estruturado do lead até a conversão',
    ],
    icone:
      'M6 7h9a3 3 0 013 3v4a3 3 0 01-3 3H6a3 3 0 01-3-3v-4a3 3 0 013-3z M10.5 7V4.5 M10.5 3a1 1 0 100 2 1 1 0 000-2z M8 11v2 M13 11v2',
  },
]

// Lista exibida na home ("O que fazemos"). Inteligência de Dados e
// Conteúdo & Social continuam como cards separados aqui, mas o "destino"
// leva pra página unificada de Social Media.
export const servicosHome: ServicoHome[] = [
  {
    titulo: 'Social Media',
    descricao:
      'Diagnóstico de perfil, linha editorial e gestão completa da presença, mês a mês.',
    destaque: 'Diagnóstico, linha editorial, carrosséis e relatório mensal.',
    icone: servicos[0].icone,
    destino: 'social-media',
  },
  {
    titulo: 'Produção e Edição de Vídeo',
    descricao:
      'Captação em campo, roteiro, edição e entrega pronta pra publicar.',
    destaque: 'Captação, roteiro, edição e entrega pronta pra publicar.',
    icone: servicos[1].icone,
    destino: 'producao-e-edicao-de-video',
  },
  {
    titulo: 'UX/UI e Web Design',
    descricao:
      'Sites institucionais e landing pages, aplicando a identidade visual que a marca já tem.',
    destaque: 'Sites institucionais, landing pages e design responsivo.',
    icone: servicos[2].icone,
    destino: 'ux-ui-e-web-design',
  },
  {
    titulo: 'Direção de Arte',
    descricao: 'Padronização visual de posts, carrosséis e capas de Reels.',
    destaque: 'Grid, templates e padronização visual.',
    icone: servicos[3].icone,
    destino: 'direcao-de-arte',
  },
  {
    titulo: 'Copywriting Estratégico',
    descricao:
      'Ganchos, headlines, CTAs e roteiros pensados pra conversão.',
    destaque: 'Headlines, CTAs e roteiros pra conversão.',
    icone: servicos[4].icone,
    destino: 'copywriting-estrategico',
  },
  {
    titulo: 'Relatórios e Métricas',
    descricao:
      'Acompanhamento de performance e relatório mensal, sem enrolação.',
    destaque: 'Relatório mensal e acompanhamento contínuo.',
    icone: servicos[5].icone,
    destino: 'relatorios-e-metricas',
  },
  {
    titulo: 'Inteligência de Dados',
    descricao: 'Decisões baseadas em dados reais.',
    destaque: 'Decisões orientadas por dados de performance.',
    icone:
      'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    destino: 'social-media',
  },
  {
    titulo: 'Conteúdo & Social',
    descricao:
      'Estratégias de conteúdo que posicionam e conectam sua audiência.',
    destaque: 'Estratégia de conteúdo alinhada à audiência.',
    icone:
      'M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z',
    destino: 'social-media',
  },
  {
    titulo: 'Automação',
    descricao: 'Otimização da jornada do cliente com automação.',
    destaque: 'Respostas programadas e triagem inicial de leads.',
    icone: servicos[6].icone,
    destino: 'automacao',
  },
]

export function getServicoBySlug(slug: string) {
  return servicos.find((s) => s.slug === slug)
}
