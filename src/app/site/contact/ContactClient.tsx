'use client'

import React from 'react'
import { sendContactMessage } from './action'
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter,
  FaBehance, FaEnvelope, FaWhatsapp, FaMapMarkerAlt
} from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi' // Substituto elegante do ícone de telefone
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  const [state, formAction] = React.useActionState(sendContactMessage, null)

  return (
    <div className=" bg-gray-50 overflow-hidden">
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-40 py-16 md:py-20">
      {/* Cabeçalho */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">Entre em Contacto</h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Estamos disponíveis para esclarecer qualquer dúvida. Envie sua mensagem e retornaremos o mais breve possível.
        </p>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white rounded-2xl p-10 shadow-md border border-gray-100">
        {/* Formulário */}
        <div>
          <h2 className="text-lg font-semibold mb-6 text-blue-700 uppercase tracking-widest">Formulário de Contacto</h2>
          <form action={formAction} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Nome completo"
              required
              className="w-full bg-gray-100 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              className="w-full bg-gray-100 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Assunto"
              required
              className="w-full bg-gray-100 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Escreva sua mensagem..."
              required
              className="w-full bg-gray-100 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              type="submit" variant='custom'
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium rounded-lg transition uppercase tracking-wide"
            >
              Enviar Mensagem
            </Button>
            {state?.success && <p className="text-green-600 text-sm">{state.message}</p>}
            {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
          </form>
        </div>

        {/* Informações de contacto */}
        <div className="space-y-8 text-gray-700">
          <div>
            <h3 className="font-medium flex items-center gap-2 text-gray-900 text-lg">
              <FaMapMarkerAlt className="text-blue-500" /> Endereço
            </h3>
            <p className="text-gray-600">Rua Rainha Ginga</p>
            <p className="text-gray-600">Luanda - Angola</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-medium flex items-center gap-2 text-gray-900 text-lg">
              <FaEnvelope className="text-blue-500" /> E-mail
            </h3>
            <p className="text-gray-600">contacto@admar.com</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-medium flex items-center gap-2 text-gray-900 text-lg">
              <FiPhone className="text-blue-500" /> Telefone
            </h3>
            <p className="text-gray-600">(+244) 923 000 003</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-medium text-gray-900 text-lg">Redes Sociais</h3>
            <div className="flex gap-5 mt-3 text-xl text-gray-500">
              <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
              <a href="#" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-blue-500 transition"><FaBehance /></a>
              <a href="#" className="hover:text-green-500 transition"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
