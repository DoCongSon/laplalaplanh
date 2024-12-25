import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

export type BrandStoryProps = {
  image: string
  title: string
  description: string
  aboutLink: string
  className?: string
}

const BrandStory = ({ className, aboutLink, description, image, title }: BrandStoryProps) => {
  return (
    <div className={cn('flex gap-10', className)}>
      <div className='flex flex-col gap-10 flex-1'>
        <h1 className='title text-primary-6'>{title}</h1>
        <p className='text-base text-black'>{description}</p>
        <Link href={aboutLink}>
          <Button variant='outline'>Về chúng tôi</Button>
        </Link>
      </div>
      <div className='w-[38.0625rem] h-[19.6875rem] rounded-[1.25rem] object-cover overflow-hidden'>
        <Image src={image} alt={title} width={610} height={315} className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default BrandStory
