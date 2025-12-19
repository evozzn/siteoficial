import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cases',
  description:
    'Conheça alguns dos projetos que desenvolvemos e os resultados que alcançamos para nossos clientes. Cases de sucesso em estratégia digital, performance marketing, branding e mais.',
  openGraph: {
    title: 'Nossos Cases - Evozzn',
    description:
      'Conheça alguns dos projetos que desenvolvemos e os resultados que alcançamos para nossos clientes.',
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

