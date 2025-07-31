'use client'

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast, Toaster } from 'sonner'
import { motion } from 'framer-motion'
import {
  CalendarIcon,
  ClockIcon,
  FileTextIcon,
  MailIcon,
  PhoneIcon,
  UserIcon
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '../../../components/ui/Input'
import { useSearchParams } from 'next/navigation'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const formSchema = z.object({
  name: z.string().min(3),
  phone: z.string().min(9),
  email: z.string().email(),
  date: z.string(),
  time: z.string(),
  subject: z.string().min(3),
  patientName: z.string().optional(),
  birthDate: z.string().optional(),
  mobilityAssistance: z.enum(['Independente', 'Com ajuda', 'Cadeira de rodas']).optional(),
  address: z.string().optional(),
  emergencyContact: z.string().optional(),
  notes: z.string().max(500).optional(),
})

type FormData = z.infer<typeof formSchema>

const Appointment = () => {
  const searchParams = useSearchParams()
  const especialista = searchParams.get('especialista')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
    },
  })

  const selectedSubject = watch('subject')

  useEffect(() => {
    if (especialista) {
      reset((prev) => ({
        ...prev,
        subject: especialista,
      }))
    }
  }, [especialista, reset])

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success('Consulta agendada com sucesso!')
      reset()
    } catch {
      toast.error('Erro ao agendar consulta.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-40 py-16 md:py-20">
        <Toaster position="top-center" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Card de Horário */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-blue-100 bg-white"
          >
            <div className="relative w-full h-64">
              
              <img
                src="/admar/5.png"
                alt="Horários"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"/>
            </div>
            <div className="p-6 space-y-4 bg-white/90 backdrop-blur">
              <h2 className="text-2xl font-bold text-blue-800">Horário de Atendimento</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Seg - Ter</span><span>08h - 20h</span></li>
                <li className="flex justify-between"><span>Qua - Qui</span><span>07h - 20h</span></li>
                <li className="flex justify-between"><span>Sex - Sábado</span><span>08h - 20h</span></li>
                <li className="flex justify-between"><span>Dom / Feriado</span><span>Fechado</span></li>
              </ul>
              <div className="pt-4 border-t border-blue-100 mt-4">
                <p className="text-sm text-neutral-700 font-medium">Emergência: Atendimento 24h / 7d</p>
                <div className="mt-2 flex items-center gap-2 bg-blue-50 p-3 rounded-xl border border-blue-200">
                  <PhoneIcon className="text-blue-600 w-5 h-5" />
                  <span className="text-blue-800 font-semibold text-sm tracking-wide">+244 923 000 999</span>
                </div>
                <p className="text-xs text-neutral-500 mt-2">
                  Ligue imediatamente em caso de emergência médica.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="md:col-span-2 bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl border border-blue-100 p-10 space-y-10"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-2 tracking-tight">
                Agende Sua Consulta
              </h1>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-4" />
              <p className="text-gray-600 text-lg">
                Atendimento humanizado com profissionais qualificados.
              </p>
            </div>

            <Accordion type="multiple" className="space-y-6">
              {/* Dados Pessoais */}
              <AccordionItem value="dados">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-5 h-5 text-blue-800" />
                    <span>Dados Pessoais</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input {...register('name')} placeholder="Seu Nome Completo" className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="tel" {...register('phone')} placeholder="Telefone" className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="email" {...register('email')} placeholder="Email" className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2" />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Informações da Consulta */}
              <AccordionItem value="consulta">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-blue-800" />
                     <span>Informações da Consulta</span>
                  </div>
                </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="date" {...register('date')} className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="time" {...register('time')} className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <select {...register('subject')} className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2">
                    {especialista && ![
                      'Avaliação Geriátrica Global (AGG)',
                      'Cuidados Preventivos',
                      'Tratamento de Doenças Crônicas',
                      'Reabilitação Física e Funcional',
                      'Acompanhamento Nutricional',
                      'Cuidados Paliativos',
                      'Atendimento Domiciliar',
                      'Apoio Psicossocial e Psicológico',
                      'Planejamento da Longevidade',
                    ].includes(especialista) && (
                      <option value={especialista} hidden>
                        {especialista}
                      </option>
                    )}
                    <option value="">Escolha o motivo da consulta</option>
                    <option value="Avaliação Geriátrica Global">Avaliação Geriátrica Global (AGG)</option>
                    <option value="Cuidados Preventivos">Cuidados Preventivos</option>
                    <option value="Tratamento de Doenças Crônicas">Tratamento de Doenças Crônicas</option>
                    <option value="Reabilitação Física e Funcional">Reabilitação Física e Funcional</option>
                    <option value="Acompanhamento Nutricional">Acompanhamento Nutricional</option>
                    <option value="Cuidados Paliativos">Cuidados Paliativos</option>
                    <option value="Atendimento Domiciliar">Atendimento Domiciliar</option>
                    <option value="Apoio Psicossocial e Psicológico">Apoio Psicossocial e Psicológico</option>
                    <option value="Planejamento da Longevidade">Planejamento da Longevidade</option>
                  </select>
                </div>
              </AccordionContent>
              </AccordionItem>

              {/* Informações Adicionais */}
              <AccordionItem value="extras">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <FileTextIcon className="w-5 h-5 text-blue-800" />
                    <span>Informações Adicionais</span>
                  </div>
                </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input {...register('patientName')} placeholder="Nome do Paciente (se diferente)" className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="date" {...register('birthDate')} placeholder="Data de nascimento" className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <select {...register('mobilityAssistance')} className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Grau de mobilidade</option>
                    <option value="Independente">Independente</option>
                    <option value="Com ajuda">Com ajuda</option>
                    <option value="Cadeira de rodas">Cadeira de rodas</option>
                  </select>
                  <input {...register('emergencyContact')} placeholder="Contato de emergência" className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                  {(selectedSubject === 'Atendimento Domiciliar' || selectedSubject === 'Cuidados Domiciliares') && (
                    <textarea
                      {...register('address')}
                      placeholder="Endereço completo para atendimento"
                      className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                    />
                  )}

                  <textarea
                    {...register('notes')}
                    placeholder="Observações adicionais (medicação, alergias...)"
                    className="w-full bg-gray-100 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                  />
                </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Button
              type="submit"
              disabled={loading}
              variant='custom'
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-full px-8 py-3 text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {loading ? 'Agendando...' : 'Agendar Consulta'}
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Appointment
