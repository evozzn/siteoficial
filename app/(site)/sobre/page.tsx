import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CtaButton from '@/components/CtaButton'
import { servicosHome } from '@/lib/servicos'

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
  alternates: {
    canonical: '/sobre',
  },
}

export default function SobrePage() {
  const processo = [
    {
      titulo: 'Diagnóstico',
      descricao:
        'Entendemos o negócio, o público e o cenário competitivo antes de propor qualquer coisa.',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      ),
    },
    {
      titulo: 'Estratégia',
      descricao:
        'Montamos um plano com objetivos claros, linha editorial e cronograma de entregas.',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      ),
    },
    {
      titulo: 'Execução',
      descricao:
        'Colocamos o plano em prática com agilidade e comunicação transparente a cada entrega.',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      ),
    },
    {
      titulo: 'Acompanhamento',
      descricao:
        'Analisamos os resultados e ajustamos o processo pra manter a consistência mês a mês.',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941"
        />
      ),
    },
  ]

  const numeros = [
    {
      valor: '2',
      label: 'Países atendidos',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      valor: '+1M',
      label: 'Pessoas alcançadas',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M5.11 13.404a9.5 9.5 0 0113.779 0M2.109 10.404a13.5 13.5 0 0119.782 0M12 20h.01"
        />
      ),
    },
    {
      valor: '+100',
      label: 'Projetos entregues',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7h-3V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2H4a1 1 0 00-1 1v3a2 2 0 002 2h14a2 2 0 002-2V8a1 1 0 00-1-1zM9 5h6v2H9V5zm11 8H4v5a2 2 0 002 2h12a2 2 0 002-2v-5z"
        />
      ),
    },
    {
      valor: '14',
      label: 'Clientes atendidos',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      ),
    },
  ]

  const especialidades = [
    'Social Media',
    'Produção de Vídeo',
    'UX/UI Design',
    'Direção de Arte',
  ]

  const valores = [
    {
      titulo: 'Estratégia antes da execução',
      descricao:
        'Nenhum conteúdo começa pela estética. Começa por diagnóstico, objetivo e público.',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
        />
      ),
    },
    {
      titulo: 'Clareza',
      descricao: 'A comunicação precisa ser compreendida rapidamente, sem esforço.',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      ),
    },
    {
      titulo: 'Excelência visual',
      descricao:
        'Direção de arte, edição de vídeo e design com acabamento, hierarquia e consistência.',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      ),
    },
    {
      titulo: 'Coerência',
      descricao:
        'Cada peça parece parte da mesma marca, mesmo quando o formato muda.',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      ),
    },
    {
      titulo: 'Proximidade',
      descricao:
        'Atendimento e colaboração personalizados, não linha de montagem.',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      ),
    },
    {
      titulo: 'Evolução',
      descricao: 'Processos e padrões documentados e melhorados continuamente.',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941"
        />
      ),
    },
    {
      titulo: 'Responsabilidade',
      descricao:
        'Não prometemos resultado garantido, não inventamos dados, não mascaramos limitações.',
      icone: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      ),
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Sobre a <span className="text-primary">Evozzn</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
          Boas ideias não deveriam parecer pequenas por falta de direção.
        </p>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Existimos pra dar forma, clareza e presença digital a marcas que já
          entregam valor, mas ainda não sabem comunicar isso.
        </p>
      </section>

      {/* Quem somos */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">
                Sobre a Evozzn
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-white">Estratégias que não só</span>{' '}
              <span className="text-primary">comunicam, performam</span>
            </h2>
            <p className="text-gray-400 mb-4">
              De Salvador para o mundo, expandimos nossa atuação
              acompanhando a velocidade do mercado e antecipando tendências.
              Nosso compromisso é simples: criar soluções reais, mensuráveis
              e consistentes, que impulsionam empresas a alcançarem seu
              próximo nível.
            </p>
            <p className="text-gray-400">
              Na Evozzn, construímos estratégias que não apenas comunicam,
              performam. Somos uma agência especializada em marketing digital
              orientado a dados, criada para escalar resultados, fortalecer
              marcas e maximizar oportunidades no ambiente digital.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {numeros.map((numero, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 transition-colors duration-300 hover:border-primary/50 hover:bg-primary/5"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {numero.icone}
                  </svg>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {numero.valor}
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-wide">
                  {numero.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que existimos */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Por que existimos
            </h2>
            <p className="text-gray-400 mb-4">
              Muito projeto bom fica preso numa comunicação amadora e
              superficial. O problema raramente é a qualidade do que fazem,
              ou o domínio do conteúdo, mas sim como isso é mostrado ao
              mundo.
            </p>
            <p className="text-gray-400">
              Resolvemos a falta de tempo, de direção e de conhecimento
              técnico de marketing que trava tanto projeto bom. Entramos com
              estratégia personalizada, uma equipe qualificada,
              direcionamento e proximidade de um parceiro de negócio. Aqui
              você não é só mais um número.
            </p>
          </div>
          <div className="hidden md:flex justify-center opacity-20">
            <Image
              src="/logo/logotipo-fundo.svg"
              alt=""
              width={280}
              height={280}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Por trás da Evozzn */}
      <section className="mb-20">
        <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
          <div className="relative w-full">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="/team/IMG_20251030_143713_132.jpg"
                alt="Ramon Guimarães, fundador da Evozzn"
                fill
                className="object-cover"
              />
            </div>
            <span className="absolute bottom-4 left-4 border border-primary text-primary text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm">
              Fundador &amp; CEO
            </span>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">
                Nossa história
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="block text-white">Ramon</span>
              <span className="block text-primary">Guimarães</span>
            </h2>
            <p className="text-gray-400 mb-4">
              Trabalho com edição de vídeo desde 2023 e sou formado em UX/UI
              Design, base que molda meu olhar: técnico, mas sempre orientado
              ao resultado do cliente.
            </p>
            <p className="text-gray-400 mb-4">
              Criei a Evozzn depois de trabalhar em outras agências e ver de
              perto o que acontece quando o foco está no lucro próprio, não
              na entrega. Decidi construir algo diferente: uma agência
              parceira, não prestadora de serviço.
            </p>
            <p className="text-gray-400 mb-6">
              Cada cliente carrega um projeto, um sonho, uma história. É
              assim que trato cada entrega.
            </p>
            <div className="flex flex-wrap gap-2">
              {especialidades.map((especialidade, index) => (
                <span
                  key={index}
                  className="text-xs text-gray-300 border border-gray-700 rounded-full px-4 py-2"
                >
                  {especialidade}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          O que fazemos
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
          Cada frente nasce de diagnóstico e estratégia, não de estética
          isolada.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* Nosso processo */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Como trabalhamos
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processo.map((etapa, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {etapa.icone}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {etapa.titulo}
              </h3>
              <p className="text-gray-400 text-sm">{etapa.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Nossos valores
        </h2>
        <div className="space-y-4">
          {valores.map((valor, index) => (
            <div
              key={index}
              className="group flex items-center gap-6 rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-colors duration-300 hover:border-primary hover:bg-primary"
            >
              <span className="hidden sm:flex sm:items-center sm:justify-center sm:h-14 sm:w-16 shrink-0 text-4xl md:text-5xl font-bold leading-none tabular-nums text-gray-800 transition-colors duration-300 group-hover:text-white/25">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <div className="text-xl md:text-2xl font-bold text-white mb-1">
                  {valor.titulo}
                </div>
                <div className="text-base text-gray-400 transition-colors duration-300 group-hover:text-white/90">
                  {valor.descricao}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Faz sentido pro <span className="text-primary">seu momento</span>?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Fala com a gente e a gente te diz, com honestidade, se e como
          podemos trabalhar juntos.
        </p>
        <CtaButton>Fala com a gente</CtaButton>
      </section>
    </div>
  )
}
