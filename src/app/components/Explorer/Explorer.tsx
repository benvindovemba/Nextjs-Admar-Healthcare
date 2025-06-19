import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Explorer = () => {
  return (
    <>
        <div className=''>
        <div className='center py-20'>
            {/* ******************************** */}
            <div className='grid grid-cols-6 text-center md:py-16'>
                <div className='col-start-2 col-span-4'>
                    <h1 className='text-5xl font-bold'>Explorar Our Allowihous</h1>
                    <p className='py-4 w-2/4 mx-auto text-gray-500 text-lg'>Descubra os nossos serviços e encontre o que melhor se adapta às suas necessidades.</p>
                </div>
            </div>
            {/* ******************************** */}  
            <div className="grid grid-cols-3 gap-14 w-4/5 mx-auto " >
                {/* ******************************************* */}
                <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-all">
                    <h1 className='text-3xl font-semibold text-gray-700'>Our Services</h1>
                    <p className='py-2 text-gray-500 text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="text-center">
                    <Image src="/admar/8.png" 
                    alt="Explorer 1" 
                    width={200} 
                    height={200} 
                    className='py-6'
                    />
                    <Button className="bg-blue-500 hover:bg-blue-700 hover:scale-105 text-lg font-normal  text-white p-6 rounded-full shadow-lg tracking-wide">
                        Legenda
                    </Button> 
                    </div>
                </div>
                {/* ******************************************* */}
                <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-all">
                    <h1 className='text-3xl font-semibold text-gray-700'>Our Services</h1>
                    <p className='py-2 text-gray-500 text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                    <div className="text-center">
                    <Image src="/admar/8.png" 
                    alt="Explorer 1" 
                    width={200} 
                    height={200} 
                    className='py-6'
                    />
                    <Button className="bg-blue-500 hover:bg-blue-700 hover:scale-105 text-lg font-normal  text-white p-6 rounded-full shadow-lg tracking-wide">
                        Legenda
                    </Button> 
                    </div> 
                </div>
                {/* ******************************************* */}
                <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-all">
                    <h1 className='text-3xl font-semibold text-gray-700'>Our Services</h1>
                    <p className='py-2 text-gray-500 text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="text-center">
                    <Image src="/admar/8.png" 
                    alt="Explorer 1" 
                    width={200} 
                    height={200} 
                    className='py-6'
                    />
                    <Button className="bg-blue-500 hover:bg-blue-700 hover:scale-105 text-lg font-normal  text-white p-6 rounded-full shadow-lg tracking-wide">
                        Legenda
                    </Button> 
                    </div> 
                </div>
            </div>
            {/* ******************************** */}
        </div> 
        </div>
    </>
  )
}

export default Explorer
