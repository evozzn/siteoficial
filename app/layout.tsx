import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://evozzn.com'),
  title: {
    default: 'Evozzn - Agência de Marketing Premium',
    template: '%s | Evozzn',
  },
  description:
    'Agência de marketing premium especializada em estratégias digitais, performance marketing e branding. Transformamos ideias em resultados estratégicos.',
  keywords: [
    'agência de marketing',
    'marketing digital',
    'performance marketing',
    'branding',
    'SEO',
    'social media',
    'estratégia digital',
  ],
  authors: [{ name: 'Evozzn' }],
  creator: 'Evozzn',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://evozzn.com',
    siteName: 'Evozzn',
    title: 'Evozzn - Agência de Marketing Premium',
    description:
      'Agência de marketing premium especializada em estratégias digitais, performance marketing e branding.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evozzn - Agência de Marketing Premium',
    description:
      'Agência de marketing premium especializada em estratégias digitais, performance marketing e branding.',
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

