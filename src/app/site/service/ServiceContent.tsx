'use client'

import { useSearchParams } from 'next/navigation'
import ServicePage from './ServicePage'

export default function ServiceContent() {
  const searchParams = useSearchParams()
  const rawFilter = searchParams.get('especialidade') || 'Todos'
  const filter = decodeURIComponent(rawFilter.trim().replace(/,$/, ''))

  return <ServicePage filter={filter} />
}
