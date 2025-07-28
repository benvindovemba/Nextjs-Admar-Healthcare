'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Star, Heart, ThumbsUp } from 'lucide-react'

type Testimonial = {
  id: string
  name: string
  avatarUrl?: string
  message: string
  stars: number
  likes: number
  loves: number
}

const testimonialsStatic: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    avatarUrl: '/admar/2.png',
    message:
      'Serviço excelente, cuidaram do meu pai com muito carinho e atenção. A equipa é muito humana.',
    stars: 5,
    likes: 12,
    loves: 8,
  },
  {
    id: '2',
    name: 'João Pereira',
    avatarUrl: '/admar/3.png',
    message:
      'Profissionais muito competentes, atendimento rápido e empático. Recomendo totalmente.',
    stars: 4,
    likes: 9,
    loves: 6,
  },
  {
    id: '3',
    name: 'Ana Costa',
    avatarUrl: '/admar/4.png',
    message:
      'A Admar Homecare foi essencial na recuperação do meu avô. Atendimento impecável.',
    stars: 5,
    likes: 18,
    loves: 14,
  },
  {
    id: '4',
    name: 'Carlos Santos',
    avatarUrl: '/admar/5.png',
    message:
      'Muito satisfeita com o serviço. A equipa é muito atenciosa e dedicada.',
    stars: 5,
    likes: 15,
    loves: 10,
  },
  {
    id: '5',
    name: 'Luísa Martins',
    avatarUrl: '/admar/6.png',
    message:
      'Excelente serviço, cuidaram da minha mãe com muito carinho. Profissionais de alta qualidade.',
    stars: 5,
    likes: 20,
    loves: 16,
  },
]

const Testimonials = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-40 py-16 md:py-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          O Que Dizem Sobre Nós
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Testemunhos reais de clientes satisfeitos com nossos serviços de saúde e cuidado domiciliar.
        </p>
      </div>

      <Swiper
        spaceBetween={40}
        freeMode
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonialsStatic.map((t) => (
          <SwiperSlide key={t.id}>
            <TestimonialCard testimonial={t} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  )
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const [likes, setLikes] = useState(testimonial.likes)
  const [loves, setLoves] = useState(testimonial.loves)

  const handleReaction = (action: 'like' | 'love') => {
    if (action === 'like') setLikes((prev) => prev + 1)
    if (action === 'love') setLoves((prev) => prev + 1)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full border border-gray-100 dark:border-gray-700">
      <div className="flex items-center mb-5">
        <img
          src={testimonial.avatarUrl || '/admar/4.png'}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full shadow-md object-cover border-2 border-blue-500"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h2>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        {testimonial.message}
      </p>

      <div className="flex items-center justify-between mt-6 border-t pt-4 border-gray-200 dark:border-gray-700">
        <button
          onClick={() => handleReaction('like')}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 text-sm gap-1"
        >
          <ThumbsUp className="w-5 h-5" /> {likes}
        </button>
        <button
          onClick={() => handleReaction('love')}
          className="flex items-center text-pink-500 hover:text-pink-700 text-sm gap-1"
        >
          <Heart className="w-5 h-5" /> {loves}
        </button>
      </div>
    </div>
  )
}

export default Testimonials
