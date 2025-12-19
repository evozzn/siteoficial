import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bem-vindo',
  description:
    'Bem-vindo à Evozzn, agência de marketing premium. Transformamos ideias em resultados estratégicos.',
  openGraph: {
    title: 'Bem-vindo à Evozzn',
    description:
      'Bem-vindo à Evozzn, agência de marketing premium. Transformamos ideias em resultados estratégicos.',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background com gradiente animado */}
      <div className="absolute inset-0 gradient-radial animate-pulse-glow" />
      
      {/* Efeitos de partículas/glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Conteúdo principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="text-center max-w-5xl mx-auto animate-fade-in-up">
          {/* Headline principal */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ lineHeight: '1.1', wordSpacing: 'normal' }}>
            <span style={{ display: 'block' }}>Crescimento previsível orientado</span>
            <span style={{ display: 'block' }}>
              por <span className="text-primary glow-text">performance e dados</span>.
            </span>
          </h2>

          {/* Texto descritivo */}
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto mb-4 leading-relaxed">
            Consultoria de marketing de performance orientada por dados e{' '}
            <span className="text-primary font-semibold">Inteligência Artificial</span>.
          </p>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto mb-12 leading-relaxed">
            <span className="text-primary font-semibold">Arquitetamos crescimento</span>
            <br />
            a partir de decisões precisas
            <br />
            em aquisição e retenção. Com atuação consistente em diferentes níveis
            <br />
            de maturidade operacional.
          </p>

          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/home"
              className="group relative bg-primary hover:bg-secondary text-white font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 glow-primary min-w-[280px] text-center text-lg"
            >
              <span className="relative z-10">Quero Escalar Agora</span>
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">
                →
              </span>
            </Link>
            <Link
              href="/contato"
              className="group border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 min-w-[280px] text-center text-lg"
            >
              Agendar Consultoria
            </Link>
          </div>

          {/* Indicador de scroll (opcional) */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
