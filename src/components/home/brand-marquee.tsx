import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

type BrandMarqueeProps = {
  className?: string
  brands: string[]
}

const BrandMarquee = ({ brands, className }: BrandMarqueeProps) => {
  return (
    <div className={cn(className)}>
      <h2 className='title text-primary-6 text-center'>THƯƠNG HIỆU NỔI BẬT</h2>
      <Marquee className='h-[3.3125rem] mt-10'>
        {brands.map((brand, index) => (
          <div className='group h-[3.3125rem] max-w-[11rem] items-center justify-center mx-5' key={index}>
            <Image className='w-full h-full object-contain' src={brand} alt='' width={200} height={53} />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default BrandMarquee
