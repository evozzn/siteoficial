import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Soluções completas de marketing: Estratégia Digital, Performance Marketing, Branding & Design, SEO & Conteúdo, Social Media e Consultoria.',
  openGraph: {
    title: 'Nossos Serviços - Evozzn',
    description:
      'Soluções completas de marketing para impulsionar seu negócio e alcançar resultados estratégicos.',
    url: '/servicos',
  },
}

export default function ServicosPage() {
  const servicos = [
    {
      titulo: 'Estratégia Digital',
      descricao:
        'Desenvolvimento de estratégias personalizadas que alinham seus objetivos de negócio com ações de marketing eficazes.',
      detalhes: [
        'Análise de mercado e concorrência',
        'Definição de personas e jornada do cliente',
        'Planejamento estratégico de longo prazo',
        'Roadmap de implementação',
      ],
    },
    {
      titulo: 'Performance Marketing',
      descricao:
        'Campanhas otimizadas com foco em resultados mensuráveis, maximizando ROI e eficiência do investimento.',
      detalhes: [
        'Google Ads e Meta Ads',
        'Otimização de conversão (CRO)',
        'Remarketing e retargeting',
        'Análise e relatórios de performance',
      ],
    },
    {
      titulo: 'Branding & Design',
      descricao:
        'Criação de identidades visuais que comunicam valor e constroem conexões duradouras com seu público.',
      detalhes: [
        'Criação de identidade visual',
        'Design de materiais gráficos',
        'Desenvolvimento de marca',
        'Direção de arte',
      ],
    },
    {
      titulo: 'Conteúdo & SEO',
      descricao:
        'Produção de conteúdo estratégico e otimização para mecanismos de busca, aumentando visibilidade e autoridade.',
      detalhes: [
        'Produção de conteúdo',
        'SEO técnico e on-page',
        'Link building estratégico',
        'Content marketing',
      ],
    },
    {
      titulo: 'Social Media',
      descricao:
        'Gestão estratégica de redes sociais com foco em engajamento, crescimento e conversão.',
      detalhes: [
        'Gestão de redes sociais',
        'Criação de conteúdo para social',
        'Community management',
        'Influencer marketing',
      ],
    },
    {
      titulo: 'Consultoria',
      descricao:
        'Orientação estratégica para equipes internas e tomadas de decisão baseadas em dados e melhores práticas.',
      detalhes: [
        'Consultoria em marketing digital',
        'Treinamento de equipes',
        'Auditoria de processos',
        'Planejamento estratégico',
      ],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Nossos <span className="text-primary">Serviços</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Soluções completas de marketing para impulsionar seu negócio e
          alcançar resultados estratégicos.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {servicos.map((servico, index) => (
          <div
            key={index}
            className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors duration-200"
          >
            <h3 className="text-xl font-semibold text-primary mb-3">
              {servico.titulo}
            </h3>
            <p className="text-gray-400 mb-4">{servico.descricao}</p>
            <ul className="space-y-2">
              {servico.detalhes.map((detalhe, idx) => (
                <li key={idx} className="text-sm text-gray-500 flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{detalhe}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-lg text-center border border-primary/20">
        <h2 className="text-3xl font-bold text-white mb-4">
          Pronto para começar?
        </h2>
        <p className="text-gray-400 mb-6">
          Entre em contato e descubra como nossos serviços podem transformar
          seu negócio.
        </p>
        <Link
          href="/contato"
          className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Solicitar proposta
        </Link>
      </section>
    </div>
  )
}

