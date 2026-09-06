import Link from 'next/link'
import type { ReactNode } from 'react'

interface CtaButtonProps {
  href?: string
  children: ReactNode
}

// Botao de CTA padrao do site (pilula azul com seta), usado em varias
// paginas para levar o visitante ate o contato. Centralizado aqui pra
// nao precisar editar o mesmo markup em cada pagina separadamente.
export default function CtaButton({ href = '/contato', children }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 glow-primary uppercase text-sm tracking-wide"
    >
      {children}
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </Link>
  )
}
