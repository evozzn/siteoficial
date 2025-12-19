import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'full' | 'icon'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  href?: string
}

// Proporção do SVG: 751:215
const sizeMap = {
  sm: { width: 150, height: 43 }, // Proporção 751:215
  md: { width: 200, height: 57 },
  lg: { width: 250, height: 72 },
  xl: { width: 300, height: 86 },
}

export default function Logo({
  variant = 'full',
  size = 'md',
  className = '',
  href = '/',
}: LogoProps) {
  // Usando o novo logo SVG
  const logoPath = '/logo/logomarca-nova.svg'
  const dimensions = sizeMap[size]

  const logoContent = (
    <Image
      src={logoPath}
      alt="Evozzn"
      width={dimensions.width}
      height={dimensions.height}
      priority
      className={`${className} transition-opacity hover:opacity-90`}
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  )

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {logoContent}
      </Link>
    )
  }

  return logoContent
}


