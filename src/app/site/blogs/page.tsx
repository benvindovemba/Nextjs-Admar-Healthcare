'use client'

import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    title: 'Como cuidar da saúde mental na terceira idade',
    excerpt: 'Descubra estratégias práticas e acessíveis para promover bem-estar emocional em idosos...',
    slug: 'saude-mental-idosos',
    date: '25 Julho 2025',
    image: '/admar/mental.png'
  },
  {
    title: 'Importância da fisioterapia geriátrica',
    excerpt: 'Veja como a fisioterapia pode melhorar mobilidade, prevenir quedas e trazer autonomia...',
    slug: 'fisioterapia-geriatrica',
    date: '22 Julho 2025',
    image: '/admar/terapia.png'
  },
  {
    title: 'Dicas de alimentação saudável para idosos',
    excerpt: 'Saiba quais alimentos são mais indicados e como montar refeições equilibradas...',
    slug: 'alimentacao-saudavel-idosos',
    date: '20 Julho 2025',
    image: '/admar/idoso.png'
  }
]

export default function BlogPage() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-40 py-16 md:py-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Blog & Dicas
        </h1>
    </div>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <article
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="relative h-52 sm:h-56 md:h-60">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-gray-500 mb-2">{post.date}</p>
              <h2 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Ler mais →
              </Link>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  )
}
