'use client'

import { useState } from 'react'
import Link from 'next/link'

const perguntas = [
  {
    pergunta: 'O que a Evozzn faz?',
    resposta:
      'Somos uma agência de conteúdo e posicionamento digital que une estratégia, design e vídeo pra transformar comunicação amadora em presença profissional e consistente.',
  },
  {
    pergunta: 'Como funciona a contratação?',
    resposta:
      'Começamos com uma conversa, entendendo o seu negócio de forma completa. A partir daí, construímos uma estratégia sob medida e que faz sentido pra sua marca.',
  },
  {
    pergunta: 'A Evozzn atende qualquer segmento?',
    resposta:
      'Sim. Nossa estrutura é pensada pra atender marcas de diferentes mercados, sem nicho fixo.',
  },
  {
    pergunta: 'Quais canais a Evozzn utiliza?',
    resposta:
      'O foco principal é Instagram e TikTok, com conteúdo orgânico e consistente. Também produzimos sites institucionais e landing pages quando o projeto pede.',
  },
  {
    pergunta: 'A Evozzn trabalha com criação de conteúdo?',
    resposta:
      'Sim. Atuamos desde a estratégia até a execução, com direção de arte, design e vídeo orientados por dados de performance em cada etapa.',
  },
  {
    pergunta: 'Como acompanho os resultados?',
    resposta:
      'Compartilhamos dados reais e relatórios estruturados em cada etapa da parceria.',
    mostrarBotao: true,
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: perguntas.map((item) => ({
    '@type': 'Question',
    name: item.pergunta,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.resposta,
    },
  })),
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="flex items-end gap-3 mb-10">
        <h2 className="text-4xl md:text-5xl font-black text-white">FAQ</h2>
        <svg
          className="w-7 h-7 md:w-8 md:h-8 text-primary mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div className="border-t border-gray-800">
        {perguntas.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div key={item.pergunta} className="border-b border-gray-800">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 py-6 text-left"
              >
                <span
                  className={`flex items-center gap-3 text-base md:text-lg font-bold uppercase tracking-wide transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-white'}`}
                >
                  <span className="w-3 shrink-0">{isOpen ? '−' : '+'}</span>
                  {item.pergunta}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-400 pb-6 pl-6 pr-4">
                    {item.resposta}
                  </p>
                  {item.mostrarBotao && (
                    <Link
                      href="/contato"
                      className="inline-block ml-6 mb-6 border border-gray-600 hover:border-primary text-white hover:text-primary text-xs font-bold uppercase tracking-wide px-6 py-3 rounded-full transition-colors duration-200"
                    >
                      Contrate a Evozzn
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
