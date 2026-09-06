import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cases',
  description:
    'Cases reais de clientes ativos da Evozzn, SINTER-MT, Luiz Guedes e outros negócios que cresceram com social media, vídeo e web design. Veja os resultados.',
  openGraph: {
    title: 'Nossos Cases - Evozzn',
    description: 'Cases reais de clientes ativos da Evozzn, SINTER-MT, Luiz Guedes e outros negócios que cresceram com social media, vídeo e web design. Veja os resultados.',
    url: '/cases',
  },
  alternates: {
    canonical: '/cases',
  },
}

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

