import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  href?: string
}

// Proporção do SVG: 751:215
const sizeMap = {
  xs: { width: 120, height: 34 },
  sm: { width: 150, height: 43 },
  md: { width: 200, height: 57 },
  lg: { width: 250, height: 72 },
  xl: { width: 300, height: 86 },
}

export default function Logo({
  size = 'md',
  className = '',
  href = '/',
}: LogoProps) {
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
