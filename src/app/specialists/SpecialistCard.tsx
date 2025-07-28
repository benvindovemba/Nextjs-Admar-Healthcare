import { Button } from '@/components/ui/button';
import Link from 'next/link'
import React from 'react'

interface SpecialistCardProps {
  img: string;
  title: string;
  desc: string;
  totalDoctors: string | number;
}
const SpecialistCard: React.FC<SpecialistCardProps> = ({ img, title, totalDoctors }) => {
  return (
    
    <Link href="/specialists" className='w-full h-full flex items-center flex-col space-y-6 px-3 
    md:py-7 py-4 bg-neutral-400/10 hover:bg-blue-500/20 border rounded-md  ease-in-out duration-300'>
        <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-neutral-800/10 p-2">
        <img
          src={img}
          alt={`${title} icon`}
          className="w-full h-full object-center object-contain rounded-full"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-xl text-neutral-700 font-semibold">
            {title}
        </h1>
        <p className="text-center text-sm text-neutral-500 font-normal">
        {totalDoctors} Doctors
      </p>
      </div>
      <Button className='w-fit px-6 py-2 text-base text-neutral-50 font font-medium rounded-xl bg-blue-500'>
        Read More
      </Button>
    </Link>
  )
}

export default SpecialistCard