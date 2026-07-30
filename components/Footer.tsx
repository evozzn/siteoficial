'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const menuLinks = [
  { href: '/', label: 'Início' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/cases', label: 'Cases' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/servicos#faq', label: 'FAQ' },
  { href: '/contato', label: 'Contato' },
]

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className="w-full border-t border-gray-800 bg-background mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo size="sm" href="/" />
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="mailto:evozzn@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  evozzn@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5571987497742'}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Evozzn`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Nos siga */}
          <div>
            <h4 className="text-white font-semibold mb-4">Nos siga</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href={`https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || 'evozzn'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors underline underline-offset-2"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors ${pathname === link.href ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Evozzn. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
