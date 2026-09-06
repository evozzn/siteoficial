export interface PortfolioItem {
  id: string
  titulo: string
  cliente: string
  categoria: string
  descricao: string
  imagem?: string
  imagemWidth?: number
  imagemHeight?: number
  video?: string
  youtubeId?: string
  vertical?: boolean
  link?: string
  views?: string
}

// Categorias exibidas no filtro da página de Portfólio.
// Sem opção "Todos": a página abre direto em Social Media.
export const categoriasPortfolio = [
  'Social Media',
  'Vídeo',
  'Direção de Arte',
  'Thumbnails',
]

// Popule este array com o material real do portfólio.
//
// Social Media: prints de antes/depois (ou só depois, quando não houver
// print salvo do antes) dos perfis geridos pela Evozzn.
// Vídeo: só vídeos de fato (Reels, edições), sem thumbnail solta.
// Direção de Arte: peças gráficas avulsas (não prints de perfil).
// Sites e landing pages (UX/UI) não entram aqui: ficam no Behance.
// Thumbnails: todas as capas de vídeo do YouTube do Diogo Esteves91,
// cada uma com o campo "views" preenchido com o número real de
// visualizações do vídeo correspondente.
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'luiz-guedes-perfil-depois',
    titulo: 'Perfil depois da gestão',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Social Media',
    descricao:
      'Perfil do Luiz Guedes após a gestão da Evozzn, com identidade visual consistente e conteúdo estratégico.',
    imagem: '/portfolio/luiz-guedes-perfil-depois.png',
    imagemWidth: 1220,
    imagemHeight: 2712,
  },
  {
    id: 'sinter-mt-perfil-depois',
    titulo: 'Perfil depois da gestão',
    cliente: 'SINTER-MT',
    categoria: 'Social Media',
    descricao:
      'Perfil do SINTER-MT após a gestão da Evozzn, com identidade visual consistente e conteúdo estratégico.',
    imagem: '/portfolio/sinter-mt-perfil-depois.png',
    imagemWidth: 1220,
    imagemHeight: 2712,
  },
  {
    id: 'evozzn-perfil',
    titulo: 'Perfil da Evozzn',
    cliente: 'Evozzn',
    categoria: 'Social Media',
    descricao:
      'Perfil oficial da Evozzn, aplicando o mesmo padrão de identidade e consistência entregue aos clientes.',
    imagem: '/portfolio/evozzn-perfil.png',
    imagemWidth: 1220,
    imagemHeight: 2712,
  },
  {
    id: 'evozzn-post-1',
    titulo: 'Post institucional',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Post estático da própria Evozzn, aplicando a identidade visual e o padrão de design usado nos clientes.',
    imagem: '/portfolio/evozzn-post-1.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-post-2',
    titulo: 'Não é divulgação, é infraestrutura de crescimento',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Post institucional sobre o posicionamento da Evozzn: marketing como estrutura de crescimento, não só divulgação pontual.',
    imagem: '/portfolio/evozzn-post-2.png',
    imagemWidth: 1087,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-post-3',
    titulo: 'Post institucional',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Post estático da própria Evozzn, aplicando a identidade visual e o padrão de design usado nos clientes.',
    imagem: '/portfolio/evozzn-post-3.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-post-4',
    titulo: 'Post institucional',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Post estático da própria Evozzn, aplicando a identidade visual e o padrão de design usado nos clientes.',
    imagem: '/portfolio/evozzn-post-4.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-carrossel-crescimento-1',
    titulo: 'O que trava o crescimento (lâmina 1)',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional sobre os gargalos mais comuns que travam o crescimento de um negócio.',
    imagem: '/portfolio/evozzn-carrossel-crescimento-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-carrossel-crescimento-2',
    titulo: 'O que trava o crescimento (lâmina 2)',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional sobre os gargalos mais comuns que travam o crescimento de um negócio.',
    imagem: '/portfolio/evozzn-carrossel-crescimento-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-carrossel-crescimento-3',
    titulo: 'O que trava o crescimento (lâmina 3)',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional sobre os gargalos mais comuns que travam o crescimento de um negócio.',
    imagem: '/portfolio/evozzn-carrossel-crescimento-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-carrossel-quem-somos-1',
    titulo: 'Quem somos nós (lâmina 1)',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de apresentação institucional, explicando o processo e o posicionamento da Evozzn.',
    imagem: '/portfolio/evozzn-carrossel-quem-somos-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-carrossel-quem-somos-2',
    titulo: 'Quem somos nós (lâmina 2)',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de apresentação institucional, explicando o processo e o posicionamento da Evozzn.',
    imagem: '/portfolio/evozzn-carrossel-quem-somos-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-carrossel-quem-somos-3',
    titulo: 'Quem somos nós (lâmina 3)',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de apresentação institucional, explicando o processo e o posicionamento da Evozzn.',
    imagem: '/portfolio/evozzn-carrossel-quem-somos-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-carrossel-quem-somos-4',
    titulo: 'Quem somos nós (lâmina 4)',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de apresentação institucional, explicando o processo e o posicionamento da Evozzn.',
    imagem: '/portfolio/evozzn-carrossel-quem-somos-04.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-carrossel-seguidores-1',
    titulo: 'Seguidores não pagam boletos (lâmina 1)',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional sobre transformar presença nas redes em resultado real, não só métricas de vaidade.',
    imagem: '/portfolio/evozzn-carrossel-seguidores-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-carrossel-seguidores-2',
    titulo: 'Seguidores não pagam boletos (lâmina 2)',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional sobre transformar presença nas redes em resultado real, não só métricas de vaidade.',
    imagem: '/portfolio/evozzn-carrossel-seguidores-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-carrossel-seguidores-3',
    titulo: 'Seguidores não pagam boletos (lâmina 3)',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional sobre transformar presença nas redes em resultado real, não só métricas de vaidade.',
    imagem: '/portfolio/evozzn-carrossel-seguidores-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-carrossel-seguidores-4',
    titulo: 'Seguidores não pagam boletos (lâmina 4)',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional sobre transformar presença nas redes em resultado real, não só métricas de vaidade.',
    imagem: '/portfolio/evozzn-carrossel-seguidores-04.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'evozzn-carrossel-seguidores-5',
    titulo: 'Seguidores não pagam boletos (lâmina 5)',
    cliente: 'Evozzn',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional sobre transformar presença nas redes em resultado real, não só métricas de vaidade.',
    imagem: '/portfolio/evozzn-carrossel-seguidores-05.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'luiz-guedes-carrossel-melhor-versao-1',
    titulo: 'Sua melhor versão (lâmina 1)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo sobre treino e evolução física, com identidade visual padronizada do perfil.',
    imagem: '/portfolio/luiz-guedes-carrossel-melhor-versao-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'luiz-guedes-carrossel-melhor-versao-2',
    titulo: 'Sua melhor versão (lâmina 2)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo sobre treino e evolução física, com identidade visual padronizada do perfil.',
    imagem: '/portfolio/luiz-guedes-carrossel-melhor-versao-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'luiz-guedes-carrossel-melhor-versao-3',
    titulo: 'Sua melhor versão (lâmina 3)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo sobre treino e evolução física, com identidade visual padronizada do perfil.',
    imagem: '/portfolio/luiz-guedes-carrossel-melhor-versao-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'luiz-guedes-carrossel-apresentacao-1',
    titulo: 'Apresentação do perfil (lâmina 1)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de apresentação do treinador online, com o storytelling e a identidade visual do perfil.',
    imagem: '/portfolio/luiz-guedes-carrossel-apresentacao-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'luiz-guedes-carrossel-apresentacao-2',
    titulo: 'Apresentação do perfil (lâmina 2)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de apresentação do treinador online, com o storytelling e a identidade visual do perfil.',
    imagem: '/portfolio/luiz-guedes-carrossel-apresentacao-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'luiz-guedes-carrossel-nao-depende-de-carga-1',
    titulo: 'Não depende de carga (lâmina 1)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo explicando que hipertrofia depende de estímulo, não só do peso levantado.',
    imagem: '/portfolio/luiz-guedes-carrossel-nao-depende-de-carga-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'luiz-guedes-carrossel-nao-depende-de-carga-2',
    titulo: 'Não depende de carga (lâmina 2)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo explicando que hipertrofia depende de estímulo, não só do peso levantado.',
    imagem: '/portfolio/luiz-guedes-carrossel-nao-depende-de-carga-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'luiz-guedes-carrossel-nao-depende-de-carga-3',
    titulo: 'Não depende de carga (lâmina 3)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo explicando que hipertrofia depende de estímulo, não só do peso levantado.',
    imagem: '/portfolio/luiz-guedes-carrossel-nao-depende-de-carga-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'luiz-guedes-carrossel-corpo-avisando-1',
    titulo: 'Seu corpo está avisando (lâmina 1)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo sobre sinais de alerta do corpo durante o treino, antes de virar lesão.',
    imagem: '/portfolio/luiz-guedes-carrossel-corpo-avisando-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'luiz-guedes-carrossel-corpo-avisando-2',
    titulo: 'Seu corpo está avisando (lâmina 2)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo sobre sinais de alerta do corpo durante o treino, antes de virar lesão.',
    imagem: '/portfolio/luiz-guedes-carrossel-corpo-avisando-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'luiz-guedes-carrossel-corpo-avisando-3',
    titulo: 'Seu corpo está avisando (lâmina 3)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo sobre sinais de alerta do corpo durante o treino, antes de virar lesão.',
    imagem: '/portfolio/luiz-guedes-carrossel-corpo-avisando-03.png',
    imagemWidth: 1092,
    imagemHeight: 1362,
  },
  {
    id: 'luiz-guedes-carrossel-treino-limitando-1',
    titulo: 'Seu treino pode estar limitando (lâmina 1)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo sobre erros comuns de treino que limitam a evolução do aluno.',
    imagem: '/portfolio/luiz-guedes-carrossel-treino-limitando-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'luiz-guedes-carrossel-treino-limitando-2',
    titulo: 'Seu treino pode estar limitando (lâmina 2)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo sobre erros comuns de treino que limitam a evolução do aluno.',
    imagem: '/portfolio/luiz-guedes-carrossel-treino-limitando-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'luiz-guedes-carrossel-treino-limitando-3',
    titulo: 'Seu treino pode estar limitando (lâmina 3)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo sobre erros comuns de treino que limitam a evolução do aluno.',
    imagem: '/portfolio/luiz-guedes-carrossel-treino-limitando-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'luiz-guedes-carrossel-nem-toda-dor-1',
    titulo: 'Nem toda dor é evolução (lâmina 1)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo diferenciando dor boa de dor ruim no treino, com linguagem direta ao aluno.',
    imagem: '/portfolio/luiz-guedes-carrossel-nem-toda-dor-01.png',
    imagemWidth: 1092,
    imagemHeight: 1362,
  },
  {
    id: 'luiz-guedes-carrossel-nem-toda-dor-2',
    titulo: 'Nem toda dor é evolução (lâmina 2)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo diferenciando dor boa de dor ruim no treino, com linguagem direta ao aluno.',
    imagem: '/portfolio/luiz-guedes-carrossel-nem-toda-dor-02.png',
    imagemWidth: 1092,
    imagemHeight: 1362,
  },
  {
    id: 'luiz-guedes-carrossel-nem-toda-dor-3',
    titulo: 'Nem toda dor é evolução (lâmina 3)',
    cliente: 'Luiz Guedes · Treinador Online',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo diferenciando dor boa de dor ruim no treino, com linguagem direta ao aluno.',
    imagem: '/portfolio/luiz-guedes-carrossel-nem-toda-dor-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-post-1',
    titulo: 'Post institucional',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Post estático do Sindicato dos Terapeutas do Mato Grosso, aplicando a identidade visual do perfil.',
    imagem: '/portfolio/sinter-post-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-post-2',
    titulo: 'Post institucional',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Post estático do Sindicato dos Terapeutas do Mato Grosso, aplicando a identidade visual do perfil.',
    imagem: '/portfolio/sinter-post-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-post-3',
    titulo: 'Post institucional',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Post estático do Sindicato dos Terapeutas do Mato Grosso, aplicando a identidade visual do perfil.',
    imagem: '/portfolio/sinter-post-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-post-4',
    titulo: 'Post institucional',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Post estático do Sindicato dos Terapeutas do Mato Grosso, aplicando a identidade visual do perfil.',
    imagem: '/portfolio/sinter-post-04.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-post-5',
    titulo: 'Post institucional',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Post estático do Sindicato dos Terapeutas do Mato Grosso, aplicando a identidade visual do perfil.',
    imagem: '/portfolio/sinter-post-05.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-post-6',
    titulo: 'Post institucional',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Post estático do Sindicato dos Terapeutas do Mato Grosso, aplicando a identidade visual do perfil.',
    imagem: '/portfolio/sinter-post-06.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-post-7',
    titulo: 'Post institucional',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Post estático do Sindicato dos Terapeutas do Mato Grosso, aplicando a identidade visual do perfil.',
    imagem: '/portfolio/sinter-post-07.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-post-8',
    titulo: 'Post institucional',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Post estático do Sindicato dos Terapeutas do Mato Grosso, aplicando a identidade visual do perfil.',
    imagem: '/portfolio/sinter-post-08.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-post-9',
    titulo: 'Post institucional',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Post estático do Sindicato dos Terapeutas do Mato Grosso, aplicando a identidade visual do perfil.',
    imagem: '/portfolio/sinter-post-09.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-momentos-nao-voltam-1',
    titulo: 'Momentos que não voltam (lâmina 1)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo do SINTER-MT sobre a importância da terapia em momentos únicos da vida.',
    imagem: '/portfolio/sinter-carrossel-momentos-nao-voltam-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-momentos-nao-voltam-2',
    titulo: 'Momentos que não voltam (lâmina 2)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo do SINTER-MT sobre a importância da terapia em momentos únicos da vida.',
    imagem: '/portfolio/sinter-carrossel-momentos-nao-voltam-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-momentos-nao-voltam-3',
    titulo: 'Momentos que não voltam (lâmina 3)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo do SINTER-MT sobre a importância da terapia em momentos únicos da vida.',
    imagem: '/portfolio/sinter-carrossel-momentos-nao-voltam-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-mercado-nao-te-enxerga-1',
    titulo: 'O mercado não te enxerga (lâmina 1)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional do SINTER-MT sobre a valorização profissional dos terapeutas associados.',
    imagem: '/portfolio/sinter-carrossel-mercado-nao-te-enxerga-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-mercado-nao-te-enxerga-2',
    titulo: 'O mercado não te enxerga (lâmina 2)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional do SINTER-MT sobre a valorização profissional dos terapeutas associados.',
    imagem: '/portfolio/sinter-carrossel-mercado-nao-te-enxerga-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-mercado-nao-te-enxerga-3',
    titulo: 'O mercado não te enxerga (lâmina 3)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional do SINTER-MT sobre a valorização profissional dos terapeutas associados.',
    imagem: '/portfolio/sinter-carrossel-mercado-nao-te-enxerga-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-mercado-nao-te-enxerga-4',
    titulo: 'O mercado não te enxerga (lâmina 4)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional do SINTER-MT sobre a valorização profissional dos terapeutas associados.',
    imagem: '/portfolio/sinter-carrossel-mercado-nao-te-enxerga-04.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-palestrantes-1-1',
    titulo: 'Palestrantes do evento (lâmina 1)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de divulgação de palestrante confirmado em evento do SINTER-MT.',
    imagem: '/portfolio/sinter-carrossel-palestrantes-1-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-palestrantes-1-2',
    titulo: 'Palestrantes do evento (lâmina 2)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de divulgação de palestrante confirmado em evento do SINTER-MT.',
    imagem: '/portfolio/sinter-carrossel-palestrantes-1-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-palestrantes-1-3',
    titulo: 'Palestrantes do evento (lâmina 3)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de divulgação de palestrante confirmado em evento do SINTER-MT.',
    imagem: '/portfolio/sinter-carrossel-palestrantes-1-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-palestrantes-2-1',
    titulo: 'Palestrantes do evento (lâmina 1)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de divulgação de palestrante confirmado em evento do SINTER-MT.',
    imagem: '/portfolio/sinter-carrossel-palestrantes-2-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-palestrantes-2-2',
    titulo: 'Palestrantes do evento (lâmina 2)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de divulgação de palestrante confirmado em evento do SINTER-MT.',
    imagem: '/portfolio/sinter-carrossel-palestrantes-2-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-palestrantes-2-3',
    titulo: 'Palestrantes do evento (lâmina 3)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de divulgação de palestrante confirmado em evento do SINTER-MT.',
    imagem: '/portfolio/sinter-carrossel-palestrantes-2-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-palestrantes-3-1',
    titulo: 'Palestrantes do evento (lâmina 1)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de divulgação de palestrante confirmado em evento do SINTER-MT.',
    imagem: '/portfolio/sinter-carrossel-palestrantes-3-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-palestrantes-3-2',
    titulo: 'Palestrantes do evento (lâmina 2)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de divulgação de palestrante confirmado em evento do SINTER-MT.',
    imagem: '/portfolio/sinter-carrossel-palestrantes-3-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-palestrantes-3-3',
    titulo: 'Palestrantes do evento (lâmina 3)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de divulgação de palestrante confirmado em evento do SINTER-MT.',
    imagem: '/portfolio/sinter-carrossel-palestrantes-3-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-palestrantes-4-1',
    titulo: 'Palestrantes do evento (lâmina 1)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de divulgação de palestrante confirmado em evento do SINTER-MT.',
    imagem: '/portfolio/sinter-carrossel-palestrantes-4-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-palestrantes-4-2',
    titulo: 'Palestrantes do evento (lâmina 2)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de divulgação de palestrante confirmado em evento do SINTER-MT.',
    imagem: '/portfolio/sinter-carrossel-palestrantes-4-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-palestrantes-4-3',
    titulo: 'Palestrantes do evento (lâmina 3)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel de divulgação de palestrante confirmado em evento do SINTER-MT.',
    imagem: '/portfolio/sinter-carrossel-palestrantes-4-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-como-cobrar-1',
    titulo: 'Como cobrar pelo seu trabalho (lâmina 1)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo do SINTER-MT sobre precificação do trabalho terapêutico.',
    imagem: '/portfolio/sinter-carrossel-como-cobrar-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-como-cobrar-2',
    titulo: 'Como cobrar pelo seu trabalho (lâmina 2)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo do SINTER-MT sobre precificação do trabalho terapêutico.',
    imagem: '/portfolio/sinter-carrossel-como-cobrar-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-como-cobrar-3',
    titulo: 'Como cobrar pelo seu trabalho (lâmina 3)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo do SINTER-MT sobre precificação do trabalho terapêutico.',
    imagem: '/portfolio/sinter-carrossel-como-cobrar-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-como-cobrar-4',
    titulo: 'Como cobrar pelo seu trabalho (lâmina 4)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo do SINTER-MT sobre precificação do trabalho terapêutico.',
    imagem: '/portfolio/sinter-carrossel-como-cobrar-04.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-5-coisas-que-mudam-1',
    titulo: '5 coisas que mudam na sua carreira (lâmina 1)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo do SINTER-MT sobre os benefícios da filiação ao sindicato para a carreira do terapeuta.',
    imagem: '/portfolio/sinter-carrossel-5-coisas-que-mudam-01.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-5-coisas-que-mudam-2',
    titulo: '5 coisas que mudam na sua carreira (lâmina 2)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel educativo do SINTER-MT sobre os benefícios da filiação ao sindicato para a carreira do terapeuta.',
    imagem: '/portfolio/sinter-carrossel-5-coisas-que-mudam-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-voce-cuida-de-dezenas-1',
    titulo: 'Você cuida de dezenas, quem cuida de você (lâmina 1)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional do SINTER-MT sobre o suporte que o sindicato oferece ao terapeuta.',
    imagem: '/portfolio/sinter-carrossel-voce-cuida-de-dezenas-01.png',
    imagemWidth: 1092,
    imagemHeight: 1362,
  },
  {
    id: 'sinter-carrossel-voce-cuida-de-dezenas-2',
    titulo: 'Você cuida de dezenas, quem cuida de você (lâmina 2)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional do SINTER-MT sobre o suporte que o sindicato oferece ao terapeuta.',
    imagem: '/portfolio/sinter-carrossel-voce-cuida-de-dezenas-02.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-voce-cuida-de-dezenas-3',
    titulo: 'Você cuida de dezenas, quem cuida de você (lâmina 3)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional do SINTER-MT sobre o suporte que o sindicato oferece ao terapeuta.',
    imagem: '/portfolio/sinter-carrossel-voce-cuida-de-dezenas-03.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'sinter-carrossel-voce-cuida-de-dezenas-4',
    titulo: 'Você cuida de dezenas, quem cuida de você (lâmina 4)',
    cliente: 'SINTER-MT',
    categoria: 'Direção de Arte',
    descricao:
      'Carrossel institucional do SINTER-MT sobre o suporte que o sindicato oferece ao terapeuta.',
    imagem: '/portfolio/sinter-carrossel-voce-cuida-de-dezenas-04.png',
    imagemWidth: 1080,
    imagemHeight: 1350,
  },
  {
    id: 'diogo-esteves-thumbnail-01',
    titulo: 'Capa de vídeo 01',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-01.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'diogo-esteves-thumbnail-02',
    titulo: 'Capa de vídeo 02',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-02.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'diogo-esteves-thumbnail-03',
    titulo: 'Capa de vídeo 03',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-03.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'diogo-esteves-thumbnail-04',
    titulo: 'Capa de vídeo 04',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-04.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'diogo-esteves-thumbnail-05',
    titulo: 'Capa de vídeo 05',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-05.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'diogo-esteves-thumbnail-06',
    titulo: 'Capa de vídeo 06',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-06.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'diogo-esteves-thumbnail-07',
    titulo: 'Capa de vídeo 07',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-07.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'diogo-esteves-thumbnail-08',
    titulo: 'Capa de vídeo 08',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-08.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'diogo-esteves-thumbnail-09',
    titulo: 'Capa de vídeo 09',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-09.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'diogo-esteves-thumbnail-10',
    titulo: 'Capa de vídeo 10',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-10.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'diogo-esteves-thumbnail-11',
    titulo: 'Capa de vídeo 11',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-11.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'diogo-esteves-thumbnail-12',
    titulo: 'Capa de vídeo 12',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-12.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'diogo-esteves-thumbnail-13',
    titulo: 'Capa de vídeo 13',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-13.png',
    imagemWidth: 1280,
    imagemHeight: 714,
  },
  {
    id: 'diogo-esteves-thumbnail-14',
    titulo: 'Capa de vídeo 14',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-14.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'diogo-esteves-thumbnail-15',
    titulo: 'Capa de vídeo 15',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-15.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'diogo-esteves-thumbnail-16',
    titulo: 'Capa de vídeo 16',
    cliente: 'Diogo Esteves91 · YouTube',
    categoria: 'Thumbnails',
    descricao:
      'Thumbnail produzida como parte da edição completa dos vídeos do canal, sem Shorts, só vídeos longos.',
    imagem: '/portfolio/diogo-esteves-thumbnail-16.png',
    imagemWidth: 1280,
    imagemHeight: 720,
  },
  {
    id: 'video-portfolio-01',
    titulo: 'Vídeo editado',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Edição de vídeo entregue pela Evozzn, publicada como não listada por preferência do cliente.',
    youtubeId: 'nGJD9cRbc5c',
  },
  {
    id: 'video-portfolio-02',
    titulo: 'Vídeo editado',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Edição de vídeo entregue pela Evozzn, publicada como não listada por preferência do cliente.',
    youtubeId: 'z3gZ9zVm974',
  },
  {
    id: 'video-portfolio-03',
    titulo: 'Vídeo editado',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Edição de vídeo entregue pela Evozzn, publicada como não listada por preferência do cliente.',
    youtubeId: '1crVTNu0hgI',
  },
  {
    id: 'video-portfolio-04',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: 'DXBvRR-Fn90',
    vertical: true,
  },
  {
    id: 'video-portfolio-05',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: 'XFh5M_dgOhs',
    vertical: true,
  },
  {
    id: 'video-portfolio-06',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: 'C0fAfBrN1nE',
    vertical: true,
  },
  {
    id: 'video-portfolio-07',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: 'VAMXX4sHhTs',
    vertical: true,
  },
  {
    id: 'video-portfolio-08',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: 'Ei9Eg4hYfTA',
    vertical: true,
  },
  {
    id: 'video-portfolio-09',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: '-ZL64Yt1CKQ',
    vertical: true,
  },
  {
    id: 'video-portfolio-10',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: 'F5A50rIB2iA',
    vertical: true,
  },
  {
    id: 'video-portfolio-11',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: '_Uxiw3vDFks',
    vertical: true,
  },
  {
    id: 'video-portfolio-12',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: 'X2f1_4rhMMM',
    vertical: true,
  },
  {
    id: 'video-portfolio-13',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: 'lrgAeP4YR50',
    vertical: true,
  },
  {
    id: 'video-portfolio-14',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: '1u3NNkvCfz0',
    vertical: true,
  },
  {
    id: 'video-portfolio-15',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: 'GqPudyo_kjA',
    vertical: true,
  },
  {
    id: 'video-portfolio-16',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: 'QbrajroBusU',
    vertical: true,
  },
  {
    id: 'video-portfolio-17',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: 'LUfqKy3FNb0',
    vertical: true,
  },
  {
    id: 'video-portfolio-18',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: 'wdhLqVutLZY',
    vertical: true,
  },
  {
    id: 'video-portfolio-19',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: 'rr6rhtieHgc',
    vertical: true,
  },
  {
    id: 'video-portfolio-20',
    titulo: 'Corte vertical',
    cliente: 'Clientes Evozzn',
    categoria: 'Vídeo',
    descricao:
      'Corte em formato vertical entregue pela Evozzn, publicado como não listado por preferência do cliente.',
    youtubeId: 'o89rSkmNHCQ',
    vertical: true,
  },
]
