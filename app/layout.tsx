import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://evozzn.com'),
  title: {
    default: 'Evozzn - Conteúdo e Posicionamento Digital',
    template: '%s',
  },
  description:
    'Agência de conteúdo e posicionamento digital. Social media, produção de vídeo e web design, com processo de agência e atendimento próximo.',
  keywords: [
    'agência de social media',
    'gestão de redes sociais',
    'produção de vídeo',
    'edição de vídeo',
    'web design',
    'posicionamento digital',
  ],
  authors: [{ name: 'Evozzn' }],
  creator: 'Evozzn',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://evozzn.com',
    siteName: 'Evozzn',
    title: 'Evozzn - Conteúdo e Posicionamento Digital',
    description:
      'Agência de conteúdo e posicionamento digital. Social media, produção de vídeo e web design.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evozzn - Conteúdo e Posicionamento Digital',
    description:
      'Agência de conteúdo e posicionamento digital. Social media, produção de vídeo e web design.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Evozzn',
  description:
    'Agência de conteúdo e posicionamento digital. Social media, produção de vídeo e web design, com processo de agência e atendimento próximo.',
  url: 'https://evozzn.com',
  logo: 'https://evozzn.com/logo/logomarca-nova.svg',
  image: 'https://evozzn.com/logo/logomarca-nova.svg',
  email: 'evozzn@gmail.com',
  areaServed: 'BR',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
  },
  sameAs: ['https://instagram.com/evozzn'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}

