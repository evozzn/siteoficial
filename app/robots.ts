import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.evozzn.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/links',
        ],
      },
      // Permite bots de busca principais
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/links'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/links'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
