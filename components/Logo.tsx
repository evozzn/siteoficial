import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'full' | 'icon'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  href?: string
}

const sizeMap = {
  sm: { width: 120, height: 40 },
  md: { width: 180, height: 60 },
  lg: { width: 240, height: 80 },
  xl: { width: 400, height: 133 },
}

export default function Logo({
  variant = 'full',
  size = 'md',
  className = '',
  href = '/',
}: LogoProps) {
  const logoPath = variant === 'full' ? '/logo/logomarca.svg' : '/logo/logotipo.svg'
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

