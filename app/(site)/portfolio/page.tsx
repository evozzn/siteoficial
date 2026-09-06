'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CtaButton from '@/components/CtaButton'
import { portfolioItems, categoriasPortfolio } from '@/lib/portfolio'

export default function PortfolioPage() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(
    categoriasPortfolio[0]
  )
  const [videosAtivos, setVideosAtivos] = useState<Set<string>>(new Set())
  const [imagensCarregadas, setImagensCarregadas] = useState<Set<string>>(
    new Set()
  )

  const ativarVideo = (id: string) => {
    setVideosAtivos((prev) => new Set(prev).add(id))
  }

  const marcarImagemCarregada = (id: string) => {
    setImagensCarregadas((prev) => new Set(prev).add(id))
  }

  const itensFiltrados = portfolioItems.filter(
    (item) => item.categoria === categoriaSelecionada
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Nosso <span className="text-primary">Portfólio</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Artes, vídeos e sites que já entregamos, organizados por serviço.
        </p>
      </section>

      {/* Filtros */}
      {portfolioItems.length > 0 && (
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categoriasPortfolio.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaSelecionada(categoria)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  categoriaSelecionada === categoria
                    ? 'bg-primary text-white'
                    : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800 border border-gray-800'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Grid de Portfólio */}
      {itensFiltrados.length > 0 ? (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-start">
          {itensFiltrados.map((item) => (
            <div
              key={item.id}
              className="relative rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 overflow-hidden bg-gray-950"
            >
              {item.imagem && (
                <div className="relative group">
                  <Image
                    src={item.imagem}
                    alt={item.titulo}
                    width={item.imagemWidth ?? 1080}
                    height={item.imagemHeight ?? 1350}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onLoad={() => marcarImagemCarregada(item.id)}
                    className={`w-full h-auto block transition-opacity duration-500 ease-out ${
                      imagensCarregadas.has(item.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-200"
                    >
                      <span className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white text-sm font-semibold px-5 py-2.5 rounded-lg">
                        Ver site
                      </span>
                    </a>
                  )}
                </div>
              )}
              {item.video && (
                <video src={item.video} controls className="w-full block" />
              )}
              {item.youtubeId && (
                <div
                  className={`relative bg-black ${item.vertical ? 'aspect-[9/16]' : 'aspect-video'}`}
                >
                  {videosAtivos.has(item.id) ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                      title={item.titulo}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => ativarVideo(item.id)}
                      aria-label={`Reproduzir vídeo: ${item.titulo}`}
                      className="group absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
                        alt={item.titulo}
                        width={480}
                        height={360}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onLoad={() => marcarImagemCarregada(item.id)}
                        className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
                          imagensCarregadas.has(item.id) ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors duration-200">
                        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-primary shadow-lg group-hover:bg-secondary transition-colors duration-200">
                          <svg
                            className="w-6 h-6 text-white ml-1"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </span>
                    </button>
                  )}
                </div>
              )}
              {item.views && (
                <span className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {item.views}
                </span>
              )}
            </div>
          ))}
        </section>
      ) : (
        <section className="text-center bg-gray-900/50 border border-gray-800 rounded-lg py-20 px-6 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Portfólio em atualização
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Estamos organizando as artes, vídeos e sites que já entregamos
            pra mostrar aqui. Enquanto isso, você confere resultados reais na
            nossa página de Cases.
          </p>
          <Link
            href="/cases"
            className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Ver Cases
          </Link>
        </section>
      )}

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Quer resultados como estes?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Chame nossos especialistas e montaremos um plano personalizado pra
          você.
        </p>
        <CtaButton>Falar com especialista</CtaButton>
      </section>
    </div>
  )
}
