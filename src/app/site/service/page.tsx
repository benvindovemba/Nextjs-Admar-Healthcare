'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  HeartPulse, Brain, Soup, User, Stethoscope,
  StretchHorizontal, CheckCircle, CircleAlert, X
} from 'lucide-react'
import { useSearchParams } from 'next/navigation'

type Service = {
  id: string
  name: string
  specialty: string
  photo?: string
  description: string
  include: string[]
}

const services: Service[] = [
  {
    id: '1',
    name: 'Cuidados Domiciliares',
    specialty: 'Geriatria',
    photo: '/admar/care.png',
    description: 'Assistência completa no conforto do lar. Oferecemos apoio diário com higiene pessoal, mobilidade, alimentação, medicação e acompanhamento em consultas ou atividades.',
    include: [
      'Higiene e conforto pessoal',
      'Administração de medicamentos',
      'Supervisão 24h (opcional)',
      'Companhia e estímulo cognitivo',
    ],
  },
  {
    id: '2',
    name: 'Acompanhamento Médico',
    specialty: 'Medicina Preventiva',
    photo: '/admar/care.png',
    description: 'Acompanhamento preventivo com check-ups, rastreios e educação para a saúde visando evitar doenças antes que apareçam.',
    include: [
      'Visitas médicas e de enfermagem',
      'Controlo de doenças crónicas (diabetes, hipertensão, etc.)',
      'Verificação de sinais vitais',
      'Curativos e administração de injetáveis',
    ],
  },
  {
    id: '3',
    name: 'Fisioterapia Geriátrica',
    specialty: 'Fisioterapia',
    photo: '/admar/care.png',
    description: 'Tratamentos focados na reabilitação física, prevenção de quedas, alívio de dores e melhoria da mobilidade, sempre adaptados à condição do idoso.',
    include: [
      'Reabilitação pós-cirúrgica ou AVC',
      'Fortalecimento muscular',
      'Exercícios de equilíbrio e alongamento',
      'Terapias respiratórias (se necessário)',
    ],
  },
  {
    id: '4',
    name: 'Apoio Psicológico',
    specialty: 'Psicologia',
    photo: '/admar/care.png',
    description: 'Atendimento psicológico individualizado para idosos e apoio emocional às famílias, promovendo bem-estar, escuta ativa e suporte em momentos delicados.',
    include: [
      'Sessões presenciais ou online',
      'Estímulo emocional e cognitivo',
      'Acompanhamento em casos de depressão, luto, demência',
      'Apoio para cuidadores e familiares',
    ],
  },
  {
    id: '5',
    name: 'Alimentação e Nutrição',
    specialty: 'Nutrição',
    photo: '/admar/care.png',
    description: 'Planos alimentares personalizados, orientados por nutricionistas especializados em saúde do idoso e condições específicas como diabetes ou hipertensão.',
    include: [
      'Avaliação nutricional completa',
      'Planeamento alimentar por fase de vida',
      'Acompanhamento contínuo',
      'Suporte para cuidados domiciliares',
    ],
  },
  {
    id: '6',
    name: 'Higiene e Bem - Estar',
    specialty: 'Cuidador',
    photo: '/admar/care.png',
    description: 'Serviços voltados para conforto e autoestima.',
    include: [
      'Banhos assistidos',
      'Corte de cabelo',
      'Acompanhamento contínuo',
      'Manicure e pedicure, especialmente adaptados para idosos',
    ],
  },
]

const getIconForSpecialty = (specialty: string) => {
  switch (specialty) {
    case 'Geriatria': return <User className="w-5 h-5 text-blue-600" />
    case 'Medicina Preventiva': return <HeartPulse className="w-5 h-5 text-blue-600" />
    case 'Fisioterapia': return <StretchHorizontal className="w-5 h-5 text-blue-600" />
    case 'Psicologia': return <Brain className="w-5 h-5 text-blue-600" />
    case 'Nutrição': return <Soup className="w-5 h-5 text-blue-600" />
    default: return <Stethoscope className="w-5 h-5 text-blue-600" />
  }
}

export default function ServicePage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [showAll, setShowAll] = useState(false)
  const searchParams = useSearchParams()
  const filter = searchParams.get('especialidade') || 'Todos'

  const specialties = ['Todos', ...new Set(services.map((s) => s.specialty))]
  const filteredServices = filter === 'Todos' ? services : services.filter((s) => s.specialty === filter)
  const visibleServices = showAll ? filteredServices : filteredServices.slice(0, 3)

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-40 py-16 md:py-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Nossos Serviços
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Na <strong>ADMAR Homecare</strong>, oferecemos mais do que cuidados — proporcionamos dignidade, conforto e atenção especializada no momento em que mais importa. Com uma equipa dedicada e experiente, levamos carinho e segurança ao lar dos nossos utentes e suas famílias.
        </p>
      </div>

      {/* Cards com animação */}
      <div
        className={`grid gap-10 ${
          visibleServices.length === 1
            ? 'grid-cols-1 justify-center'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {visibleServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all p-8 flex flex-col items-center text-center space-y-5 border border-gray-100"
          >
            <div className="w-[360px] h-[180px] relative overflow-hidden border-2 border-blue-100 shadow-lg rounded-2xl bg-white flex items-center justify-center">
              <Image
                src={service.photo || '/admar/4.png'}
                alt={`Foto de ${service.name}`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-bold text-blue-900">{service.name}</h3>
            <p className="text-sm text-gray-500 italic mb-2">Especialidade:</p>
            <p className="text-base text-gray-600 font-medium flex items-center gap-2 justify-center">
              {getIconForSpecialty(service.specialty)}
              {service.specialty}
            </p>
            <button
              onClick={() => setSelectedService(service)}
              className="mt-2 text-base bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all font-semibold w-full max-w-[220px] flex items-center justify-center gap-2"
            >
              <CircleAlert className="w-5 h-5" />
              Mais Detalhes
            </button>
          </motion.div>
        ))}
      </div>

      {/* Botão Ver Todos */}
      {filteredServices.length > 3 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 hover:text-blue-800 font-semibold transition"
          >
            {showAll ? 'Ver Menos' : 'Ver Todos os Serviços'}
          </button>
        </div>
      )}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-6 relative space-y-5"
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl"
              aria-label="Fechar detalhes do serviço"
              autoFocus
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-[150px] h-[150px] relative rounded-2xl overflow-hidden border-2 border-blue-100 shadow-lg">
                <Image
                  src={selectedService.photo || '/admar/4.png'}
                  alt={`Foto de ${selectedService.name}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 space-y-2">
                <h2 className="text-2xl font-bold text-blue-800">{selectedService.name}</h2>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  {getIconForSpecialty(selectedService.specialty)}
                  {selectedService.specialty}
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  {selectedService.description}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-blue-700 mt-6 mb-2">O que está incluído:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.include.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle className="text-green-600 w-4 h-4 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 text-right">
              <a
                href={`/agendar?especialista=${encodeURIComponent(selectedService.name)}`}
                className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm px-5 py-2 rounded-full transition"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {/* Chamada para ação */}
      <div className="mt-20 bg-blue-50 rounded-3xl p-10 text-center shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
          Não sabe por onde começar?
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Entre em contacto connosco — ajudamos a identificar os serviços ideais para o seu familiar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/site/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Fale Connosco
          </a>
          <a
            href="/site/appointment"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Agendar Avaliação Gratuita
          </a>
        </div>
      </div>
    </section>
  )
}
