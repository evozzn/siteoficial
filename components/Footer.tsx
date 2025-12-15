import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-background mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Evozzn</h3>
            <p className="text-gray-400 text-sm">
              Agência de marketing premium especializada em resultados estratégicos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/home"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/cases"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Cases
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: contato@evozzn.com</li>
              <li>WhatsApp: (00) 00000-0000</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Evozzn. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

