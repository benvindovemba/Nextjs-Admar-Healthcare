import { Metadata } from 'next'
import GalleryClientWrapper from './ClientWrapper'

export const metadata: Metadata = {
  title: 'Galeria | ADMAR Homecare',
  description: 'Veja os melhores momentos com nossos utentes, eventos e atividades na galeria da ADMAR Homecare.',
  keywords: ['Galeria ADMAR', 'Cuidados Domiciliares', 'Idosos', 'Fotos', 'Serviços', 'Atividades'],
  openGraph: {
    title: 'Galeria | ADMAR Homecare',
    description: 'Explore momentos especiais capturados nas atividades da ADMAR Homecare.',
    url: 'https://www.admar.com/site/gallery',
    siteName: 'ADMAR Homecare',
    images: [
      {
        url: 'https://www.admar.com/images/og-gallery.jpg',
        width: 1200,
        height: 630,
        alt: 'Galeria de fotos da ADMAR Homecare',
      },
    ],
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galeria | ADMAR Homecare',
    description: 'Veja os melhores momentos da nossa equipa e utentes.',
    images: ['https://www.admar.com/images/og-gallery.jpg'],
  },
}

export default function GalleryPage() {
  return <GalleryClientWrapper />
}
