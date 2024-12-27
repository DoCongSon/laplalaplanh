import Image from 'next/image'
import React from 'react'
import Star from '../icons/star'

export type ProductReviewItemProps = {
  avatar: string
  name: string
  date: string
  rating: number
  productNature: string
  content: string
  images?: string[]
}

const ProductReviewItem = ({ avatar, content, date, name, productNature, rating, images }: ProductReviewItemProps) => {
  return (
    <div className='flex items-start pb-6 border-b border-[#1D2A2C]/10'>
      <div className='flex items-center w-[19.5rem] gap-[1.625rem]'>
        <Image src={avatar} alt={name} width={64} height={64} className='rounded-full w-16 h-16 object-cover' />
        <div className='flex flex-col gap-3'>
          <h6 className='heading-6 text-black'>{name}</h6>
          <div>
            <div className='flex items-center gap-2'>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className='w-4 h-4' fill={index < rating ? '#344B4E' : '#C4CDCE'} />
              ))}
            </div>
            <p className='paragraph-2 text-black'>{date}</p>
          </div>
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-3'>
        <h4 className='heading-6 text-black'>{productNature}</h4>
        <p className='text-base leading-tight text-black'>{content}</p>
        {images && (
          <div className='flex gap-2 flex-wrap'>
            {images.map((image, index) => (
              <div
                key={index}
                className='w-[6.5rem] h-[6.5rem] rounded border border-neutral-4 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300'>
                <Image src={image} alt={name} width={98} height={98} className='rounded-[0.1875rem]' />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductReviewItem
