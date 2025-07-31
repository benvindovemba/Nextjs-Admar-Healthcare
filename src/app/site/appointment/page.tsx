import { Suspense } from 'react'
import AppointmentClient from './AppointmentClient'
import Loading from './loading'

export default function AppointmentPage() {
  return (
    <Suspense fallback={<Loading />}>
      <AppointmentClient />
    </Suspense>
  )
}