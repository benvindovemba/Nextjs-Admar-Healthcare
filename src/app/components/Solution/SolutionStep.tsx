'use client'

import React from 'react';
import Image from 'next/image';

const StepCard = ({ src, title, description }: { src: string; title: string; description: string }) => (
  <div className="
    flex flex-col justify-between 
    px-4 sm:px-6 py-6 sm:py-8 lg:py-10 
    bg-gray-50 rounded-xl shadow 
    text-center h-full min-h-[300px] 
    transition duration-300 ease-in-out 
    hover:shadow-xl hover:bg-blue-600 hover:text-white 
    transform hover:scale-[1.03] 
    hover:cursor-pointer
    hover:md:scale-[1.05] 
    motion-reduce:transform-none
  ">
    <div>
      <Image 
        src={src} 
        alt={title} 
        width={60} 
        height={60} 
        className="mx-auto rounded-full shadow mb-4" 
      />
      <h2 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-2">{title}</h2>
      <p className="text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  </div>
);

const SolutionStep = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20 px-4 text-center">
      {/* Título e Subtítulo */}
      <div className="max-w-4xl">
        <h2 className="text-base sm:text-lg font-medium pb-3 text-gray-600">- Solução mais rápida</h2>
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
          <span className='text-blue-600'>4 Passos Fáceis</span> E Obtenha A Sua Solução
        </h1>
      </div>

      {/* Grid dos Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-14 max-w-6xl w-full">
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <StepCard 
            src="/admar/dentista.png"
            title="Verificar perfil do médico"
            description="Confirme se o médico está disponível e se possui as credenciais necessárias."
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <StepCard 
            src="/admar/calendario.png"
            title="Escolha uma data"
            description="Veja os dias disponíveis e selecione o que melhor se encaixa na sua agenda."
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          <StepCard 
            src="/admar/calendarios.png"
            title="Confirme o agendamento"
            description="Revise os dados e confirme o agendamento com o profissional escolhido."
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          <StepCard 
            src="/admar/sucedido.png"
            title="Atendimento realizado"
            description="O médico comparecerá na data agendada para realizar o serviço com excelência."
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionStep;
