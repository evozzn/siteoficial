import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Transformamos ideias em{' '}
          <span className="text-primary">resultados estratégicos</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          Somos uma agência de marketing premium especializada em criar
          soluções que geram impacto real para o seu negócio.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/contato"
            className="bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Fale conosco
          </Link>
          <Link
            href="/cases"
            className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Ver cases
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Estratégia Digital
            </h3>
            <p className="text-gray-400">
              Desenvolvimento de estratégias personalizadas para maximizar sua
              presença digital e alcançar seus objetivos de negócio.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Performance Marketing
            </h3>
            <p className="text-gray-400">
              Campanhas otimizadas com foco em resultados mensuráveis e ROI
              positivo para seu investimento.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Branding & Design
            </h3>
            <p className="text-gray-400">
              Criação de identidades visuais que comunicam valor e constroem
              conexões duradouras com seu público.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/servicos"
            className="text-primary hover:text-secondary transition-colors"
          >
            Ver todos os serviços →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-lg text-center border border-primary/20">
        <h2 className="text-3xl font-bold text-white mb-4">
          Pronto para transformar seu negócio?
        </h2>
        <p className="text-gray-400 mb-6">
          Entre em contato e descubra como podemos ajudar você a alcançar seus
          objetivos.
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

