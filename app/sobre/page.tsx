import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'A Evozzn é uma agência de conteúdo e posicionamento digital. Social media, produção de vídeo e web design, com processo de agência e atendimento próximo.',
  openGraph: {
    title: 'Sobre a Evozzn',
    description:
      'A Evozzn é uma agência de conteúdo e posicionamento digital, com processo de agência e atendimento próximo.',
    url: '/sobre',
  },
}

export default function SobrePage() {
  const valores = [
    {
      titulo: 'Estratégia antes da execução',
      descricao:
        'Nenhum conteúdo começa pela estética. Começa por objetivo, público e mensagem.',
    },
    {
      titulo: 'Clareza',
      descricao: 'A comunicação precisa ser compreendida rapidamente.',
    },
    {
      titulo: 'Excelência visual',
      descricao:
        'Acabamento, hierarquia, tipografia e consistência fazem parte do resultado.',
    },
    {
      titulo: 'Coerência',
      descricao:
        'Cada peça parece parte da mesma marca, mesmo quando o formato muda.',
    },
    {
      titulo: 'Proximidade',
      descricao:
        'Atendimento e colaboração personalizados, não linha de montagem.',
    },
    {
      titulo: 'Evolução',
      descricao: 'Processos e padrões documentados e melhorados continuamente.',
    },
    {
      titulo: 'Responsabilidade',
      descricao:
        'Não prometemos resultado garantido, não inventamos dados, não mascaramos limitações.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Sobre a <span className="text-primary">Evozzn</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Boas ideias não deveriam parecer pequenas por falta de direção.
        </p>
      </section>

      {/* O que somos */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">O que fazemos</h2>
            <p className="text-gray-400 mb-4">
              A Evozzn é uma agência de conteúdo e posicionamento digital.
              Trabalhamos em três frentes: social media, produção e edição de
              vídeo, e UX/UI e web design.
            </p>
            <p className="text-gray-400">
              Nosso trabalho é pegar uma marca com comunicação amadora ou
              desorganizada e transformar em presença digital profissional,
              coerente e reconhecível.
            </p>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Onde ficamos
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <span className="text-white font-medium">Freelancer:</span>{' '}
                mais barato, mas sem processo e sem consistência.
              </li>
              <li>
                <span className="text-white font-medium">
                  Agência full-service grande:
                </span>{' '}
                mais cara, com menos atenção ao cliente.
              </li>
              <li>
                <span className="text-white font-medium">Evozzn:</span> meio-termo
                estratégico. Processo de agência com proximidade de parceiro.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Como trabalhamos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valores.map((valor, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 p-6 rounded-lg border border-gray-800${index === valores.length - 1 ? ' md:col-span-2 lg:col-span-3' : ''}`}
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                {valor.titulo}
              </h3>
              <p className="text-gray-400 text-sm">{valor.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-lg text-center border border-primary/20">
        <h2 className="text-3xl font-bold text-white mb-4">
          Faz sentido pro seu momento?
        </h2>
        <p className="text-gray-400 mb-6">
          Fala com a gente e a gente te diz, com honestidade, se e como
          podemos trabalhar juntos.
        </p>
        <Link
          href="/contato"
          className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Fala com a gente
        </Link>
      </section>
    </div>
  )
}
