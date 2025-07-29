// src/app/agendar/page.tsx
import { Suspense } from 'react'
import AgendarPageClient from './AgendarPageClient'

export default function AgendarPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Carregando agendamento...</div>}>
      <AgendarPageClient />
    </Suspense>
  )
}
