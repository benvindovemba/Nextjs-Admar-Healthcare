import React from 'react'
import Image from 'next/image'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button';

const ConsultSolution = () => {
  return (
    <div className='bg-[#f1f5ff]'>
      <div className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
          
          {/* COLUNA DE TEXTO + CHECKBOXES + BOTÃO */}
          <div className='flex flex-col items-center text-center md:items-start md:text-left space-y-6'>
            <div>
              <h2 className='text-lg md:text-xl font-medium pb-2'>- Solução de Consulta</h2>
              <h1 className='text-3xl md:text-5xl font-semibold leading-tight'>
                <span className='text-blue-600'>4 Passos Fáceis</span> Para Obter Sua Consulta
              </h1>
            </div>

            {/* CHECKBOXES */}
            <div className='flex flex-col gap-4 w-full max-w-md'>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className='flex items-start gap-3'>
                  <Checkbox id={`terms${item}`} className='mt-1 rounded-full w-4 h-4' />
                  <label
                    htmlFor={`terms${item}`}
                    className='text-base leading-snug text-left'
                  >
                    Ao clicar em "Confirmar", você concorda com os termos de uso e a política de privacidade.
                  </label>
                </div>
              ))}
            </div>

            {/* BOTÃO CENTRALIZADO */}
            <div className="flex justify-center md:justify-start w-full">
              <Button className="bg-blue-500 hover:bg-blue-700 text-lg font-medium text-white py-4 px-8 rounded-full shadow-lg transition-all">
                Agendar Consulta
              </Button>
            </div>
          </div>

          {/* COLUNA DA IMAGEM */}
          <div className='flex justify-center md:justify-end'>
            <Image
              src="/admar/4.png"
              alt='Consultation Solution'
              width={400}
              height={400}
              className='w-[280px] sm:w-[320px] md:w-[400px] h-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultSolution;
