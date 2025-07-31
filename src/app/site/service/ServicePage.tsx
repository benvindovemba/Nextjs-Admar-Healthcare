import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import {
  HeartPulse, Brain, Soup, User, Stethoscope,
  StretchHorizontal, CheckCircle, CircleAlert, X
} from 'lucide-react'
import ModalPortal from '@/app/components/ModalPortal'

type Service = {
  id: string
  name: string
  specialty: string
  photo?: string
  description: string
  include: string[]
}

type Props = {
  filter?: string
}

const services: Service[] = [
  {
    id: '1',
    name: 'Cuidados Domiciliares',
    specialty: 'Geriatria',
    photo: '/admar/care.png',
    description: 'Assistência completa no conforto do lar...',
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
    description: 'Acompanhamento preventivo com check-ups...',
    include: [
      'Visitas médicas e de enfermagem',
      'Controlo de doenças crónicas',
      'Verificação de sinais vitais',
      'Curativos e administração de injetáveis',
    ],
  },
  {
    id: '3',
    name: 'Fisioterapia Geriátrica',
    specialty: 'Fisioterapia',
    photo: '/admar/care.png',
    description: 'Tratamentos focados na reabilitação física...',
    include: [
      'Reabilitação pós-cirúrgica ou AVC',
      'Fortalecimento muscular',
      'Exercícios de equilíbrio e alongamento',
      'Terapias respiratórias',
    ],
  },
  {
    id: '4',
    name: 'Apoio Psicológico',
    specialty: 'Psicologia',
    photo: '/admar/care.png',
    description: 'Atendimento psicológico individualizado...',
    include: [
      'Sessões presenciais ou online',
      'Estímulo emocional e cognitivo',
      'Acompanhamento psicológico',
      'Apoio para cuidadores e familiares',
    ],
  },
  {
    id: '5',
    name: 'Alimentação e Nutrição',
    specialty: 'Nutrição',
    photo: '/admar/care.png',
    description: 'Planos alimentares personalizados...',
    include: [
      'Avaliação nutricional completa',
      'Planeamento alimentar',
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
      'Manicure e pedicure',
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

export default function ServicePage({ filter = 'Todos' }: Props) {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [showAll, setShowAll] = useState(false)

  const specialties = ['Todos', ...new Set(services.map((s) => s.specialty))]
  const filteredServices = filter === 'Todos'
    ? services
    : services.filter((s) => s.specialty === filter)

  const visibleServices = showAll
    ? filteredServices
    : filteredServices.slice(0, 3)

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="relative z-0 px-4 sm:px-6 md:px-10 lg:px-40 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Nossos Serviços
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Na <strong>ADMAR Homecare</strong>, oferecemos mais do que cuidados — proporcionamos dignidade, conforto e atenção especializada.
          </p>
        </div>

        {/* Cards */}
        <div className={`grid gap-10 ${
          visibleServices.length === 1
            ? 'grid-cols-1 justify-center'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {visibleServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col items-center text-center space-y-5 border border-gray-100 h-full"
            >

              <div className="relative w-full h-[180px] overflow-hidden border-2 border-blue-100 shadow-lg rounded-2xl bg-white">
                <Image
                  src={service.photo || '/admar/4.png'}
                  alt={`Foto de ${service.name}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div >

            <div className='flex-1 flex flex-col justify-between w-full'>
              <h3 className="text-2xl font-bold text-blue-900 min-h-[60px]">{service.name}</h3>
                <p className="text-sm text-gray-500 italic mb-2">
                  Especialidade:
                </p>
                <p className="text-base text-gray-600 font-medium flex items-center gap-2 justify-center mb-4">
                   {getIconForSpecialty(service.specialty)}
                   {service.specialty}
                </p>
              
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-base bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-400 focus:outline-none transition-all font-semibold w-full max-w-[220px] flex items-center justify-center gap-2 mx-auto group"
                >
                  <motion.span
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="inline-block"
                  >
                    <CircleAlert className="w-5 h-5 text-white group-hover:text-blue-100" />
                  </motion.span>
                  Mais Detalhes
                </button>

              </div>
            </motion.div>
          ))}
        </div>

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
      

      {/* Modal de Detalhes */}
      <AnimatePresence>
      {selectedService && (
      <ModalPortal>
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 py-8 overflow-y-auto"
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-6 sm:p-8 relative space-y-6"
        >
          {/* Botão de Fechar */}
          <button
            onClick={() => setSelectedService(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-full"
            aria-label="Fechar detalhes do serviço"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Imagem + Informações */}
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-full sm:w-[150px] h-[200px] sm:h-[150px] relative rounded-2xl overflow-hidden border-2 border-blue-100 shadow-lg">
              <Image
                src={selectedService.photo || '/admar/4.png'}
                alt={`Foto de ${selectedService.name}`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 space-y-2">
              <h2
                id="modal-title"
                className="text-2xl font-extrabold text-blue-800 tracking-tight"
              >
                {selectedService.name}
              </h2>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                {getIconForSpecialty(selectedService.specialty)}
                {selectedService.specialty}
              </p>
              <p
                id="modal-description"
                className="text-gray-700 text-base leading-relaxed mt-2"
              >
                {selectedService.description}
              </p>
            </div>
          </div>

          {/* Lista de Itens */}
          <div>
            <h4 className="font-semibold text-blue-700 mt-2 mb-2">
              O que está incluído:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedService.include.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-700 text-sm leading-snug"
                >
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <CheckCircle className="text-green-600 w-4 h-4 mt-0.5" />
                  </motion.div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botão Agendar com animação */}
          <div className="pt-4 text-right">
            <a
              href={`/agendar?especialista=${encodeURIComponent(
                selectedService.name
              )}`}
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm px-6 py-2.5 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-green-400 focus:outline-none group"
            >
              <motion.span
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-block"
              >
                <Stethoscope className="w-5 h-5 text-white group-hover:text-green-100" />
              </motion.span>
              Agendar Consulta
            </a>
          </div>
        </motion.div>
      </motion.div>
    </ModalPortal>
  )}
</AnimatePresence>

</div>
</section>
)
}
