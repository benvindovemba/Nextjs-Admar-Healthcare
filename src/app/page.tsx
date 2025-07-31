import { Metadata } from 'next'
import DynamicHomeClient from './DynamicHomeClient'

export const metadata: Metadata = {
  title: 'ADMAR | Cuidados Domiciliares de Excelência',
  description: 'Serviços de saúde e apoio domiciliar para idosos com profissionais qualificados e atenção humanizada.',
  openGraph: {
    title: 'ADMAR Homecare',
    description: 'Conheça nossos serviços personalizados para cuidados de idosos no conforto do lar.',
    url: 'https://seudominio.com',
    siteName: 'ADMAR Homecare',
    images: [
      {
        url: 'https://seudominio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ADMAR Homecare',
      },
    ],
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADMAR Homecare',
    description: 'Cuidamos com carinho no conforto da sua casa.',
    images: ['https://seudominio.com/og-image.png'],
  },
}

export default function Home() {
  return <DynamicHomeClient />
}