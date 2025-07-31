import { Suspense } from 'react'
import ServiceContent from './ServiceContent'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Serviços | ADMAR Homecare',
  description: 'Veja os serviços disponíveis da ADMAR: cuidados domiciliares, fisioterapia, nutrição e mais.',
}


export default function Page() {
  return (
    <Suspense 
      fallback={
        <div className="py-20 text-center text-blue-700 font-medium animate-pulse">
          Carregando serviços...
        </div>}>
      <ServiceContent />
    </Suspense>
  )
}
