'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CtaButton from '@/components/CtaButton'
import { cases } from '@/lib/cases'

const categorias = ['Todos', 'Social Media', 'Criativos para Meta Ads', 'YouTube']

export default function CasesPage() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos')

  const casesFiltrados =
    categoriaSelecionada === 'Todos'
      ? cases
      : cases.filter((caseItem) => caseItem.categoria === categoriaSelecionada)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Nossos <span className="text-primary">Cases</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Resultados reais de clientes ativos. Os números não mudam. Só
          preservamos a identidade quando a confidencialidade é do parceiro,
          não nossa.
        </p>
      </section>

      {/* Filtros */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categorias.map((categoria) => (
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

      {/* Grid de Cases */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        {casesFiltrados.map((caseItem) => {
          const conteudo = (
            <>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {caseItem.logo ? (
                    <Image
                      src={caseItem.logo}
                      alt={caseItem.cliente}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover border border-gray-800 flex-shrink-0"
                    />
                  ) : (
                    <div
                      className="h-10 w-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center flex-shrink-0"
                      aria-label="Cliente anônimo por confidencialidade"
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                  )}
                  <span className="text-gray-200 text-sm font-semibold">
                    {caseItem.cliente}
                  </span>
                </div>

                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {caseItem.categoria}
                </span>

                <p className="text-gray-400 text-sm mb-4">{caseItem.descricao}</p>
              </div>

              <div className="mt-auto px-6 pb-6 pt-4 border-t border-gray-800">
                <div className="grid grid-cols-3 gap-4">
                  {caseItem.resultados.map((resultado, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-primary mb-1">
                        {resultado.valor}
                      </div>
                      <div className="text-xs text-gray-400">
                        {resultado.label}
                      </div>
                    </div>
                  ))}
                </div>
                {caseItem.slug && (
                  <div className="mt-5 pt-4 border-t border-gray-800 flex items-center justify-between">
                    <span className="text-primary text-sm font-semibold">
                      Ver antes e depois completo
                    </span>
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                )}
              </div>
            </>
          )

          const classeCartao =
            'flex flex-col h-full bg-gray-900/50 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 overflow-hidden'

          if (caseItem.slug) {
            return (
              <Link key={caseItem.id} href={`/cases/${caseItem.slug}`} className={classeCartao}>
                {conteudo}
              </Link>
            )
          }

          return (
            <div key={caseItem.id} className={classeCartao}>
              {conteudo}
            </div>
          )
        })}
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Quer resultados como estes?
        </h2>
        <p className="text-gray-400 mb-8">
          Chame nossos especialistas e montaremos um plano personalizado pra
          você.
        </p>
        <CtaButton>Falar com especialista</CtaButton>
      </section>
    </div>
  )
}
