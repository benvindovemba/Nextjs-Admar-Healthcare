import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';

const Selling = () => {
  return (
    <>
      {/* Título e Descrição */}
      <div className='text-center pt-12 md:pt-16 pb-8 md:pb-10 px-4'>
        <h1 className='text-3xl md:text-5xl font-bold'>Produtos em Destaque</h1>
        <p className='py-4 max-w-xl mx-auto text-gray-500 text-base md:text-lg'>
          Confira nossos produtos mais vendidos, e aproveite as ofertas especiais!
        </p>
      </div>

      {/* Lista de Produtos */}
      <div className='bg-gray-50 py-10'>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg hover:shadow-xl px-6 py-10 rounded-2xl hover:scale-105 transition-transform overflow-hidden"
            >
              {/* Imagem decorativa em md+ */}
              <div className="hidden md:block absolute bottom-0 right-0 z-0 opacity-90">
                <Image
                  src="/admar/6.png"
                  alt="Produto"
                  width={130}
                  height={180}
                  className="object-contain"
                />
              </div>

              {/* Imagem mobile (centralizada) */}
              <div className="md:hidden flex justify-center mb-4">
                <Image
                  src="/admar/6.png"
                  alt="Produto"
                  width={100}
                  height={120}
                  className="object-contain"
                />
              </div>

              {/* Conteúdo */}
              <div className="relative z-10">
                <p className='text-sm md:text-base text-gray-500'>#1 Selling</p>
                <h2 className='text-xl md:text-2xl font-semibold text-gray-700'>
                  Product Name
                </h2>
                <p className='py-3 text-gray-500 text-sm md:text-base'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <h3 className='text-lg md:text-2xl font-semibold'>R$ 99,99</h3>
                  <Button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full text-sm md:text-base'>
                    Comprar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Selling;
