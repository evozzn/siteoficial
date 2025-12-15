'use client'

import { useState } from 'react'

// Estrutura de dados preparada para integração futura
interface Case {
  id: string
  cliente: string
  titulo: string
  descricao: string
  categoria: string
  resultados: {
    label: string
    valor: string
  }[]
  logo?: string // URL do logo do cliente
  imagem?: string // URL da imagem do case
}

// Dados mockados para estrutura visual (serão substituídos pelos dados reais)
const casesMock: Case[] = [
  {
    id: '1',
    cliente: 'Cliente Exemplo 1',
    titulo: 'Estratégia Digital Completa',
    descricao:
      'Desenvolvimento de estratégia digital integrada que resultou em crescimento significativo de tráfego e conversões.',
    categoria: 'Estratégia Digital',
    resultados: [
      { label: 'Aumento de Tráfego', valor: '+250%' },
      { label: 'Taxa de Conversão', valor: '+180%' },
      { label: 'ROI', valor: '450%' },
    ],
  },
  {
    id: '2',
    cliente: 'Cliente Exemplo 2',
    titulo: 'Campanha Performance Marketing',
    descricao:
      'Otimização de campanhas pagas com foco em ROI, alcançando resultados excepcionais em custo por aquisição.',
    categoria: 'Performance Marketing',
    resultados: [
      { label: 'Redução de CPA', valor: '-65%' },
      { label: 'Aumento de Vendas', valor: '+320%' },
      { label: 'ROAS', valor: '8.5x' },
    ],
  },
  {
    id: '3',
    cliente: 'Cliente Exemplo 3',
    titulo: 'Rebranding Completo',
    descricao:
      'Reformulação completa da identidade visual e posicionamento de marca, fortalecendo a presença no mercado.',
    categoria: 'Branding',
    resultados: [
      { label: 'Reconhecimento de Marca', valor: '+190%' },
      { label: 'Engajamento', valor: '+275%' },
      { label: 'Leads Qualificados', valor: '+210%' },
    ],
  },
  {
    id: '4',
    cliente: 'Cliente Exemplo 4',
    titulo: 'SEO & Content Marketing',
    descricao:
      'Estratégia de conteúdo e otimização SEO que posicionou a marca como autoridade no segmento.',
    categoria: 'SEO & Conteúdo',
    resultados: [
      { label: 'Tráfego Orgânico', valor: '+420%' },
      { label: 'Posições Top 10', valor: '+85' },
      { label: 'Backlinks', valor: '+1.2k' },
    ],
  },
  {
    id: '5',
    cliente: 'Cliente Exemplo 5',
    titulo: 'Social Media Strategy',
    descricao:
      'Gestão estratégica de redes sociais com crescimento orgânico e aumento significativo de engajamento.',
    categoria: 'Social Media',
    resultados: [
      { label: 'Seguidores', valor: '+580%' },
      { label: 'Alcance Médio', valor: '+340%' },
      { label: 'Taxa de Engajamento', valor: '+195%' },
    ],
  },
  {
    id: '6',
    cliente: 'Cliente Exemplo 6',
    titulo: 'E-commerce Growth',
    descricao:
      'Otimização completa de e-commerce com foco em conversão e experiência do usuário.',
    categoria: 'E-commerce',
    resultados: [
      { label: 'Vendas Online', valor: '+480%' },
      { label: 'Taxa de Conversão', valor: '+220%' },
      { label: 'Ticket Médio', valor: '+35%' },
    ],
  },
]

const categorias = [
  'Todos',
  'Estratégia Digital',
  'Performance Marketing',
  'Branding',
  'SEO & Conteúdo',
  'Social Media',
  'E-commerce',
]

export default function CasesPage() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos')

  const casesFiltrados =
    categoriaSelecionada === 'Todos'
      ? casesMock
      : casesMock.filter((caseItem) => caseItem.categoria === categoriaSelecionada)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Nossos <span className="text-primary">Cases</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Conheça alguns dos projetos que desenvolvemos e os resultados que
          alcançamos para nossos clientes.
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
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {casesFiltrados.map((caseItem) => (
          <div
            key={caseItem.id}
            className="bg-gray-900/50 rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 overflow-hidden group"
          >
            {/* Imagem/Thumbnail do Case */}
            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
              {caseItem.imagem ? (
                <img
                  src={caseItem.imagem}
                  alt={caseItem.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">Imagem do projeto</p>
                </div>
              )}
            </div>

            {/* Logo do Cliente */}
            <div className="px-6 pt-6 pb-4">
              <div className="flex items-center gap-3 mb-4">
                {caseItem.logo ? (
                  <img
                    src={caseItem.logo}
                    alt={caseItem.cliente}
                    className="h-10 w-auto object-contain"
                  />
                ) : (
                  <div className="h-10 w-24 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-gray-600 text-xs font-medium">
                      {caseItem.cliente}
                    </span>
                  </div>
                )}
              </div>

              {/* Categoria */}
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                {caseItem.categoria}
              </span>

              {/* Título */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {caseItem.titulo}
              </h3>

              {/* Descrição */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {caseItem.descricao}
              </p>
            </div>

            {/* Resultados */}
            <div className="px-6 pb-6 pt-4 border-t border-gray-800">
              <div className="grid grid-cols-3 gap-4">
                {caseItem.resultados.map((resultado, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-bold text-primary mb-1">
                      {resultado.valor}
                    </div>
                    <div className="text-xs text-gray-500">
                      {resultado.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-lg text-center border border-primary/20">
        <h2 className="text-3xl font-bold text-white mb-4">
          Quer resultados como estes?
        </h2>
        <p className="text-gray-400 mb-6">
          Entre em contato e descubra como podemos ajudar seu negócio a alcançar
          resultados estratégicos.
        </p>
        <a
          href="/contato"
          className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Fale conosco
        </a>
      </section>
    </div>
  )
}
