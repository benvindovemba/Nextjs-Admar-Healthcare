import BlogPageClient from './BlogPageClient'

export const metadata = {
  title: 'Blog e Dicas de Saúde | ADMAR Homecare',
  description: 'Conteúdos sobre saúde geriátrica, bem-estar mental e dicas para melhorar a qualidade de vida dos idosos.',
  alternates: {
    canonical: '/site/blogs',
  },
  robots: 'index, follow',
}

export default function Page() {
  return <BlogPageClient />
}
