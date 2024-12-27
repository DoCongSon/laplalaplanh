'use client'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import CarouselPrevButton from './carousel-prev-button'
import CarouselNextButton from './carousel-next-button'
import { Swiper as SwiperType } from 'swiper/types'
import { Ref } from 'react'

type ImageProductCarouselProps = {
  images: string[]
  id: string
  className?: string
  imageClassName?: string
  prevClassName?: string
  nextClassName?: string
  initialSlide?: number
  slidesPerView?: number
  spaceBetween?: number
  onSlideChange?: (swiper: SwiperType) => void
  ref?: Ref<SwiperRef>
}

const ImageProductCarousel = ({
  className,
  imageClassName,
  prevClassName,
  nextClassName,
  id,
  images,
  initialSlide,
  slidesPerView,
  spaceBetween,
  onSlideChange,
  ref,
}: ImageProductCarouselProps) => {
  const imagePre = `image-pre-${id}`
  const imageNext = `image-next-${id}`

  return (
    <div className={cn('relative w-[30.25rem] h-[30.25rem]', className)}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={slidesPerView || 1}
        initialSlide={initialSlide}
        spaceBetween={spaceBetween || 8}
        ref={ref}
        navigation={{
          prevEl: `.${imagePre}`,
          nextEl: `.${imageNext}`,
        }}
        onSlideChange={onSlideChange}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt=''
              width={500}
              height={500}
              className={cn('w-full h-full object-cover rounded-lg', imageClassName)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselPrevButton className={cn('left-2', prevClassName, imagePre)} />
      <CarouselNextButton className={cn('right-2', nextClassName, imageNext)} />
    </div>
  )
}

export default ImageProductCarousel
