'use client'
import React, { useRef, useState } from 'react'
import ImageProductCarousel from '../carousel/image-product-carousel'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SwiperRef } from 'swiper/react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'

type ProductImageViewProps = {
  name: string
  images: string[]
}

const ProductImageView = ({ images, name }: ProductImageViewProps) => {
  const [imageActive, setImageActive] = useState<number>(0)
  const slideRef = useRef<SwiperRef>(null)
  const slideFullRef = useRef<SwiperRef>(null)

  const setActive = (index: number) => {
    setImageActive(index)
    slideRef.current?.swiper.slideTo(index)
    slideFullRef.current?.swiper.slideTo(index)
  }

  return (
    <Dialog>
      <div className='flex gap-2'>
        <div className='flex flex-col gap-2 w-40'>
          {images[0] && (
            <Image
              src={images[0]}
              alt=''
              width={157}
              height={157}
              onClick={() => setActive(0)}
              className={cn('object-cover rounded-[0.25rem]', imageActive === 0 && 'border-2 border-primary-6')}
            />
          )}
          {images[1] && (
            <Image
              src={images[1]}
              alt=''
              width={157}
              height={157}
              onClick={() => setActive(1)}
              className={cn('object-cover rounded-[0.25rem]', imageActive === 1 && 'border-2 border-primary-6')}
            />
          )}
          {images.length > 2 && (
            <DialogTrigger>
              <div className='relative'>
                <Image
                  src={images[2]}
                  alt=''
                  width={157}
                  height={157}
                  className='object-cover rounded-[0.25rem] brightness-50'
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <p className='text-neutral-1 text-[0.88588rem] font-semibold'>+{images.length - 2}</p>
                </div>
              </div>
            </DialogTrigger>
          )}
        </div>
        <ImageProductCarousel
          ref={slideRef}
          images={images}
          id={'product-1'}
          initialSlide={imageActive}
          onSlideChange={(swiper) => setImageActive(swiper.realIndex)}
        />
      </div>
      <DialogContent className='w-[65.3125rem] pb-10'>
        <DialogTitle hidden />
        <div className='flex gap-2 mt-6'>
          <ImageProductCarousel
            ref={slideFullRef}
            images={images}
            id={'product-1'}
            initialSlide={imageActive}
            onSlideChange={(swiper) => setImageActive(swiper.realIndex)}
          />
          <div>
            <h3 className='heading-3 text-black'>{name}</h3>
            <div className='flex flex-wrap gap-2 mt-5'>
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt=''
                  width={104}
                  height={104}
                  onClick={() => setActive(index)}
                  className={cn('object-cover rounded-[0.25rem]', imageActive === index && 'border-2 border-primary-6')}
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductImageView
