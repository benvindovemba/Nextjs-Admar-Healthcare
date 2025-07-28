'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast, Toaster } from 'sonner'
import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon, MailIcon, PhoneIcon, UserIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const formSchema = z.object({
  name: z.string().min(3),
  phone: z.string().min(9),
  email: z.string().email(),
  date: z.string(),
  time: z.string(),
  subject: z.string().min(3),
})

type FormData = z.infer<typeof formSchema>

const Appointment = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success('Consulta agendada com sucesso!')
      reset()
    } catch (error) {
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

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {/* Nome */}
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
                <input
                  type="text"
                  {...register('name')}
                  placeholder="Nome Completo"
                  className={`w-full pl-10 h-12 rounded-xl border ${
                    errors.name ? 'border-red-400' : 'border-gray-200'
                  } bg-white shadow-sm placeholder:text-gray-400 text-gray-800 focus:outline-none focus:ring-2 ${
                    errors.name ? 'focus:ring-red-400' : 'focus:ring-blue-500'
                  } transition`}
                />
                {errors.name && <span className="text-xs text-red-500 mt-1 block font-medium">Nome obrigatório</span>}
              </div>

              {/* Telefone */}
              <div className="relative">
                <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
                <input
                  type="tel"
                  {...register('phone')}
                  placeholder="Telefone"
                  className={`w-full pl-10 h-12 rounded-xl border ${
                    errors.phone ? 'border-red-400' : 'border-gray-200'
                  } bg-white shadow-sm placeholder:text-gray-400 text-gray-800 focus:outline-none focus:ring-2 ${
                    errors.phone ? 'focus:ring-red-400' : 'focus:ring-blue-500'
                  } transition`}
                />
                {errors.phone && <span className="text-xs text-red-500 mt-1 block font-medium">Telefone inválido</span>}
              </div>

              {/* Data */}
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
                <input
                  type="date"
                  {...register('date')}
                  className={`w-full pl-10 h-12 rounded-xl border ${
                    errors.date ? 'border-red-400' : 'border-gray-200'
                  } bg-white shadow-sm text-gray-800 focus:outline-none focus:ring-2 ${
                    errors.date ? 'focus:ring-red-400' : 'focus:ring-blue-500'
                  } transition`}
                />
                {errors.date && <span className="text-xs text-red-500 mt-1 block font-medium">Data obrigatória</span>}
              </div>

              {/* Email */}
              <div className="relative">
                <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
                <input
                  type="email"
                  {...register('email')}
                  placeholder="Email"
                  className={`w-full pl-10 h-12 rounded-xl border ${
                    errors.email ? 'border-red-400' : 'border-gray-200'
                  } bg-white shadow-sm placeholder:text-gray-400 text-gray-800 focus:outline-none focus:ring-2 ${
                    errors.email ? 'focus:ring-red-400' : 'focus:ring-blue-500'
                  } transition`}
                />
                {errors.email && <span className="text-xs text-red-500 mt-1 block font-medium">Email inválido</span>}
              </div>

              {/* Motivo */}
              <div className="md:col-span-2">
                <select
                  {...register('subject')}
                  className={`w-full h-12 px-4 rounded-xl border ${
                    errors.subject ? 'border-red-400' : 'border-gray-200'
                  } bg-white shadow-sm text-gray-800 focus:outline-none focus:ring-2 ${
                    errors.subject ? 'focus:ring-red-400' : 'focus:ring-blue-500'
                  } transition`}
                >
                  <option value="">Escolha o motivo da consulta</option>
                  <option value="Consulta Geral">Consulta Geral</option>
                  <option value="Exame Médico">Exame Médico</option>
                  <option value="Vacinação">Vacinação</option>
                  <option value="Emergência">Emergência</option>
                </select>
                {errors.subject && <span className="text-xs text-red-500 mt-1 block font-medium">Motivo obrigatório</span>}
              </div>

              {/* Hora */}
              <div className="relative md:col-span-2">
                <ClockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 w-5 h-5" />
                <input
                  type="time"
                  {...register('time')}
                  className={`w-full pl-10 h-12 rounded-xl border ${
                    errors.time ? 'border-red-400' : 'border-gray-200'
                  } bg-white shadow-sm text-gray-800 focus:outline-none focus:ring-2 ${
                    errors.time ? 'focus:ring-red-400' : 'focus:ring-blue-500'
                  } transition`}
                />
                {errors.time && <span className="text-xs text-red-500 mt-1 block font-medium">Hora obrigatória</span>}
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-full px-8 py-3 text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {loading ? 'Agendando...' : 'Agendar Consulta'}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Appointment
