export interface Resultado {
  label: string
  valor: string
}

export interface Case {
  id: string
  slug?: string
  cliente: string
  titulo: string
  descricao: string
  categoria: string
  resultados: Resultado[]
  logo?: string
}

// Dados reais de clientes ativos. Apenas o case de criativos para Meta Ads
// é anônimo, por confidencialidade do parceiro — os demais números são reais
// e identificados.
export const cases: Case[] = [
  {
    id: '1',
    slug: 'sinter-mt',
    cliente: 'SINTER-MT',
    titulo: 'Primeiro mês de gestão',
    descricao:
      'Perfil parado antes da Evozzn. No primeiro mês de gestão, alcance e visualizações dispararam, cliques no link da bio triplicaram.',
    categoria: 'Social Media',
    logo: '/cases/sinter-mt-logo.png',
    resultados: [
      { label: 'Alcance', valor: '+1.279%' },
      { label: 'Visualizações', valor: '+447%' },
      { label: 'Cliques no link', valor: '+200%' },
    ],
  },
  {
    id: '2',
    cliente: 'Luiz Guedes · Treinador Online',
    titulo: 'Primeiro mês de gestão',
    descricao:
      'Perfil sem conteúdo consistente antes da Evozzn. No primeiro mês de gestão, alcance quase dez vezes maior e cliques no link da bio saltaram.',
    categoria: 'Social Media',
    logo: '/cases/luiz-guedes-logo.jpg',
    resultados: [
      { label: 'Alcance', valor: '+950%' },
      { label: 'Visualizações', valor: '+318%' },
      { label: 'Cliques no link', valor: '+650%' },
    ],
  },
  {
    id: '3',
    cliente: 'Parceria de Mídia Paga · Criativos',
    titulo: 'Criativos para 3 contas de um parceiro',
    descricao:
      'Uma agência de mídia paga contratou a Evozzn para produzir os criativos em vídeo de três contas, focados em retenção e conversão. A campanha foi conduzida pelo parceiro. Não é um serviço da Evozzn. Resultado real, documentado nos relatórios de performance das contas atendidas.',
    categoria: 'Criativos para Meta Ads',
    resultados: [
      { label: 'Faturamento', valor: 'R$ 3,28 mi+' },
      { label: 'Contas atendidas', valor: '3' },
      { label: 'Duração da parceria', valor: '8 meses' },
    ],
  },
  {
    id: '4',
    cliente: 'Diogo Esteves91 · YouTube',
    titulo: 'Parceria desde setembro de 2025',
    descricao:
      'Canal de futebol no YouTube. A Evozzn assumiu a edição completa dos vídeos: roteiro, corte, ritmo e thumbnails.',
    categoria: 'YouTube',
    logo: '/cases/diogo-esteves-foto.jpg',
    resultados: [
      { label: 'Visualizações', valor: '+500 mil' },
      { label: 'Comentários', valor: '+3 mil' },
      { label: 'Vídeos editados', valor: '52' },
    ],
  },
]

export function getCaseBySlug(slug: string) {
  return cases.find((c) => c.slug === slug)
}

// Páginas de case detalhadas, com seção de antes e depois. Só o SINTER-MT
// tem página própria por enquanto. Dados vindos do Instagram Insights,
// arquivados em docs/cases/CASE_SINTER_MT.md — não arredondar nem inventar
// números além do que está documentado lá.
export interface MetricaAntesDepois {
  label: string
  antes: string
  depois: string
  crescimento: string
}

export interface FotoFeed {
  file: string
  mes: string
  dia: string
}

export interface CaseDetalhe {
  slug: string
  cliente: string
  segmento: string
  servico: string
  inicioGestao: string
  tag: string
  titulo: string
  subtitulo: string
  ctaLabel: string
  antesDepois: MetricaAntesDepois[]
  destaquesMes: string[]
  oQueFoiFeito: string[]
  fotoAntes: string
  fotoDepois: string
  galeria: FotoFeed[]
  fonteNota: string
}

