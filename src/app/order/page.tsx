import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Order = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 md:px-10 lg:px-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Imagem */}
          <div className="flex justify-center">
            <Image 
              src="/admar/4.png"
              alt="Alowishus"
              width={500}
              height={400}
              className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto mx-auto"
            />
          </div>

          {/* Texto */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Sobre Our Alowishus
            </h1>
            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Ipsa alias quaerat beatae blanditiis, perspiciatis dolore modi nesciunt aut minima, 
              sed, ratione quia ullam eaque unde.
            </p>
            <Button className="mt-6 bg-blue-500 hover:bg-blue-700 text-lg font-medium text-white px-6 py-3 rounded-full shadow-md">
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
