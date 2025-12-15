import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-800 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Evozzn</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/home"
              className="text-gray-300 hover:text-primary transition-colors duration-200"
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="text-gray-300 hover:text-primary transition-colors duration-200"
            >
              Sobre
            </Link>
            <Link
              href="/servicos"
              className="text-gray-300 hover:text-primary transition-colors duration-200"
            >
              Serviços
            </Link>
            <Link
              href="/cases"
              className="text-gray-300 hover:text-primary transition-colors duration-200"
            >
              Cases
            </Link>
            <Link
              href="/contato"
              className="text-gray-300 hover:text-primary transition-colors duration-200"
            >
              Contato
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