export const casesDetalhados: Record<string, CaseDetalhe> = {
  'sinter-mt': {
    slug: 'sinter-mt',
    cliente: 'SINTER-MT',
    segmento: 'Sindicato dos terapeutas de Mato Grosso · saúde e bem-estar, práticas integrativas',
    servico: 'Gestão de Instagram + landing page da Jornada Sinter',
    inicioGestao: '25 de maio de 2026',
    tag: 'Case real',
    titulo: 'De 11 mil para 561 mil visualizações',
    subtitulo:
      'Gestão de Instagram do SINTER-MT, sindicato dos terapeutas de Mato Grosso. Crescimento 100% orgânico.',
    ctaLabel: 'Quero resultados assim',
    antesDepois: [
      { label: 'Visualizações', antes: '11.197', depois: '561.406', crescimento: '50x' },
      { label: 'Contas alcançadas', antes: '2.467', depois: '199.151', crescimento: '80x' },
      { label: 'Seguidores', antes: '889', depois: '2.168', crescimento: '2,4x' },
      { label: 'Visitas ao perfil', antes: '140', depois: '3.883', crescimento: '27x' },
      { label: 'Toques no link da bio', antes: '10', depois: '270', crescimento: '27x' },
    ],
    destaquesMes: [
      '4.439 interações no mês, sendo 529 em Reels, 485 em posts e 79 em stories',
      '+752 seguidores em um único mês, de 939 para 1.691',
      '90,3% das visualizações vieram de contas que ainda não seguiam o perfil',
      'Formato líder: carrossel com autoridades da saúde e educação, presente em 3 dos 4 posts de maior alcance',
    ],
    oQueFoiFeito: [
      'Diagnóstico completo do perfil',
      'Estudo de público para criação de persona',
      'Definição de linha editorial e pilares de conteúdo',
      'Tom de voz e identidade de comunicação',
      'Benchmarking de concorrentes e outros perfis do nicho',
      'Definição de objetivos',
      'Acompanhamento ativo das métricas do perfil',
      'Desenvolvimento estratégico de posts',
      'Edição de vídeos',
      'Acompanhamento de perfis concorrentes',
      'Calendário editorial',
      'Postagem constante de conteúdo',
      'Análise de desempenho mensal',
      'Alinhamento mensal para ajustes',
      'Gestão diária do perfil',
      'Fim da preocupação com falta de conteúdo',
      'Posicionamento como autoridade no segmento',
      'Perfil deixou de girar só em torno de eventos e conquistou espaço como referência em saúde integrativa no estado',
    ],
    fotoAntes: '/cases/sinter-mt/perfil-antes.webp',
    fotoDepois: '/cases/sinter-mt/perfil-depois.webp',
    galeria: [
      { file: '/cases/sinter-mt/feed/51-2026-09-25.webp', mes: '09', dia: '25' },
      { file: '/cases/sinter-mt/feed/50-2026-09-23.webp', mes: '09', dia: '23' },
      { file: '/cases/sinter-mt/feed/49-2026-09-21.webp', mes: '09', dia: '21' },
      { file: '/cases/sinter-mt/feed/48-2026-09-19.webp', mes: '09', dia: '19' },
      { file: '/cases/sinter-mt/feed/47-2026-09-17.webp', mes: '09', dia: '17' },
      { file: '/cases/sinter-mt/feed/46-2026-09-14.webp', mes: '09', dia: '14' },
      { file: '/cases/sinter-mt/feed/45-2026-09-11.webp', mes: '09', dia: '11' },
      { file: '/cases/sinter-mt/feed/44-2026-09-09.webp', mes: '09', dia: '09' },
      { file: '/cases/sinter-mt/feed/43-2026-09-07.webp', mes: '09', dia: '07' },
      { file: '/cases/sinter-mt/feed/42-2026-09-06.webp', mes: '09', dia: '06' },
      { file: '/cases/sinter-mt/feed/41-2026-09-05.webp', mes: '09', dia: '05' },
      { file: '/cases/sinter-mt/feed/40-2026-08-31.webp', mes: '08', dia: '31' },
      { file: '/cases/sinter-mt/feed/39-2026-08-28.webp', mes: '08', dia: '28' },
      { file: '/cases/sinter-mt/feed/38-2026-08-26.webp', mes: '08', dia: '26' },
      { file: '/cases/sinter-mt/feed/37-2026-08-24.webp', mes: '08', dia: '24' },
      { file: '/cases/sinter-mt/feed/36-2026-08-21.webp', mes: '08', dia: '21' },
      { file: '/cases/sinter-mt/feed/35-2026-08-19.webp', mes: '08', dia: '19' },
      { file: '/cases/sinter-mt/feed/34-2026-08-17.webp', mes: '08', dia: '17' },
      { file: '/cases/sinter-mt/feed/33-2026-08-14.webp', mes: '08', dia: '14' },
      { file: '/cases/sinter-mt/feed/32-2026-08-12.webp', mes: '08', dia: '12' },
      { file: '/cases/sinter-mt/feed/31-2026-08-10.webp', mes: '08', dia: '10' },
      { file: '/cases/sinter-mt/feed/30-2026-08-06.webp', mes: '08', dia: '06' },
      { file: '/cases/sinter-mt/feed/29-2026-08-05.webp', mes: '08', dia: '05' },
      { file: '/cases/sinter-mt/feed/28-2026-08-03.webp', mes: '08', dia: '03' },
      { file: '/cases/sinter-mt/feed/27-2026-08-01.webp', mes: '08', dia: '01' },
      { file: '/cases/sinter-mt/feed/26-2026-07-31.webp', mes: '07', dia: '31' },
      { file: '/cases/sinter-mt/feed/25-2026-07-27.webp', mes: '07', dia: '27' },
      { file: '/cases/sinter-mt/feed/24-2026-07-25.webp', mes: '07', dia: '25' },
      { file: '/cases/sinter-mt/feed/23-2026-07-23.webp', mes: '07', dia: '23' },
      { file: '/cases/sinter-mt/feed/22-2026-07-21.webp', mes: '07', dia: '21' },
      { file: '/cases/sinter-mt/feed/21-2026-07-19.webp', mes: '07', dia: '19' },
      { file: '/cases/sinter-mt/feed/20-2026-07-17.webp', mes: '07', dia: '17' },
      { file: '/cases/sinter-mt/feed/19-2026-07-14.webp', mes: '07', dia: '14' },
      { file: '/cases/sinter-mt/feed/18-2026-07-12.webp', mes: '07', dia: '12' },
      { file: '/cases/sinter-mt/feed/17-2026-07-10.webp', mes: '07', dia: '10' },
      { file: '/cases/sinter-mt/feed/16-2026-07-07.webp', mes: '07', dia: '07' },
      { file: '/cases/sinter-mt/feed/15-2026-07-05.webp', mes: '07', dia: '05' },
      { file: '/cases/sinter-mt/feed/14-2026-07-03.webp', mes: '07', dia: '03' },
      { file: '/cases/sinter-mt/feed/13-2026-06-29.webp', mes: '06', dia: '29' },
      { file: '/cases/sinter-mt/feed/12-2026-06-27.webp', mes: '06', dia: '27' },
      { file: '/cases/sinter-mt/feed/11-2026-06-25.webp', mes: '06', dia: '25' },
      { file: '/cases/sinter-mt/feed/10-2026-06-22.webp', mes: '06', dia: '22' },
      { file: '/cases/sinter-mt/feed/09-2026-06-19.webp', mes: '06', dia: '19' },
      { file: '/cases/sinter-mt/feed/08-2026-06-17.webp', mes: '06', dia: '17' },
      { file: '/cases/sinter-mt/feed/07-2026-06-15.webp', mes: '06', dia: '15' },
      { file: '/cases/sinter-mt/feed/06-2026-06-12.webp', mes: '06', dia: '12' },
      { file: '/cases/sinter-mt/feed/05-2026-06-10.webp', mes: '06', dia: '10' },
      { file: '/cases/sinter-mt/feed/04-2026-06-08.webp', mes: '06', dia: '08' },
      { file: '/cases/sinter-mt/feed/03-2026-06-05.webp', mes: '06', dia: '05' },
      { file: '/cases/sinter-mt/feed/02-2026-06-03.webp', mes: '06', dia: '03' },
      { file: '/cases/sinter-mt/feed/01-2026-06-01.webp', mes: '06', dia: '01' },
    ],
    fonteNota: 'Dados extraídos do Instagram Insights do SINTER-MT.',
  },
}

export function getCaseDetalheBySlug(slug: string) {
  return casesDetalhados[slug]
}
