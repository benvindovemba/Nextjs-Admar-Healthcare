'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import clsx from 'clsx'

const categories = ['Todas', 'Atividades', 'Espaços', 'Equipa'] as const

const images = [
  {
    src: '/admar/encontro.png',
    title: 'Encontro Intergeracional',
    description: 'Atividade com crianças e idosos para fortalecer vínculos afetivos.',
    category: 'Atividades'
  },
  {
    src: '/admar/fisio.png',
    title: 'Fisioterapia Funcional',
    description: 'Sessão com profissionais especializados em mobilidade e equilíbrio.',
    category: 'Atividades'
  },
  {
    src: '/admar/music.png',
    title: 'Tarde Musical',
    description: 'Momentos de música ao vivo e descontração com os utentes.',
    category: 'Atividades'
  },
  {
    src: '/admar/festa.png',
    title: 'Espaço de Convívio',
    description: 'Área comum onde os utentes socializam e partilham histórias.',
    category: 'Espaços'
  },
  {
    src: '/admar/geriatra.png',
    title: 'Equipa de Geriatria',
    description: 'Profissionais dedicados ao cuidado e bem-estar contínuo dos residentes.',
    category: 'Equipa'
  },
  {
    src: '/admar/pintura.png',
    title: 'Oficina de Pintura',
    description: 'Atividade terapêutica de expressão artística com orientação técnica.',
    category: 'Atividades'
  }
]

type Category = typeof categories[number]

export default function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState<Category>('Todas')

  const filteredImages =
    activeCategory === 'Todas'
      ? images
      : images.filter((img) => img.category === activeCategory)

  return (
    <>
      <section className='relative bg-gray-50 overflow-hidden'>
        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-40 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Nossa Galeria
            </h1>
            <p className="mt-6 text-gray-600 text-base sm:text-lg">
              Veja momentos especiais, atividades, espaços e o carinho da nossa equipa com os utentes.
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  'px-4 py-2 rounded-full text-sm font-medium border transition',
                  activeCategory === cat
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'text-gray-600 border-gray-300 hover:border-blue-500 hover:text-blue-600'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation]}
            className="rounded-xl"
          >
            {filteredImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full aspect-video group-hover:scale-105 group-hover:brightness-90 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full relative">
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="rounded-xl shadow-2xl mx-auto max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-center text-white space-y-1">
              <h2 className="text-xl font-semibold">{selectedImage.title}</h2>
              <p className="text-sm text-white/90">{selectedImage.description}</p>
              <p className="text-xs text-white/60 mt-1">Clique fora da imagem para fechar</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}