export default function ContatoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Entre em <span className="text-primary">Contato</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Estamos prontos para ajudar você a transformar seu negócio. Entre em
          contato e vamos conversar sobre seu projeto.
        </p>
      </section>

      {/* Contact Info */}
      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Informações de Contato
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-primary font-semibold mb-2">Email</h3>
              <p className="text-gray-400">contato@evozzn.com</p>
            </div>
            <div>
              <h3 className="text-primary font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-400">(00) 00000-0000</p>
            </div>
            <div>
              <h3 className="text-primary font-semibold mb-2">Horário</h3>
              <p className="text-gray-400">
                Segunda a Sexta: 9h às 18h
                <br />
                Sábado: 9h às 13h
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-6">
            Formulário de Contato
          </h2>
          <p className="text-gray-400 mb-6">
            O formulário de contato será implementado na Fase 5 com validação
            client-side.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Nome</label>
              <input
                type="text"
                disabled
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-400 cursor-not-allowed"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                disabled
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-400 cursor-not-allowed"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Mensagem</label>
              <textarea
                disabled
                rows={4}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-400 cursor-not-allowed"
                placeholder="Sua mensagem"
              />
            </div>
            <button
              disabled
              className="w-full bg-gray-700 text-gray-500 font-semibold px-8 py-4 rounded-lg cursor-not-allowed"
            >
              Enviar mensagem
            </button>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-lg text-center border border-primary/20">
        <h2 className="text-3xl font-bold text-white mb-4">
          Prefere conversar pelo WhatsApp?
        </h2>
        <p className="text-gray-400 mb-6">
          Clique no botão abaixo e fale diretamente conosco.
        </p>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Abrir WhatsApp
        </a>
      </section>
    </div>
  )
}

