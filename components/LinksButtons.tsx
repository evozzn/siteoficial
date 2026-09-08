'use client'

import { trackEvent } from '@/lib/analytics'

interface LinkItem {
  label: string
  href: string
  primary: boolean
  event: string
}

// Renderiza os botoes da pagina /links e dispara um evento pro GA4 a cada
// clique, com o nome do evento definido por link (whatsapp_click,
// instagram_click, etc). Isso permite ver no Analytics quantos cliques
// cada botao recebeu, igual um Linktree.
export default function LinksButtons({ links }: { links: LinkItem[] }) {
  return (
    <div className="w-full flex flex-col gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          onClick={() =>
            trackEvent(link.event, {
              link_label: link.label,
              link_url: link.href,
              location: 'links_page',
            })
          }
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
  )
}
