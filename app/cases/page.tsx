export default function CasesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Nossos <span className="text-primary">Cases</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Conheça alguns dos projetos que desenvolvemos e os resultados que
          alcançamos para nossos clientes.
        </p>
      </section>

      {/* Placeholder */}
      <section className="text-center py-20">
        <div className="bg-gray-900/50 p-12 rounded-lg border border-gray-800 max-w-2xl mx-auto">
          <p className="text-gray-400 text-lg mb-4">
            Nossos cases de sucesso serão exibidos aqui em breve.
          </p>
          <p className="text-gray-500">
            Esta seção será implementada na Fase 4 com dados estáticos de
            portfólio.
          </p>
        </div>
      </section>
    </div>
  )
}

