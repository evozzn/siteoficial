import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CtaButton from '@/components/CtaButton'
import { casesDetalhados, getCaseDetalheBySlug } from '@/lib/cases'

export function generateStaticParams() {
  return Object.keys(casesDetalhados).map((slug) => ({ slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const caseDetalhe = getCaseDetalheBySlug(params.slug)
  if (!caseDetalhe) return {}
  return {
    title: caseDetalhe.cliente,
    description: caseDetalhe.subtitulo,
    openGraph: {
      title: `${caseDetalhe.cliente} - Case Evozzn`,
      description: caseDetalhe.subtitulo,
      url: `/cases/${caseDetalhe.slug}`,
    },
    alternates: {
      canonical: `/cases/${caseDetalhe.slug}`,
    },
  }
}

export default function CaseDetalhePage({
  params,
}: {
  params: { slug: string }
}) {
  const caseDetalhe = getCaseDetalheBySlug(params.slug)
  if (!caseDetalhe) notFound()

  const caseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseDetalhe.titulo,
    about: caseDetalhe.cliente,
    description: caseDetalhe.subtitulo,
    author: {
      '@type': 'Organization',
      name: 'Evozzn',
      url: 'https://www.evozzn.com',
    },
    url: `https://www.evozzn.com/cases/${caseDetalhe.slug}`,
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseJsonLd) }}
      />

      <Link
        href="/cases"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-10 text-sm"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Todos os cases
      </Link>

      {/* Hero */}
      <section className="mb-16 animate-fade-in-up">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-5 uppercase tracking-wide">
          {caseDetalhe.tag}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 max-w-3xl">
          {caseDetalhe.titulo}
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-8">
          {caseDetalhe.subtitulo}
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-400 mb-8">
          <div>
            <span className="text-gray-500">Cliente: </span>
            <span className="text-gray-200">{caseDetalhe.segmento}</span>
          </div>
          <div>
            <span className="text-gray-500">Serviço: </span>
            <span className="text-gray-200">{caseDetalhe.servico}</span>
          </div>
          <div>
            <span className="text-gray-500">Início da gestão: </span>
            <span className="text-gray-200">{caseDetalhe.inicioGestao}</span>
          </div>
        </div>
        <CtaButton>{caseDetalhe.ctaLabel}</CtaButton>
      </section>

      {/* Antes e Depois */}
      <section className="border-t border-gray-800 pt-16 mb-16 animate-fade-in-up">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Antes e <span className="text-primary">depois</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col h-full">
            <p className="invisible text-xs mb-3 text-center">Métricas</p>
            <div className="flex-1 grid grid-cols-2 gap-4 auto-rows-fr">
              {caseDetalhe.antesDepois.map((metrica) => (
                <div
                  key={metrica.label}
                  className="bg-gray-900/50 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 p-5 flex flex-col items-center justify-center text-center"
                >
                  <span className="text-xs text-gray-500 uppercase tracking-wide mb-3">
                    {metrica.label}
                  </span>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-500 text-sm">{metrica.antes}</span>
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    <span className="text-white font-bold">{metrica.depois}</span>
                  </div>
                  <span className="text-primary text-lg font-black">{metrica.crescimento}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wide mb-3 text-center">Antes</p>
              <img
                src={caseDetalhe.fotoAntes}
                alt={`Perfil do ${caseDetalhe.cliente} antes da gestão da Evozzn`}
                className="w-full rounded-xl border border-gray-800 animate-fade-in"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-primary text-xs uppercase tracking-wide mb-3 text-center font-semibold">Depois</p>
              <img
                src={caseDetalhe.fotoDepois}
                alt={`Perfil do ${caseDetalhe.cliente} depois da gestão da Evozzn`}
                className="w-full rounded-xl border border-primary/40 animate-fade-in"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destaques do período */}
      <section className="border-t border-gray-800 pt-16 mb-16 animate-fade-in-up">
        <h2 className="text-2xl font-bold text-white mb-6">
          Destaques do <span className="text-primary">período</span>
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {caseDetalhe.destaquesMes.map((destaque) => (
            <li key={destaque} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-300 text-sm">{destaque}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* O que foi feito */}
      <section className="border-t border-gray-800 pt-16 mb-16 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-10 text-center">
          O que foi <span className="text-primary">feito</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {caseDetalhe.oQueFoiFeito.map((item, index) => (
            <div key={item} className="bg-gray-900/50 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 p-5 flex items-start gap-3">
              <span className="text-xs text-gray-600 font-bold shrink-0 mt-0.5">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-xs text-center mt-8">{caseDetalhe.fonteNota}</p>
      </section>

      {/* Posts publicados durante a gestão */}
      <section className="border-t border-gray-800 pt-16 mb-16 animate-fade-in-up">
        <p className="text-gray-400 text-sm text-center mb-6">
          Posts publicados ao longo da gestão
        </p>
        <div className="columns-3 gap-1 sm:gap-2 max-w-3xl mx-auto">
          {caseDetalhe.galeria.map((foto) => (
            <img
              key={foto.file}
              src={foto.file}
              alt={`Post de ${foto.dia}/${foto.mes} do ${caseDetalhe.cliente}`}
              className="w-full mb-1 sm:mb-2 rounded-md border border-gray-800 hover:border-primary/50 transition-all duration-300 break-inside-avoid animate-fade-in"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="flex flex-col items-center justify-center gap-5 text-center animate-fade-in-up">
        <p className="text-gray-400">Quer resultados assim no seu perfil?</p>
        <CtaButton>{caseDetalhe.ctaLabel}</CtaButton>
      </div>
    </div>
  )
}
