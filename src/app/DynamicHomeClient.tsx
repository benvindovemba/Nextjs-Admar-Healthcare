'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Carrega o HomeClient apenas no cliente, sem SSR
const DynamicHomeClient = dynamic(() => import('./HomeClient'), {
  ssr: false,
  loading: () => <div>Carregando...</div>,
})

export default function DynamicHomeClientWrapper() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <DynamicHomeClient />
    </Suspense>
  )
}