'use client'

import { doctors } from '@/lib/doctors'
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const AboutUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section id="about-us" className="relative bg-gray-50 overflow-hidden">
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-40 py-16 md:py-20">
      {/* Título e descrição */}
      <div className="text-center max-w-3xl md:max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800" data-aos="fade-right">
          Sobre Nós
        </h1>
        <div className="w-24 h-0.5 bg-blue-500 mx-auto mb-8 opacity-40" data-aos="fade-left" data-aos-duration="3000" />
        <p className="mt-4 text-gray-600 text-base sm:text-lg" data-aos="fade-up">
          A <strong><span className='text-blue-800'>ADMAR Healthcare Professional</span></strong> é especializada em cuidados domiciliares a idosos,
          oferecendo serviços de saúde de qualidade no conforto do lar. Nossa missão é garantir
          bem-estar e qualidade de vida com atendimento personalizado e profissional.
        </p>
        <p className="mt-4 text-gray-600 text-base sm:text-lg" data-aos="fade-up">
          Contamos com uma equipe altamente qualificada e comprometida em prestar um atendimento
          humanizado, com segurança e empatia.
        </p>
      </div>

      {/* Missão, Visão e Valores com cards */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 mb-16">
  {[
    {
      title: 'Missão',
      text: 'Proporcionar cuidados geriátricos de excelência com responsabilidade, ética e afeto, promovendo qualidade de vida e bem-estar para idosos e suas famílias.',
      img: '/admar/missao.png',
      bg: 'bg-blue-50'
    },
    {
      title: 'Visão',
      text: 'Ser referência nacional em cuidados humanizados para a terceira idade, com inovação, profissionalismo e empatia.',
      img: '/admar/visao.png',
      bg: 'bg-green-50'
    },
    {
      title: 'Valores',
      text: [
        'Respeito à dignidade humana',
        'Cuidado humanizado',
        'Ética e responsabilidade',
        'Empatia com o utente e família',
        'Profissionalismo e excelência',
      ],
      img: '/admar/valores.png',
      bg: 'bg-yellow-50'
    }
  ].map((item, index) => (
    <div
      key={index}
      className={`${item.bg} rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="w-40 h-28 mx-auto mb-4">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
      {Array.isArray(item.text) ? (
  <ul className="text-gray-700 list-disc list-inside space-y-1 text-left">
    {item.text.map((line, idx) => (
      <li key={idx}>{line}</li>
    ))}
  </ul>
) : (
  <p className="text-gray-700 text-left">{item.text}</p>
)}
    </div>
  ))}
</div>


      {/* História */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Nossa História
        </h2>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Fundada com o propósito de atender à crescente demanda por cuidados geriátricos humanizados em Angola,
          a ADMAR Homecare surgiu da união de profissionais da saúde experientes e apaixonados por cuidar.
          Com uma trajetória marcada pelo carinho, inovação e excelência, já transformamos a vida de dezenas de famílias.
        </p>
      </div>

      {/* Equipa */}
<div className="max-w-6xl mx-auto mb-24">
  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
    Nossa Equipa
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {doctors.map((member, index) => (
      <div
        key={index}
        className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <div className="relative w-28 h-28 mx-auto mb-4">
          <img
            src={member.photo || '/admar/4.png'}
            alt={member.name}
            className="rounded-full w-full h-full object-cover border-2 border-blue-100 group-hover:border-blue-400 transition duration-300"
          />
        </div>
        <h3 className="text-xl font-semibold text-blue-800 group-hover:text-blue-600 transition duration-300">
          {member.name}
        </h3>
        <p className="text-sm text-gray-600 italic">{member.specialty}</p>
        <div className="mt-4 h-0.5 w-10 bg-blue-500 mx-auto group-hover:w-16 transition-all duration-300" />
      </div>
    ))}
  </div>
</div>


      {/* Estatísticas */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center max-w-6xl mx-auto mt-8 text-gray-800"
      >
        {[{ number: 127, title: 'Cuidado Humanizado' }, { number: 24, suffix: 'h', title: 'Disponibilidade' }, { number: 100, suffix: '%', title: 'Atendimento Personalizado' }, { number: doctors.length, prefix: '+', title: 'Profissionais Qualificados' }].map((item, idx) => (
          <div key={idx}>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-1 text-blue-700">
              {inView ? (
                <CountUp end={item.number} duration={2} suffix={item.suffix || ''} prefix={item.prefix || ''} />
              ) : (
                '0'
              )}
            </h3>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-600">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <div className="bg-white py-6 px-6 rounded-xl shadow-xl max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-blue-800">Não sabe por onde começar?</h2>
          <p className="text-sm text-gray-600 mb-4">Entre em contacto connosco — ajudamos a identificar os serviços ideais para o seu familiar.</p>
          <div className="flex justify-center gap-4">
            <a href="/site/contact">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition">Fale Conosco</button>
            </a>
            <a href="/site/appointment">
              <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full text-sm hover:bg-blue-100 transition">Agendar Avaliação Gratuita</button>
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default AboutUs
