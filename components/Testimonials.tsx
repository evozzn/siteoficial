'use client'

import { useEffect, useState } from 'react'

interface Depoimento {
  nome: string
  cargo: string
  citacao: string
}

// Depoimentos reais, transcritos de vídeos gravados por clientes da Evozzn.
const depoimentos: Depoimento[] = [
  {
    nome: 'Luiz Guedes',
    cargo: 'Treinador Online',
    citacao:
      'Minhas expectativas foram totalmente cumpridas. Saí de 2 mil visualizações mensais pra mais de 15 mil em 1 mês de contrato com a Evozzn.',
  },
  {
    nome: 'Valdir Donizete',
    cargo: 'Gestor de Logística',
    citacao:
      'Fizeram um trabalho fantástico. Consegui alavancar o meu negócio e falar do meu trabalho com maior clareza, graças à ajuda do pessoal da Evozzn.',
  },
  {
    nome: 'Danilo Guimarães',
    cargo: 'Fisioterapeuta',
    citacao:
      'A gente já percebe o profissionalismo da equipe. Eles escutam e personalizam tudo que a gente precisa, e o resultado final vai além do que você espera.',
  },
]

export default function Testimonials() {
  const [ativo, setAtivo] = useState(0)
  const atual = depoimentos[ativo]

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAtivo((i) => (i + 1) % depoimentos.length)
    }, 10000)
    return () => clearInterval(intervalo)
  }, [])

  return (
    <section className="mb-32">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <svg
          className="w-14 h-14 text-primary/30 mb-4"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v16c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-256 0H80C53.5 32 32 53.5 32 80v128c0 26.5 21.5 48 48 48h80v16c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
        </svg>

        <p className="text-xl md:text-2xl font-bold text-white text-balance min-h-[7rem] md:min-h-[6rem]">
          {atual.citacao}
        </p>

        <div className="mt-8 mb-6">
          <div className="text-white font-bold">{atual.nome}</div>
          <div className="text-gray-400 text-sm">{atual.cargo}</div>
        </div>

        <div className="flex items-center gap-2">
          {depoimentos.map((d, i) => (
            <button
              key={d.nome}
              onClick={() => setAtivo(i)}
              aria-label={`Ir para depoimento ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === ativo ? 'w-6 bg-primary' : 'w-1.5 bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
