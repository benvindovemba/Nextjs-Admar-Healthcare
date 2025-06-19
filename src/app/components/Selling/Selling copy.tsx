import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';

const Selling = () => {
  return (
    <>
    {/* **** Título e Descrição **** */}
        <div className='grid grid-cols-6 text-center md:pt-16 md:pb-10'>
            <div className='col-start-2 col-span-4'>
                <h1 className='text-5xl font-bold'>Produtos em Destaque</h1>
                <p className='py-4 w-2/4 mx-auto text-gray-500 text-lg'>
                    Confira nossos produtos mais vendidos, e aproveite as ofertas especiais!
                </p>
            </div>
        </div>
        {/* **** Título **** */}
    <div className='min-h-screen flex items-center justify-center bg-gray-50 md:py-5'>
        <div className="container grid md:grid-cols-3 gap-6 px-4 justify-items-center">
            <div className="shadow-lg hover:shadow-xl cursor-pointer px-12 py-8 rounded-lg hover:scale-105 transition-all relative">
                {/* **** Card de Vendas **** */}
                <div className="grid grid-cols-2 gap-6 items-end">
                    <Image
                        src="/admar/6.png"
                        alt="Equipe Admar Homecare"
                        width={170}
                        height={500}
                        className="absolute md:bottom-64 md:-right-0 bottom-20 right-0"
                    />
                    <div className="">
                        <p className='text-lg text-gray-500'>#1 Selling</p>
                        <h1 className='text-3xl font-semibold text-gray-700'>
                            Product Name
                        </h1>
                    </div>
                </div>
                {/* **** Descrição do Produto **** */}
                <p className='py-3 text-gray-500 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, quidem.
                </p>
                <div className="grid grid-cols-2 gap-6 items-center py-2">
                    <h1 className='text-2xl font-semibold'>
                        R$ 99,99
                    </h1>
                    <Button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold p-6 rounded-full'>
                        Comprar
                    </Button>
                </div>
                {/* **** Botão de Compra **** */}
            </div>
            <div className="shadow-lg hover:shadow-xl cursor-pointer px-12 py-8 rounded-lg hover:scale-105 transition-all relative">
                <div className="grid grid-cols-2 gap-6 items-end">
                    <Image
                        src="/admar/6.png"
                        alt="Equipe Admar Homecare"
                        width={170}
                        height={500}
                        className="absolute -right-0 bottom-64"
                    />
                    <div className="">
                        <p className='text-lg text-gray-500'>#1 Selling</p>
                        <h1 className='text-3xl font-semibold text-gray-700'>
                            Product Name
                        </h1>
                    </div>
                </div>
                {/* **** Descrição do Produto **** */}
                <p className='py-3 text-gray-500 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, quidem.
                </p>
                <div className="grid grid-cols-2 gap-6 items-center py-2">
                    <h1 className='text-2xl font-semibold'>
                        R$ 99,99
                    </h1>
                    <Button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold p-6 rounded-full'>
                        Comprar
                    </Button>
                </div>

            </div>
            <div className="shadow-lg hover:shadow-xl cursor-pointer px-12 py-8 rounded-lg hover:scale-105 transition-all relative">
                <div className="grid grid-cols-2 gap-6 items-end">
                    <Image
                        src="/admar/6.png"
                        alt="Equipe Admar Homecare"
                        width={170}
                        height={500}
                        className="absolute -right-0 bottom-64"
                    />
                    <div className="">
                        <p className='text-lg text-gray-500'>#1 Selling</p>
                        <h1 className='text-3xl font-semibold text-gray-700'>
                            Product Name
                        </h1>
                    </div>
                </div>
                {/* **** Descrição do Produto **** */}
                <p className='py-3 text-gray-500 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam, quidem.
                </p>
                <div className="grid grid-cols-2 gap-6 items-center py-2">
                    <h1 className='text-2xl font-semibold'>
                        R$ 99,99
                    </h1>
                    <Button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold p-6 rounded-full'>
                        Comprar
                    </Button>
                </div>

            </div>
        </div>
    </div>
    </>
  );
};

export default Selling;