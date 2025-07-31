import DoctorPageClient from './DoctorPageClient'

export const metadata = {
  title: 'Nossa Equipa Médica | ADMAR Homecare',
  description: 'Conheça os médicos especializados da ADMAR Homecare. Profissionais com experiência em geriatria, cardiologia, neurologia e mais.',
  alternates: {
    canonical: '/site/doctor',
  },
  robots: 'index, follow',
}

export default function Page() {
  return <DoctorPageClient />
}
