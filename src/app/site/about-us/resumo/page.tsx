'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const SobreResumo = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Imagem ilustrativa */}
        <motion.div 
          className="flex-1 max-w-sm mx-auto md:mx-0 order-1"
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/admar/3.png"
            alt="Cuidados a idosos"
            width={400}
            height={300}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Texto */}
        <motion.div 
          className="text-center md:text-left flex-1 order-2"
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-40 py-16 md:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Sobre A ADMAR Healthcare Professional
            </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Especializados em cuidados domiciliares geriátricos, oferecemos atenção profissional, humanizada e segura no conforto do lar. Nossa missão é garantir qualidade de vida e bem-estar com empatia e excelência.
          </p>
        
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a 
              href="/site/about-us"
              className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
            >
              Conheça Nossa História
            </a>
            </div>
            {/* <a
              href="/avaliacao"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition"
            >
              Agendar Avaliação
            </a> */}
          </div>
        </motion.div>
        </div>
    </section>
  )
}

export default SobreResumo
