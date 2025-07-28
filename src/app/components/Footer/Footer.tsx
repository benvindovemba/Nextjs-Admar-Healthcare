import React from 'react'
import Image from 'next/image'
import { FaTiktok, FaWhatsapp } from 'react-icons/fa'
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Phone,
  Mail,
  Globe,
  MapPin,
  // Road, // Removed because 'Road' does not exist in 'lucide-react'
  Inbox
} from 'lucide-react'

const Footer = () => {
  return (
    <>
      <section className='relative bg-gray-50 overflow-hidden'>
        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-40 py-16 md:py-20">
          <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 grid sm:grid-cols-2 gap-8 mx-auto">
            
            {/* Logo + Navegação + Redes sociais */}
            <div className="p-5" data-aos="fade-right" data-aos-duration="3000">
              <Image
                alt="Logo da Admar Homecare"
                src="/admar/logo.png"
                width={120}
                height={45}
              />

              <div className="flex text-gray-500 uppercase text-sm gap-1 pt-2 flex-wrap" data-aos="fade-right" data-aos-duration="3000">
                <a href="/" className="mr-2 hover:text-gray-900">Home</a>
                <a href="/site/about-us" className="mr-2 hover:text-gray-900">Sobre nós</a>
                <a href="/site/service" className="mr-2 hover:text-gray-900">Serviços</a>
              </div>

              <div className="flex items-center gap-3 mt-4 text-gray-600 flex-wrap" data-aos="fade-right" data-aos-duration="3000">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2]">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4405F]">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a href="https://wa.me/244912345678" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366]">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2]">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077B5]">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000]">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contacto + Newsletter */}
            <div className="p-5" data-aos="fade-left" data-aos-duration="3000">
              <h3 className="font-medium text-lg text-gray-900 mb-4">Contacto</h3>
              <div className="text-sm text-gray-700 space-y-1">

                {/* Linha combinada: Telefone, País, Cidade */}
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1 group">
                    <Phone className="w-4 h-4 text-gray-600 group-hover:text-blue-500 transition-colors" />
                    <span>+244 912 345 678</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="w-4 h-4 text-gray-600" />
                    <span>Angola</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <span>Luanda</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-600" />
                  <span>Rua do xxxx, nº 123</span>
                </div>
                <div className="flex items-center gap-1">
                  <Inbox className="w-4 h-4 text-gray-600" />
                  <span>Caixa Postal 4567</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <Mail className="w-4 h-4 text-gray-600 group-hover:text-blue-500 transition-colors" />
                  <span>info@admarhomecare.com</span>
                </div>
              </div>

              <h3 className="font-medium text-lg text-gray-900 mt-6 mb-4">
                Subscribe to our Newsletter
              </h3>
              <form className="mt-2">
                <input
                  className="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="username@email.com"
                />
              </form>
            </div>
          </div>

          <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
            <p>
              © Copyright 2025 ADMAR - Homecare. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
