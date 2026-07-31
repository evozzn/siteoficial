import type { Metadata } from 'next'
import Logo from '@/components/Logo'

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
  },
  {
    label: 'Instagram',
    href: `https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || 'evozzn'}`,
    primary: false,
  },
  {
    label: 'Portfólio',
    href: '/portfolio',
    primary: false,
  },
  {
    label: 'Site da Evozzn',
    href: '/',
    primary: false,
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

        <div className="w-full flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={
                link.primary
                  ? 'w-full text-center bg-primary hover:bg-secondary text-white font-bold px-6 py-4 rounded-full transition-all duration-300 transform hover:scale-105 glow-primary uppercase text-sm tracking-wide'
                  : 'w-full text-center border border-gray-700 hover:border-primary text-white hover:text-primary font-bold px-6 py-4 rounded-full transition-colors duration-200 uppercase text-sm tracking-wide'
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} Evozzn
        </p>
      </div>
    </div>
  )
}
