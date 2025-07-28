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
