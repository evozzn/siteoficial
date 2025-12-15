import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
          Evozzn
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Agência de Marketing Premium
        </p>
        <Link
          href="/home"
          className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Entrar no site
        </Link>
      </div>
    </div>
  )
}

