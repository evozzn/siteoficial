import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'full' | 'icon'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  href?: string
}

const sizeMap = {
  sm: { width: 50, height: 50 }, // Logo circular
  md: { width: 60, height: 60 },
  lg: { width: 80, height: 80 },
  xl: { width: 100, height: 100 },
}

export default function Logo({
  variant = 'full',
  size = 'md',
  className = '',
  href = '/',
}: LogoProps) {
  // Usando o novo logo circular
  const logoPath = '/logo/logo-novo.png'
  const dimensions = sizeMap[size]

  const logoContent = (
    <div 
      className={`${className} transition-opacity hover:opacity-90 overflow-hidden rounded-full`}
      style={{
        width: dimensions.width,
        height: dimensions.width, // Mantém proporção quadrada para logo circular
        position: 'relative',
      }}
    >
      <Image
        src={logoPath}
        alt="Evozzn"
        fill
        priority
        className="object-cover"
        style={{
          objectPosition: 'center 15%', // Foca na parte superior onde está o logo
          objectFit: 'cover',
        }}
      />
    </div>
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


