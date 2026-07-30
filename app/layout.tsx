import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://evozzn.com'),
  title: {
    default: 'Evozzn - Conteúdo e Posicionamento Digital',
    template: '%s | Evozzn',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

