'use client'

import React, { useReducer, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Checkbox } from "@/components/ui/checkbox"

const TERMS = [
  "Ao clicar em 'Confirmar', você concorda com os termos de uso e a política de privacidade.",
  "Você autoriza o uso de seus dados para fins de contato médico.",
  "Você declara que leu as instruções para a consulta.",
  "Você entende e aceita a política de cancelamento.",
]

type State = boolean[]
type Action = { type: 'TOGGLE'; index: number }

const checkboxReducer = (state: State, action: Action): State => {
  if (action.type === 'TOGGLE') {
    const updated = [...state]
    updated[action.index] = !updated[action.index]
    return updated
  }
  return state
}

const TermItem = ({
  label,
  checked,
  onChange,
  id,
}: {
  label: string
  checked: boolean
  onChange: () => void
  id: string
}) => (
  <div className="flex items-start gap-3">
    <Checkbox
      id={id}
      className="rounded-full w-4 h-4 text-blue-600 mt-1"
      checked={checked}
      onCheckedChange={onChange}
    />
    <label htmlFor={id} className="text-base md:text-[17px] leading-snug">
      {label}
    </label>
  </div>
)

const Appointment = () => {
  const [checked, dispatch] = useReducer(checkboxReducer, new Array(TERMS.length).fill(false))
  const [showWarning, setShowWarning] = useState(false)

  const allChecked = checked.every(Boolean)

  const handleSubmit = () => {
    if (!allChecked) {
      setShowWarning(true)
    } else {
      setShowWarning(false)
      alert('Consulta agendada com sucesso! 🎉')
    }
  }

  return (
    <section className="bg-gray-50 py-10 md:py-16">
      <div className="container mx-auto px-4" 
      data-aos='zoom-in-down' data-aos-duration='1600' data-aos-easing='ease-in-out-back'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto e checkboxes */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
              <span className="text-blue-600">4 Passos Fáceis</span> Para Obter Sua Consulta
            </h1>

            <div className="space-y-4 mb-6">
              {TERMS.map((term, index) => (
                <TermItem
                  key={index}
                  id={`term-${index}`}
                  label={term}
                  checked={checked[index]}
                  onChange={() => {
                    dispatch({ type: 'TOGGLE', index })
                    if (showWarning) setShowWarning(false)
                  }}
                />
              ))}
            </div>

            {showWarning && (
              <p className="text-red-600 font-semibold mb-4">
                Por favor, aceite todos os termos antes de agendar a consulta.
              </p>
            )}

            <Button
              className="w-full md:w-auto mt-4 bg-blue-500 hover:bg-blue-700 text-lg text-white py-4 px-8 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50"
              disabled={!allChecked}
              onClick={handleSubmit}
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Imagem */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/admar/4.png"
              alt="Mulher em consulta médica com profissional da saúde"
              width={400}
              height={400}
              className="max-w-[300px] md:max-w-[400px] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Appointment
