import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { servicos, getServicoBySlug } from '@/lib/servicos'

const metodo = [
  {
    titulo: 'Diagnóstico',
    descricao:
      'Entendemos o negócio, o público e o cenário competitivo antes de propor qualquer coisa.',
    icone:
      'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
  },
  {
    titulo: 'Estratégia',
    descricao:
      'Montamos um plano com objetivos claros, linha editorial e cronograma de entregas.',
    icone:
      'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
  },
  {
    titulo: 'Execução',
    descricao:
      'Colocamos o plano em prática com agilidade e comunicação transparente a cada entrega.',
    icone:
      'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
  },
  {
    titulo: 'Acompanhamento',
    descricao:
      'Analisamos os resultados e ajustamos o processo pra manter a consistência mês a mês.',
    icone:
      'M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941',
  },
]

export function generateStaticParams() {
  return servicos.map((servico) => ({ slug: servico.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const servico = getServicoBySlug(params.slug)
  if (!servico) return {}
  return {
    title: servico.titulo,
    description: servico.resumo,
    openGraph: {
      title: `${servico.titulo} - Evozzn`,
      description: servico.resumo,
      url: `/servicos/${servico.slug}`,
    },
    alternates: {
      canonical: `/servicos/${servico.slug}`,
    },
  }
}

export default function ServicoPage({
  params,
}: {
  params: { slug: string }
}) {
  const servico = getServicoBySlug(params.slug)
  if (!servico) notFound()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        href="/servicos"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-10 text-sm"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Todos os serviços
      </Link>

      <div className="grid lg:grid-cols-3 gap-12 items-start mb-24">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={servico.icone}
                />
              </svg>
            </div>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              {servico.categoria}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            {servico.titulo}
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            {servico.resumo}
          </p>

          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 glow-primary uppercase text-sm tracking-wide"
          >
            Solicitar proposta
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>

        <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-8">
          <h2 className="text-lg font-bold text-white mb-5">Benefícios</h2>
          <ul className="space-y-4">
            {servico.beneficios.map((beneficio) => (
              <li key={beneficio} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-primary shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-300 text-sm">{beneficio}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Como <span className="text-primary">funciona</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            O mesmo processo de agência em todos os nossos serviços: entender
            antes de executar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metodo.map((etapa, index) => (
            <div
              key={etapa.titulo}
              className="bg-gray-900/50 rounded-xl border border-gray-800 p-6"
            >
              <span className="text-3xl font-bold text-gray-800 mb-3 block">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={etapa.icone}
                  />
                </svg>
              </div>
              <div className="text-base font-bold text-white mb-1">
                {etapa.titulo}
              </div>
              <div className="text-sm text-gray-400">{etapa.descricao}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-center gap-5 text-center">
        <p className="text-gray-400">Quer conversar sobre esse serviço?</p>
        <Link
          href="/contato"
          className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 glow-primary uppercase text-sm tracking-wide"
        >
          Fala com a gente
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
