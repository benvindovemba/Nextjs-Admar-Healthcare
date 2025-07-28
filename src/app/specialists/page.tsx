import Link from 'next/link'
import React from 'react'
import { FiChevronsRight } from 'react-icons/fi'
import SpecialistCard from './SpecialistCard'

const Specialists = () => {
    const specialistData = [
        {
            id: 1,
            img: "/admar/5.png",
            title: "Dental Care",
            desc: "Comprehensive dental treatments and oral care.",
            totalDoctors: "15+",
        },
        {
            id: 2,
            img: "/admar/6.png",
            title: "Cardiology",
            desc: "Expert heart care and cardiovascular services.",
            totalDoctors: "15+",
        },
        {
            id: 3,
            img: "/admar/8.png",
            title: "Eye Care",
            desc: "Advanced eye examinations and treatments.",
            totalDoctors: "15+",
        },
        {
            id: 4,
            img: "/admar/7.png",
            title: "Gynecology Care",
            desc: "Specialized women's health and gynecology.",
            totalDoctors: "15+",
        },
        {
            id: 5,
            img: "/admar/4.png",
            title: "Neurology Care",
            desc: "Comprehensive neurological diagnostics and care.",
            totalDoctors: "15+",
        },

    ]
  return (
    <div className='w-full space-y-6 px-20'> 
        {/******* Top section ******** */}
    <div className='w-full space-y-6'>
      {/* ******** Top section ******** */}
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl text-neutral-700 font-semibold">
          Our Specialists
        </h1>
        <Link
          href="/specialists"
          className='text-base text-blue-600 hover:text-blue-800 font-normal flex items-center gap-x-2 transition-all duration-300'
        >
          View All
          <FiChevronsRight className='text-lg' />
        </Link>
      </div>
      {/* ******** Service card (adicionar aqui) ******* */}
      <div className="grid md:grid-cols-5 grid-cols-2 md:gap-8 gap-4">
        {specialistData.map((item) => (
            <SpecialistCard key={item.id} {...item}/>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Specialists