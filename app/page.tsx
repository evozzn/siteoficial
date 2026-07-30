import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Testimonials from '@/components/Testimonials'
import { servicosHome } from '@/lib/servicos'

export const metadata: Metadata = {
  title: 'Início',
  description:
    'Agência de posicionamento digital especializada em social media, produção de vídeo e web design. Atendimento próximo, processo de agência.',
  openGraph: {
    title: 'Evozzn - Presença digital com processo de agência',
    description:
      'Agência de posicionamento digital especializada em social media, produção de vídeo e web design.',
    url: '/',
  },
}

const marcasParceiras = [
  {
    src: '/logos/sinter-mt.png',
    nome: 'SINTER-MT',
    width: 222,
    height: 64,
    tamanho: 'h-10',
  },
  {
    src: '/logos/blead.png',
    nome: 'Blead',
    width: 210,
    height: 74,
    tamanho: 'h-10',
  },
  {
    src: '/logos/greenfy.png',
    nome: 'Greenfy',
    width: 315,
    height: 71,
    tamanho: 'h-10',
  },
  {
    src: '/logos/nordica-imoveis.png',
    nome: 'Nórdica Imóveis',
    width: 315,
    height: 91,
    tamanho: 'h-10',
  },
  {
    src: '/logos/altavista-imobiliaria.png',
    nome: 'Altavista Imobiliária',
    width: 316,
    height: 73,
    tamanho: 'h-14',
  },
  {
    src: '/logos/papo-ideal.png',
    nome: 'Papo Ideal',
    width: 163,
    height: 142,
    tamanho: 'h-14',
  },
  {
    src: '/logos/fastdeal.png',
    nome: 'FastDeal',
    width: 290,
    height: 61,
    tamanho: 'h-10',
  },
  {
    src: '/logos/teasy.png',
    nome: 'Teasy',
    width: 225,
    height: 72,
    tamanho: 'h-14',
  },
  {
    src: '/logos/colegio-paraiso.png',
    nome: 'Colégio Paraíso',
    width: 318,
    height: 101,
    tamanho: 'h-10',
  },
  {
    src: '/logos/feminina.png',
    nome: 'Feminina',
    width: 167,
    height: 127,
    tamanho: 'h-14',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section — full-bleed, fora do container de conteúdo */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background com gradiente animado */}
        <div className="absolute inset-0 gradient-radial animate-pulse-glow" />

        {/* Efeitos de partículas/glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1.5s' }}
        />

        {/* Logo de fundo com efeito de vidro */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div
            className="w-full h-full max-w-4xl max-h-4xl opacity-[0.08]"
            style={{
              backgroundImage: 'url(/logo/logotipo-fundo.svg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              filter: 'blur(1px)',
            }}
          />
        </div>

        {/* Fade suave pro fundo da próxima seção */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background pointer-events-none z-[2]" />

        {/* Conteúdo */}
        <div className="relative z-10 w-full text-center max-w-5xl mx-auto px-4 py-20 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 text-balance">
            Conectando marcas às{' '}
            <span className="text-primary">pessoas certas</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-5xl mx-auto mb-8 text-balance">
            Não fazemos marketing comum. Construímos crescimento inteligente
            pra quem quer liderar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-primary hover:brightness-110 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 glow-primary uppercase text-sm tracking-wide"
            >
              Solicitar orçamento
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
            <Link
              href="/cases"
              className="group inline-flex items-center gap-3 border-2 border-white/30 hover:border-white hover:bg-white text-white hover:text-gray-900 font-bold pl-2 pr-6 py-2 rounded-full transition-all duration-300 uppercase text-sm tracking-wide"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-primary">
                <svg
                  className="w-3.5 h-3.5 text-white ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Ver cases
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Sobre a Evozzn */}
        <section className="mb-48">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Sobre a Evozzn
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Texto — esquerda */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Somos especialistas em{' '}
                <span className="text-primary">posicionamento digital</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-400 text-lg">
                  A Evozzn nasceu da convicção de que presença digital de
                  verdade{' '}
                  <span className="text-primary font-medium">
                    não se faz copiando o que todo mundo já faz
                  </span>
                  .
                </p>
                <p className="text-gray-400 text-lg">
                  Cada marca é única, cada mercado tem suas nuances, e cada
                  resultado exige uma estratégia pensada do zero. Combinamos
                  inteligência de dados, criatividade estratégica e execução
                  impecável para entregar o que realmente importa.
                </p>
                <p className="text-gray-400 text-lg">
                  Não somos uma agência que entrega relatórios bonitos.{' '}
                  <span className="text-white font-semibold">
                    Somos parceiros que entregam resultados reais.
                  </span>
                </p>
              </div>
            </div>

            {/* Método — direita */}
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <div className="text-base font-bold text-white mb-1">
                  Diagnóstico
                </div>
                <div className="text-sm text-gray-400">
                  Entendemos o negócio, o público e o cenário competitivo
                  antes de propor qualquer coisa.
                </div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </div>
                <div className="text-base font-bold text-white mb-1">
                  Estratégia
                </div>
                <div className="text-sm text-gray-400">
                  Montamos um plano com objetivos claros, linha editorial e
                  cronograma de entregas.
                </div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                  </svg>
                </div>
                <div className="text-base font-bold text-white mb-1">
                  Execução
                </div>
                <div className="text-sm text-gray-400">
                  Colocamos o plano em prática com agilidade e comunicação
                  transparente a cada entrega.
                </div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                </div>
                <div className="text-base font-bold text-white mb-1">
                  Acompanhamento
                </div>
                <div className="text-sm text-gray-400">
                  Analisamos os resultados e ajustamos o processo pra manter
                  a consistência mês a mês.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O que fazemos */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                  Expertise
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white">
                O que <span className="text-primary">fazemos</span>
              </h2>
            </div>
            <p className="text-gray-400 md:text-right md:max-w-sm">
              Soluções integradas para cada etapa do seu crescimento, da
              estratégia à execução.
            </p>
          </div>

          <div className="space-y-4">
            {servicosHome.map((servico, index) => (
              <Link
                key={servico.titulo}
                href={`/servicos/${servico.destino}`}
                className="group flex items-center gap-6 rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-colors duration-300 hover:border-primary hover:bg-primary"
              >
                <span className="hidden sm:flex sm:items-center sm:justify-center sm:h-14 sm:w-16 shrink-0 text-4xl md:text-5xl font-bold leading-none tabular-nums text-gray-800 transition-colors duration-300 group-hover:text-white/25">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-white/20">
                  <svg
                    className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white"
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
                <div className="flex-1">
                  <div className="text-xl md:text-2xl font-bold text-white mb-1">
                    {servico.titulo}
                  </div>
                  <div className="text-base text-gray-400 transition-colors duration-300 group-hover:text-white/90">
                    {servico.descricao}
                  </div>
                </div>
                <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <svg
                    className="h-4 w-4 text-primary"
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
              </Link>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-5 text-center">
            <p className="text-gray-400">Precisa de algo específico?</p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 glow-primary uppercase text-sm tracking-wide"
            >
              Solicite seu orçamento
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
          </div>
        </section>

        <Testimonials />

        {/* Marcas que confiam */}
        <section className="border-t border-gray-800 pt-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-8">
            Marcas que confiam na Evozzn
          </p>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee items-center gap-16">
              {marcasParceiras.concat(marcasParceiras).map((marca, index) => (
                <Image
                  key={`${marca.nome}-${index}`}
                  src={marca.src}
                  alt={marca.nome}
                  width={marca.width}
                  height={marca.height}
                  className={`${marca.tamanho} w-auto shrink-0 object-contain`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
