export type Doctor = {
  id: string
  name: string
  specialty: string
  experienceYears: number
  email: string
  phone: string
  photo?: string
}

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dra. Adelina Martins',
    specialty: 'Geriatria',
    experienceYears: 12,
    email: 'carla@clinica.com',
    phone: '+244 923 000 111',
    photo: '/admar/4.png',
  },
  {
    id: '2',
    name: 'Dra. Angela António',
    specialty: 'Neurologia',
    experienceYears: 8,
    email: 'angela@clinica.com',
    phone: '+244 924 111 222',
    photo: '/admar/4.png',
  },
  {
    id: '3',
    name: 'Dra. Ana Paula',
    specialty: 'Cardiologia',
    experienceYears: 15,
    email: 'ana@clinica.com',
    phone: '+244 925 222 333',
    photo: '/admar/4.png',
  },
]
