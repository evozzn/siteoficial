'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const navLinks = [
  { href: '/servicos', label: 'Serviços' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/cases', label: 'Cases' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/servicos#faq', label: 'FAQ' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header className="w-full border-b border-gray-800/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo size="xs" href="/" />

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 font-medium ${pathname === link.href ? 'text-primary' : 'text-gray-300 hover:text-primary'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 border border-primary/50 hover:border-secondary/50"
            >
              Solicitar orçamento
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-primary transition-colors p-1"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-20 bg-background z-[60] flex flex-col px-6 py-8 border-t border-gray-800/50"
        >
          <nav className="flex flex-col gap-1 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-semibold transition-colors duration-200 py-4 border-b border-gray-800/50 ${pathname === link.href ? 'text-primary' : 'text-gray-200 hover:text-primary'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contato"
            onClick={() => setIsOpen(false)}
            className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-4 rounded-lg transition-all duration-200 text-center text-lg"
          >
            Solicitar orçamento
          </Link>
        </div>
      )}
    </header>
  )
}
