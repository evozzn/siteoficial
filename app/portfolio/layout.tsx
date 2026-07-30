import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfólio',
  description:
    'Portfólio de design, edição de vídeo e web design da Evozzn: carrosséis, capas de Reels, landing pages e sites institucionais.',
  openGraph: {
    title: 'Portfólio - Evozzn',
    description:
      'Design, edição de vídeo e web design da Evozzn em projetos reais de clientes.',
    url: '/portfolio',
  },
  alternates: {
    canonical: '/portfolio',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
