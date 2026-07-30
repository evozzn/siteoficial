import type { Metadata } from 'next'
import Link from 'next/link'
import { servicosHome } from '@/lib/servicos'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Social media, produção e edição de vídeo, UX/UI e web design. Processo de agência, sem tráfego pago.',
  openGraph: {
    title: 'Nossos Serviços - Evozzn',
    description:
      'Social media, produção e edição de vídeo, UX/UI e web design. Processo de agência.',
    url: '/servicos',
  },
}

export default function ServicosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Nossos serviços
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Soluções completas <br />
            <span className="text-primary">pro seu crescimento</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Da estratégia à execução, com processo de agência, atendimento
            próximo e sem tráfego pago.
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicosHome.map((servico, index) => (
            <Link
              key={servico.titulo}
              href={`/servicos/${servico.destino}`}
              className="group bg-gray-900/50 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(2,123,254,0.3),0_0_40px_rgba(2,123,254,0.1)] p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
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
                <span className="text-3xl font-bold text-gray-800">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-primary">
                {servico.titulo}
              </h3>
              <p className="text-gray-400 mb-6">{servico.descricao}</p>

              <div className="mt-auto pt-4 border-t border-gray-800 flex items-center justify-between gap-3">
                <p className="text-xs text-gray-500">{servico.destaque}</p>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(2,123,254,0.5)]">
                  <svg
                    className="h-4 w-4 text-white"
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
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* FAQ */}
        <div className="mb-16">
          <FAQ />
        </div>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Não sabe por onde <span className="text-primary">começar</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Fale com nossos especialistas e montaremos um plano personalizado
            para você.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 glow-primary uppercase text-sm tracking-wide"
          >
            Falar com especialista
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
        </section>
      </div>
  )
}
