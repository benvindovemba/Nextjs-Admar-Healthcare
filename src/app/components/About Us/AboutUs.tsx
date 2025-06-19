'use client'

import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const AboutUs = () => {
  // Hook para verificar visibilidade
  const { ref, inView } = useInView({
    triggerOnce: true, // ativa só uma vez
    threshold: 0.3, // quando 30% estiver visível
  })

  return (
    <section
      id="about-us"
      className="bg-blue-400 text-gray-900 py-12 sm:py-16 lg:py-24 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Título e Descrição */}
      <div className="text-center max-w-3xl md:max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" data-aos="fade-right">
          Sobre Nós
        </h1>

        <div className="w-20 sm:w-24 h-0.5 bg-white mx-auto mb-6 sm:mb-8 opacity-40" data-aos="fade-left" data-aos-duration="3000" />

        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed" data-aos="fade-up" data-aos-duration="3000">
          A <strong>ADMAR Homecare</strong> é especializada em cuidados domiciliares a idosos,
          oferecendo serviços de saúde de qualidade no conforto do lar. Nossa missão é garantir
          bem-estar e qualidade de vida com atendimento personalizado e profissional.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mt-3 sm:mt-4" data-aos="fade-up" data-aos-duration="3000">
          Contamos com uma equipe altamente qualificada e comprometida em prestar um atendimento
          humanizado, com segurança e empatia.
        </p>
      </div>

      {/* Cards estilo estatística */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center max-w-6xl mx-auto mt-8 sm:mt-10"
      >
        {[
          {
            number: 127,
            suffix: '',
            title: 'Cuidado Humanizado',
          },
          {
            number: 24,
            suffix: 'h',
            title: 'Disponibilidade',
          },
          {
            number: 100,
            suffix: '%',
            title: 'Atendimento Personalizado',
          },
          {
            number: 50,
            prefix: '+',
            title: 'Profissionais Qualificados',
          },
        ].map((item, idx) => (
          <div key={idx}>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-1" data-aos="fade-right">
              {inView ? (
                <CountUp
                  end={item.number}
                  duration={2}
                  suffix={item.suffix || ''}
                  prefix={item.prefix || ''}
                />
              ) : (
                '0'
              )}
            </h3>
            <p
              className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-white/90"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Chamada para ação */}
      <div className="text-center mt-12 sm:mt-16" data-aos="fade-right">
        <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2" data-aos="fade-right">Quer saber mais?</h2>
        <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4" data-aos="fade-left" data-aos-duration="3000">
          Entre em contato conosco e descubra como podemos cuidar de quem você ama.
        </p>
        <a href="/contatofooter">
          <button className="bg-white hover:bg-white/90 text-blue-600 py-2 px-5 sm:px-6 rounded-full text-xs sm:text-sm font-medium transition duration-300">
            Fale Conosco
          </button>
        </a>
      </div>
    </section>
  )
}

export default AboutUs
