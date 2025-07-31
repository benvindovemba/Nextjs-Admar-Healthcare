'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin,
} from 'react-icons/fa'

// Mock de posts (substitua por fetch do backend futuramente)
const posts = [
  {
    title: 'Como cuidar da saúde mental na terceira idade',
    slug: 'saude-mental-idosos',
    date: '25 Julho 2025',
    image: '/admar/mental.png',
    content: `Promover a saúde mental na terceira idade é essencial para o bem-estar e qualidade de vida. Estimular o convívio social, manter uma rotina ativa e realizar acompanhamento psicológico são medidas eficazes...`,
  },
  {
    title: 'Importância da fisioterapia geriátrica',
    slug: 'fisioterapia-geriatrica',
    date: '22 Julho 2025',
    image: '/admar/terapia.png',
    content: `A fisioterapia geriátrica atua na prevenção e tratamento de doenças relacionadas ao envelhecimento. Ajuda na reabilitação, mobilidade e independência do idoso...`,
  },
  {
    title: 'Dicas de alimentação saudável para idosos',
    slug: 'alimentacao-saudavel-idosos',
    date: '20 Julho 2025',
    image: '/admar/idoso.png',
    content: `Uma alimentação saudável é base para o envelhecimento ativo. Inclua frutas, legumes, proteínas magras e muita água no dia a dia do idoso...`,
  },
]

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<string[]>([])
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    // Carregar comentários salvos (simulado com localStorage)
    const saved = localStorage.getItem(`comments-${slug}`)
    if (saved) setComments(JSON.parse(saved))
  }, [slug])

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.trim()) {
      const updated = [...comments, comment.trim()]
      setComments(updated)
      localStorage.setItem(`comments-${slug}`, JSON.stringify(updated))
      setComment('')
    }
  }

  if (!post) return <div className="text-center py-20">Post não encontrado</div>

  const related = posts.filter(p => p.slug !== slug).slice(0, 2)

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-40 py-16 bg-gray-50">
      <article className="max-w-3xl mx-auto">
        <p className="text-sm text-gray-500 mb-1">{post.date}</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
        <Image src={post.image} alt={post.title} width={800} height={400} className="rounded-lg mb-6" />
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{post.content}</p>

        {/* Compartilhamento */}
        <div className="flex gap-5 mt-10 text-xl text-gray-500">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`} target="_blank"><FaFacebook /></a>
          <a href={`https://wa.me/?text=${currentUrl}`} target="_blank"><FaWhatsapp /></a>
          <a href={`https://twitter.com/intent/tweet?url=${currentUrl}`} target="_blank"><FaTwitter /></a>
          <a href={`https://www.linkedin.com/shareArticle?url=${currentUrl}`} target="_blank"><FaLinkedin /></a>
        </div>

        {/* Comentários */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-4">Comentários</h3>
          <form onSubmit={handleComment} className="space-y-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Escreva seu comentário..."
              className="w-full border p-4 rounded-lg"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Comentar
            </button>
          </form>

          <ul className="mt-6 space-y-3">
            {comments.map((c, i) => (
              <li key={i} className="bg-white p-4 rounded shadow-sm border border-gray-100">{c}</li>
            ))}
          </ul>
        </div>

        {/* Relacionados */}
        <div className="mt-20">
          <h3 className="text-xl font-bold mb-6">Posts Relacionados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map(p => (
              <Link href={`/blog/${p.slug}`} key={p.slug} className="block bg-white border p-4 rounded hover:shadow">
                <p className="text-sm text-gray-500">{p.date}</p>
                <h4 className="text-md font-semibold text-gray-800">{p.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
