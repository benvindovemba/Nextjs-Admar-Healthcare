import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const InstantCare = () => {
  return (
    <section className="bg-white text-gray-900 py-12 sm:py-16 lg:py-24 px-4 sm:px-8 md:px-16 lg:px-24 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* Imagens */}
          <div className="relative flex justify-center items-center" 
          data-aos='fade-up' data-aos-duration='1600' data-aos-easing='ease-in-out-back'>
            <Image
              src="/admar/Red.png"
              alt="Fundo decorativo"
              width={500}
              height={500}
              className="hidden md:block z-0 rotate-45"
            />
            <Image
              src="/admar/Red.png"
              alt="Fundo decorativo"
              width={500}
              height={500}
              className="hidden md:block absolute z-0"
            />
            <div className="relative md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-20">
              <Image
                src="/admar/4.png"
                alt="Profissional de saúde"
                width={300}
                height={300}
                className="rounded-2xl max-w-[80%] sm:max-w-[60%] md:max-w-full"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="text-center md:text-left" 
          data-aos='fade-down' data-aos-duration='1600' data-aos-easing='ease-in-out-back'>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
              Atendimento <span className="text-blue-500">Médico <br className="hidden sm:block" /> Rápido</span> e Eficiente
            </h2>
            <p className="text-gray-600 mb-6">
              A Admar Homecare oferece atendimentos médicos rápidos e eficientes,
              garantindo que você receba o cuidado necessário sem complicações.
              Nossa equipe está pronta para atender às suas necessidades de saúde com agilidade e profissionalismo.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base">
              Agendar Consulta
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default InstantCare
