import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-800/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo variant="full" size="xs" href="/" />

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/servicos"
              className="text-gray-300 hover:text-primary transition-colors duration-200 font-medium"
            >
              Serviços
            </Link>
            <Link
              href="/sobre"
              className="text-gray-300 hover:text-primary transition-colors duration-200 font-medium"
            >
              Sobre
            </Link>
            <Link
              href="/cases"
              className="text-gray-300 hover:text-primary transition-colors duration-200 font-medium"
            >
              Resultados
            </Link>
            <Link
              href="/contato"
              className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 border border-primary/50 hover:border-secondary/50"
            >
              Agendar Consultoria
            </Link>
          </div>

          {/* Mobile menu button (placeholder - será implementado na Fase 2 se necessário) */}
          <button
            className="md:hidden text-gray-300 hover:text-primary transition-colors"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

