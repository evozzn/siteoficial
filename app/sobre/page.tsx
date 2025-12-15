import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Conheça a Evozzn, agência de marketing premium que acredita no poder da estratégia aliada à execução impecável. Nossa missão, valores e abordagem.',
  openGraph: {
    title: 'Sobre a Evozzn - Agência de Marketing Premium',
    description:
      'Conheça a Evozzn, agência de marketing premium que acredita no poder da estratégia aliada à execução impecável.',
    url: '/sobre',
  },
}

export default function SobrePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Sobre a <span className="text-primary">Evozzn</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Somos uma agência de marketing premium que acredita no poder da
          estratégia aliada à execução impecável.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Nossa Missão</h2>
            <p className="text-gray-400 mb-4">
              Transformar desafios de negócio em oportunidades de crescimento
              através de estratégias de marketing inteligentes e resultados
              mensuráveis.
            </p>
            <p className="text-gray-400">
              Acreditamos que cada marca tem um potencial único, e nosso papel é
              desbloquear esse potencial através de soluções personalizadas que
              geram valor real.
            </p>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Nossos Valores
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Excelência em cada projeto</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Transparência e comunicação clara</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Foco em resultados estratégicos</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Inovação constante</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Nossa Abordagem
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Análise Estratégica
            </h3>
            <p className="text-gray-400">
              Compreendemos profundamente seu negócio, mercado e objetivos para
              criar estratégias alinhadas.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Execução Impecável
            </h3>
            <p className="text-gray-400">
              Transformamos estratégias em ações concretas com atenção aos
              detalhes e foco em qualidade.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Otimização Contínua
            </h3>
            <p className="text-gray-400">
              Monitoramos resultados e ajustamos estratégias para maximizar
              performance e ROI.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

