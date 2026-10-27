'use client'

import { useState } from 'react'

interface AntesDepoisToggleProps {
  cliente: string
  fotoAntes: string
  fotoDepois: string
}

export default function AntesDepoisToggle({
  cliente,
  fotoAntes,
  fotoDepois,
}: AntesDepoisToggleProps) {
  const [mostrarDepois, setMostrarDepois] = useState(true)

  const rotulo = mostrarDepois ? 'Depois' : 'Antes'

  return (
    <div>
      <div className="flex items-center justify-center gap-4 mb-3">
        <button
          type="button"
          onClick={() => setMostrarDepois(false)}
          aria-label={`Ver perfil de ${cliente} antes da gestão da Evozzn`}
          disabled={!mostrarDepois}
          className="p-1.5 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-primary/50 disabled:opacity-20 disabled:pointer-events-none transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <span
          className={`text-xs uppercase tracking-wide font-semibold w-16 text-center ${
            mostrarDepois ? 'text-primary' : 'text-gray-500'
          }`}
        >
          {rotulo}
        </span>
        <button
          type="button"
          onClick={() => setMostrarDepois(true)}
          aria-label={`Ver perfil de ${cliente} depois da gestão da Evozzn`}
          disabled={mostrarDepois}
          className="p-1.5 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:border-primary/50 disabled:opacity-20 disabled:pointer-events-none transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div
        className={`relative w-full overflow-hidden rounded-xl border transition-colors duration-300 ${
          mostrarDepois ? 'border-primary/40' : 'border-gray-800'
        }`}
      >
        <div
          className="flex w-[200%] transition-transform duration-500 ease-out"
          style={{ transform: mostrarDepois ? 'translateX(-50%)' : 'translateX(0%)' }}
        >
          <div className="w-1/2 flex-shrink-0">
            <img
              src={fotoAntes}
              alt={`Perfil de ${cliente} antes da gestão da Evozzn`}
              className="w-full block"
              loading="lazy"
            />
          </div>
          <div className="w-1/2 flex-shrink-0">
            <img
              src={fotoDepois}
              alt={`Perfil de ${cliente} depois da gestão da Evozzn`}
              className="w-full block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
