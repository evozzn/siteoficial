import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cases',
  description:
    'Resultados reais de clientes ativos da Evozzn: SINTER-MT, Luiz Guedes e outros.',
  openGraph: {
    title: 'Nossos Cases - Evozzn',
    description: 'Resultados reais de clientes ativos da Evozzn.',
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

