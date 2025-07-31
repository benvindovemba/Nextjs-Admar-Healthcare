'use client'

import { Button } from '@/components/ui/Button'
import React, { useState } from 'react'
import {
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaUserMd,
  FaEnvelope,
  FaPhoneAlt,
  FaBirthdayCake,
  FaUserGraduate,
  FaBriefcase
} from 'react-icons/fa'
import { IoChatbubbles } from 'react-icons/io5'
import { BsWhatsapp } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'
import { Dialog } from '@headlessui/react'

interface ServiceCardProps {
  img: string
  name: string
  position: string
  birthDate?: string
  universityDegree?: string
  specialty?: string
  experienceYears?: number
  email?: string
  phone?: string
  whatsapp?: string
  facebook?: string
  instagram?: string
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    
      {/* CARD */}
      <div
        onClick={() => setIsOpen(true)}
        className="w-full rounded-xl overflow-hidden border shadow-sm cursor-pointer hover:shadow-lg transition"
      >
        <div className="w-full aspect-square relative">
          <img
            src={props.img}
            alt={`Imagem de ${props.name}`}
            className="w-full aspect-square object-cover object-top rounded-xl"
            loading="lazy"
          />
          <div className="absolute top-0 right-0 p-4 flex flex-col gap-2 items-end bg-gradient-to-r from-transparent to-black/30 rounded-xl">
            <Button className="w-9 h-9 rounded-full bg-white/30 hover:bg-white/40 text-white text-xl">
              <FaPhone />
            </Button>
            <Button className="w-9 h-9 rounded-full bg-white/30 hover:bg-white/40 text-white text-xl">
              <IoChatbubbles />
            </Button>
          </div>
        </div>

        <div className="space-y-2 px-4 py-4 text-left">
          <div className="flex items-center gap-2 text-neutral-800 font-semibold text-lg">
            <FaUserMd className="text-blue-600" />
            {props.name}
          </div>

          <div className="flex items-center gap-2 text-neutral-600 text-sm">
            <MdWork className="text-purple-500" />
            {props.position}
          </div>

          {props.phone && (
            <div className="flex items-center gap-2 text-neutral-600 text-sm">
              <FaPhoneAlt className="text-green-600" />
              {props.phone}
            </div>
          )}

          {props.email && (
            <div className="flex items-center gap-2 text-neutral-600 text-sm">
              <FaEnvelope className="text-red-500" />
              {props.email}
            </div>
          )}
        </div>
      </div>

      {/* MODAL */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto w-full max-w-md rounded-xl bg-white p-6 space-y-4 shadow-xl overflow-y-auto max-h-[90vh]">
            <Dialog.Title className="text-2xl font-bold text-neutral-800">
              {props.name}
            </Dialog.Title>

            <img src={props.img} alt="Doctor" className="w-full h-60 object-cover rounded-md" />

            <div className="space-y-2 text-sm text-neutral-700 leading-6">
              <p className="flex items-center gap-2">
                <MdWork className="text-purple-500" />
                <strong>Posição:</strong> {props.position}
              </p>
              {props.specialty && (
                <p className="flex items-center gap-2">
                  <FaUserMd className="text-indigo-500" />
                  <strong>Especialidade:</strong> {props.specialty}
                </p>
              )}
              {props.universityDegree && (
                <p className="flex items-center gap-2">
                  <FaUserGraduate className="text-green-600" />
                  <strong>Grau Universitário:</strong> {props.universityDegree}
                </p>
              )}
              {props.birthDate && (
                <p className="flex items-center gap-2">
                  <FaBirthdayCake className="text-pink-500" />
                  <strong>Data de Nascimento:</strong> {props.birthDate}
                </p>
              )}
              {props.experienceYears !== undefined && (
                <p className="flex items-center gap-2">
                  <FaBriefcase className="text-yellow-600" />
                  <strong>Experiência:</strong> {props.experienceYears} anos
                </p>
              )}
              {props.email && (
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-red-500" />
                  <strong>Email:</strong> {props.email}
                </p>
              )}
              {props.phone && (
                <p className="flex items-center gap-2">
                  <FaPhoneAlt className="text-teal-600" />
                  <strong>Telefone:</strong> {props.phone}
                </p>
              )}
            </div>

            {/* Redes sociais */}
            <div className="flex items-center gap-4 mt-4">
              {props.whatsapp && (
                <a
                  href={`https://wa.me/${props.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Whatsapp"
                >
                  <BsWhatsapp className="text-green-600 w-6 h-6 hover:scale-110 transition" />
                </a>
              )}
              {props.facebook && (
                <a
                  href={props.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-blue-600 w-6 h-6 hover:scale-110 transition" />
                </a>
              )}
              {props.instagram && (
                <a
                  href={props.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-pink-500 w-6 h-6 hover:scale-110 transition" />
                </a>
              )}
            </div>

            {/* Agendar consulta */}
            <div className="pt-4 flex justify-between items-center">
              <a
                href={`/agendar?especialista=${encodeURIComponent(props.name)}`}
                className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm px-5 py-2 rounded-full transition font-semibold"
              >
                Agendar Consulta
              </a>

              <Button onClick={() => setIsOpen(false)} variant="ghost">
                Fechar
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}

export default ServiceCard
