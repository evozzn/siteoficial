import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cases',
  description:
    'Resultados reais de clientes ativos da Evozzn, sem tráfego pago: SINTER-MT, Luiz Guedes e outros.',
  openGraph: {
    title: 'Nossos Cases - Evozzn',
    description:
      'Resultados reais de clientes ativos da Evozzn, sem tráfego pago.',
    url: '/cases',
  },
}

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

