import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import React from 'react'
import { FiChevronRight } from 'react-icons/fi';

interface BlogCardProps {
  img?: string;
  title: string;
  desc: string;
}
const BlogCard = ({ img, title, desc }: BlogCardProps) => {
  return (
    <div className='w-full bg-blue-400/5 rounded-xl overflow-hidden'>
        <img 
        src="/admar/espiritual.png" 
        alt=""
        className='w-full aspect-video object-cover'
        />
        <div className="p-3 space-y-4">
        <div className="space-y-2">
            <Link href='/blogs' className='text-xl text-neutral-700 font-semibold'>
                {title}
            </Link>
            <p className="text-sm text-neutral-600 font-normal line-clamp-2">
                {desc}
            </p>
        </div>
        <Button className="w-fit py-2 text-sm text-blue-700 hover:text-blue-500 font-normal flex items-center gap-x-1.5 ease-in-out duration-300">
            Read More
            <FiChevronRight className='text-base' />
        </Button>
        </div>
    </div>
  )
}

export default BlogCard