import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cases',
  description:
    'Cases reais de clientes ativos da Evozzn, SINTER-MT, Dr. Snoopy Pet Shop, Luiz Guedes e outros negócios que cresceram com social media, Google Meu Negócio, vídeo e web design. Veja os resultados.',
  openGraph: {
    title: 'Nossos Cases - Evozzn',
    description: 'Cases reais de clientes ativos da Evozzn, SINTER-MT, Dr. Snoopy Pet Shop, Luiz Guedes e outros negócios que cresceram com social media, Google Meu Negócio, vídeo e web design. Veja os resultados.',
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

