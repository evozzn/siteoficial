import type { Metadata } from 'next'
import Logo from '@/components/Logo'
import LinksButtons from '@/components/LinksButtons'

export const metadata: Metadata = {
  title: 'Links',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

const links = [
  {
    label: 'Falar no Whatsapp',
    href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5571987497742'}?text=Olá,%20vim%20pelo%20link%20da%20Evozzn`,
    primary: true,
    event: 'whatsapp_click',
  },
  {
    label: 'Instagram',
    href: `https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || 'evozzn'}`,
    primary: false,
    event: 'instagram_click',
  },
  {
    label: 'Portfólio',
    href: '/portfolio',
    primary: false,
    event: 'portfolio_click',
  },
  {
    label: 'Site da Evozzn',
    href: '/',
    primary: false,
    event: 'site_click',
  },
]

export default function LinksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm flex flex-col items-center">
        <Logo size="md" href="" />

        <p className="mt-4 mb-10 text-center text-gray-400 text-sm">
          Agência de marketing e mídia que não faz marketing comum.
          Construímos crescimento inteligente pra quem quer liderar.
        </p>

        <LinksButtons links={links} />

        <p className="mt-12 text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} Evozzn
        </p>
      </div>
    </div>
  )
}
