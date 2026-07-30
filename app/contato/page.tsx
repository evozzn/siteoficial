import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Solicitar Orçamento',
  description:
    'Solicite um orçamento com a Evozzn. Social media, produção de vídeo e web design, com processo de agência e atendimento próximo.',
  openGraph: {
    title: 'Solicitar Orçamento - Evozzn',
    description:
      'Solicite um orçamento com a Evozzn. Social media, produção de vídeo e web design, com processo de agência.',
    url: '/contato',
  },
}

export default function ContatoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero + Formulário */}
      <section id="formulario" className="grid lg:grid-cols-2 gap-8 items-stretch mb-16">
        {/* Coluna esquerda */}
        <div className="flex flex-col justify-center py-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Vamos conversar
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
            Vamos criar a{' '}
            <span className="text-primary">presença digital</span> que você
            merece?
          </h1>

          <p className="text-lg text-gray-400 mb-8">
            Perfil parado, conteúdo sem direção ou sem tempo para cuidar de
            suas redes? A gente estrutura sua presença digital e dá o cuidado
            que seu negócio merece.
          </p>

          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5571987497742'}?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20com%20a%20Evozzn`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 w-fit bg-primary hover:bg-secondary text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 glow-primary uppercase text-sm tracking-wide mb-10"
          >
            Chamar no Whatsapp
          </a>

          <div className="flex items-center gap-4 bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C7.582 2 4 5.582 4 10c0 5.25 6.44 11.19 7.09 11.78a1.34 1.34 0 001.82 0C13.56 21.19 20 15.25 20 10c0-4.418-3.582-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z"
                />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold">
                Atendemos clientes em <span className="text-primary">todo o Brasil</span>
              </p>
              <p className="text-gray-500 text-sm">
                Sede em Salvador • Projetos em todas as regiões
              </p>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-2">
            Solicitar orçamento
          </h2>
          <p className="text-gray-400 mb-6">
            Preencha o formulário e conte pra gente sobre o seu negócio.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
