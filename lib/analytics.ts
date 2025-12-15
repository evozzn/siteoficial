/**
 * Utilitários para Google Analytics 4
 * 
 * Use estas funções para enviar eventos customizados
 */

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set',
      targetId: string | object,
      config?: object
    ) => void
  }
}

/**
 * Envia um evento para o Google Analytics
 */
export const trackEvent = (
  eventName: string,
  eventParams?: {
    [key: string]: string | number | boolean
  }
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

/**
 * Eventos pré-configurados
 */
export const analytics = {
  // Evento de conversão do formulário
  contactFormSubmit: (data?: { method?: string }) => {
    trackEvent('form_submit', {
      form_name: 'contact_form',
      form_location: 'contact_page',
      ...data,
    })
  },

  // Evento de clique em CTA
  ctaClick: (ctaName: string, location: string) => {
    trackEvent('cta_click', {
      cta_name: ctaName,
      location,
    })
  },

  // Evento de visualização de página
  pageView: (pagePath: string, pageTitle?: string) => {
    trackEvent('page_view', {
      page_path: pagePath,
      ...(pageTitle && { page_title: pageTitle }),
    })
  },

  // Evento de clique em WhatsApp
  whatsappClick: (location: string) => {
    trackEvent('whatsapp_click', {
      location,
    })
  },

  // Evento de clique em link externo
  externalLinkClick: (url: string, linkText: string) => {
    trackEvent('external_link_click', {
      link_url: url,
      link_text: linkText,
    })
  },
}

