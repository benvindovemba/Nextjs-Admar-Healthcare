'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import Image from 'next/image'
import { Star } from 'lucide-react'

const Testimonials = () => {
  return (
    <section className="items-center px-4 md:px-16 lg:px-24 md:py-20">
      <div>
        <div className="grid grid-cols-6 text-center md:py-10">
          <div className="col-start-1 md:col-start-2 col-span-6 md:col-span-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Testemunho do Cliente
            </h1>
            <p className="py-4 text-gray-500 text-md md:text-lg w-full md:w-2/4 mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-x-6">
              <div className="hidden sm:block -space-x-2 overflow-hidden">
                {[
                  'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc',
                  'https://images.unsplash.com/photo-1550525811-e5869dd03032',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
                  'https://images.unsplash.com/photo-1550525811-e5869dd03032'
                ].map((src, i) => (
                  <img
                    key={i}
                    className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                    src={`${src}?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                    alt=""
                  />
                ))}
              </div>

              <div className="sm:border-l-2 border-black sm:pl-8 mt-4 sm:mt-0 text-center sm:text-left">
                <div className="flex justify-center sm:justify-start items-center">
                  <h3 className="text-2xl font-semibold mr-2">4.6</h3>
                  <Star width={20} className="text-yellow-400" />
                </div>
                <h3 className="text-sm text-gray-500">Rated by 25k on Google</h3>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-md bg-white dark:bg-gray-800 shadow-md duration-500 md:m-7 hover:scale-105 transition-all cursor-pointer">
                <div className="bg-blue-400">
                  <Image
                    src="/admar/7.png"
                    alt="Depoimento"
                    width={250}
                    height={250}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      Sobre o Atendimento
                    </h1>
                    <div className="flex gap-1 px-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} width={20} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-500 text-md pt-5">
                    A Admar Homecare oferece atendimentos médicos rápidos e eficientes,
                    garantindo que você receba o cuidado necessário sem complicações.
                    Nossa equipe está pronta para atender às suas necessidades de saúde com
                    agilidade e profissionalismo.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
