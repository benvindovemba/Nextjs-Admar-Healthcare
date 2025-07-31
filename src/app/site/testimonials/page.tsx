'use client'

import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Star, Heart, ThumbsUp } from 'lucide-react'
import { motion } from 'framer-motion'

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
    message: 'Serviço excelente, cuidaram do meu pai com muito carinho e atenção. A equipa é muito humana.',
    stars: 5,
    likes: 12,
    loves: 8,
  },
  {
    id: '2',
    name: 'João Pereira',
    avatarUrl: '/admar/3.png',
    message: 'Profissionais muito competentes, atendimento rápido e empático. Recomendo totalmente.',
    stars: 4,
    likes: 9,
    loves: 6,
  },
  {
    id: '3',
    name: 'Ana Costa',
    avatarUrl: '/admar/4.png',
    message: 'A Admar Homecare foi essencial na recuperação do meu avô. Atendimento impecável.',
    stars: 5,
    likes: 18,
    loves: 14,
  },
  {
    id: '4',
    name: 'Carlos Santos',
    avatarUrl: '/admar/5.png',
    message: 'Muito satisfeita com o serviço. A equipa é muito atenciosa e dedicada.',
    stars: 5,
    likes: 15,
    loves: 10,
  },
  {
    id: '5',
    name: 'Luísa Martins',
    avatarUrl: '/admar/6.png',
    message: 'Excelente serviço, cuidaram da minha mãe com muito carinho. Profissionais de alta qualidade.',
    stars: 5,
    likes: 20,
    loves: 16,
  },
]

const Testimonials = () => {
  return (
    <section className="relative bg-gray-50 py-16 md:py-20">
      <div className="px-4 sm:px-6 md:px-10 lg:px-40">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">O Que Dizem Sobre Nós</h2>
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
  const [clicked, setClicked] = useState<'like' | 'love' | null>(null)

  const handleReaction = (action: 'like' | 'love') => {
    if (action === 'like') setLikes((prev) => prev + 1)
    if (action === 'love') setLoves((prev) => prev + 1)
    setClicked(action)
    setTimeout(() => setClicked(null), 500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-md p-6 h-full flex flex-col justify-between border border-gray-100"
    >
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={testimonial.avatarUrl || '/admar/4.png'}
          alt={testimonial.name}
          width={56}
          height={56}
          className="rounded-full object-cover border-2 border-blue-500 shadow"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
          <div className="flex items-center gap-1 mt-1">
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

      <p className="text-gray-700 text-sm leading-relaxed">{testimonial.message}</p>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
        <motion.button
          onClick={() => handleReaction('like')}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
          animate={clicked === 'like' ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <ThumbsUp className="w-5 h-5" /> {likes}
        </motion.button>

        <motion.button
          onClick={() => handleReaction('love')}
          className="flex items-center gap-1 text-pink-500 hover:text-pink-700 text-sm"
          animate={clicked === 'love' ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <Heart className="w-5 h-5" /> {loves}
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Testimonials
