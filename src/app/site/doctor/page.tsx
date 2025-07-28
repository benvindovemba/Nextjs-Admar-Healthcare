'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import {
  GraduationCap,
  Briefcase,
  Settings2,
  Languages,
  CreditCard,
  MailIcon,
  PhoneIcon,
} from 'lucide-react'

type Doctor = {
  id: string
  name: string
  qualifications: string
  specialty: string
  experienceYears: number
  drivingLicenseNumber: string
  skills: string
  languages: string
  email: string
  phone: string
  photo?: string
}

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dra. Adelina Martins',
    qualifications: 'Médica Especialista em Geriatria, Universidade Agostinho Neto',
    specialty: 'Geriatria',
    experienceYears: 12,
    drivingLicenseNumber: 'DL9234567AO',
    skills: 'Cuidados paliativos, gestão de medicamentos, apoio familiar',
    languages: 'Português, Inglês',
    email: 'adelina@clinica.com',
    phone: '+244 923 000 111',
    photo: '/admar/4.png',
  },
  {
    id: '2',
    name: 'Dra. Angela António',
    qualifications: 'Mestre em Neurologia, Universidade de Coimbra',
    specialty: 'Neurologia',
    experienceYears: 8,
    drivingLicenseNumber: 'DL9345678AO',
    skills: 'Diagnóstico de Alzheimer, reabilitação neurológica',
    languages: 'Português, Espanhol',
    email: 'angela@clinica.com',
    phone: '+244 924 111 222',
    photo: '/admar/4.png',
  },
  {
    id: '3',
    name: 'Dra. Ana Paula',
    qualifications: 'Doutora em Cardiologia, Universidade de Lisboa',
    specialty: 'Cardiologia',
    experienceYears: 15,
    drivingLicenseNumber: 'DL9456789AO',
    skills: 'ECG, avaliação de risco cardíaco, reabilitação pós-infarto',
    languages: 'Português, Francês',
    email: 'ana@clinica.com',
    phone: '+244 925 222 333',
    photo: '/admar/4.png',
  },
]

export default function DoctorPage() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-40 py-16 md:py-20 max-w-screen-xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Nossa Equipa Médica
          </h1>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            Conheça os profissionais que garantem excelência nos cuidados prestados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor) => (
            <article
              key={doctor.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all duration-300"
            >
              <Image
                src={doctor.photo || '/admar/4.png'}
                alt={`Foto de ${doctor.name}`}
                width={120}
                height={120}
                className="rounded-full border-4 border-white shadow-md object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-sm text-gray-600">{doctor.specialty}</p>
              <button
                onClick={() => setSelectedDoctor(doctor)}
                className="mt-3 inline-flex items-center gap-2 bg-blue-800 text-white px-5 py-2 rounded-full hover:bg-blue-900 text-sm font-medium transition"
              >
                Ver Detalhes
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m6-6l-6 6 6 6" />
                </svg>
              </button>
            </article>
          ))}
        </div>

        <AnimatePresence>
          {selectedDoctor && (
            <DoctorModal doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function DoctorModal({ doctor, onClose }: { doctor: Doctor; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg relative"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 text-gray-400 hover:text-red-600 text-2xl"
        >
          &times;
        </button>

        <div className="flex items-center gap-6">
        <div className="w-[150px] h-[150px] relative rounded-full overflow-hidden border-2 border-blue-100 shadow-lg">
          <Image
            src={doctor.photo || '/admar/4.png'}
            alt={`Foto de ${doctor.name}`}
            fill
            className="object-cover"
            loading="lazy"
          />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{doctor.name}</h2>
            <p className="text-gray-600">{doctor.specialty}</p>
          </div>
        </div>

        <div className="mt-6 space-y-3 text-gray-700 text-sm">
          <p className="flex items-start gap-2">
            <Briefcase className="w-4 h-4 text-blue-700 mt-1" />
            <span><strong>Experiência:</strong> {doctor.experienceYears} anos</span>
          </p>
          <p className="flex items-start gap-2">
            <GraduationCap className="w-4 h-4 text-blue-700 mt-1" />
            <span><strong>Qualificações:</strong> {doctor.qualifications}</span>
          </p>
          <p className="flex items-start gap-2">
            <Settings2 className="w-4 h-4 text-blue-700 mt-1" />
            <span><strong>Habilidades:</strong> {doctor.skills}</span>
          </p>
          <p className="flex items-start gap-2">
            <Languages className="w-4 h-4 text-blue-700 mt-1" />
            <span><strong>Idiomas:</strong> {doctor.languages}</span>
          </p>
          <p className="flex items-start gap-2">
            <CreditCard className="w-4 h-4 text-blue-700 mt-1" />
            <span><strong>Carta de Condução:</strong> {doctor.drivingLicenseNumber}</span>
          </p>
          <p className="flex items-start gap-2">
            <MailIcon className="w-4 h-4 text-blue-700 mt-1" />
            <span>{doctor.email}</span>
          </p>
          <p className="flex items-start gap-2">
            <PhoneIcon className="w-4 h-4 text-blue-700 mt-1" />
            <span>{doctor.phone}</span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
