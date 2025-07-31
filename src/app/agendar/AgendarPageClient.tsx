'use client'

import { useSearchParams } from 'next/navigation'
import Appointment from '../site/appointment/AppointmentClient'

const AgendarPageClient = () => {
  const searchParams = useSearchParams()
  const especialista = searchParams.get('especialista')

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Agendar Consulta</h1>
      {especialista && (
        <p className="text-center text-gray-600 mt-2">
          Serviço selecionado: <strong>{especialista}</strong>
        </p>
      )}
      <div className="mt-10">
        <Appointment />
      </div>
    </div>
  )
}

export default AgendarPageClient
