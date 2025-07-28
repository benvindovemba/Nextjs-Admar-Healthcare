import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Explore() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Imagem decorativa posicionada no topo à esquerda */}
      <div className="absolute -top-10 -left-10 w-40 md:w-60 lg:w-72 opacity-20 md:opacity-50 z-0">
        <Image 
          src="/admar/vidas.png"
          alt="Decorativo"
          width={250}
          height={250}
          className="rotate-[-12deg] w-full h-auto"
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-40 py-16 md:py-20">
        {/* Título e descrição */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Explore Our Alowishus
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tenetur ea, minus cumque odit at sunt ipsa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {[
            { title: 'Terapia' },
            { title: 'Massagem' },
            { title: 'Cognitiva' }
          ].map((item, index) => (
            <div
              key={index}
              className="shadow-lg hover:shadow-xl transition-all rounded-xl p-6 bg-white hover:scale-105 cursor-pointer text-center"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">{item.title}</h2>
              <p className="mt-2 text-gray-500 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <div className="my-4">
                <Image 
                  src="/admar/7.png"
                  alt={item.title}
                  width={180}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white text-base font-medium px-6 py-2 rounded-full shadow-lg">
                Agendar Consulta
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Explore
