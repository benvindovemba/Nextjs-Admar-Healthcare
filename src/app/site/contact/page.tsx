// /site/contact/page.tsx
import ContactPage from './ContactClient'

export const metadata = {
  title: 'Entre em Contacto | ADMAR Homecare',
  description: 'Fale connosco para saber mais sobre os nossos serviços de cuidados ao domicílio em Angola.',
  robots: 'index, follow',
  alternates: {
    canonical: '/site/contact',
  },
}

export default function Page() {
  return <ContactPage />
}
