'use client'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import CarouselPrevButton from './carousel-prev-button'
import CarouselNextButton from './carousel-next-button'

type BannerSlide = {
  imageUrl: string
  title?: string
  description?: string
}

type BannerCarouselProps = {
  slides: BannerSlide[]
  id: string
  className?: string
}

const BannerCarousel = ({ slides, id, className }: BannerCarouselProps) => {
  const bannerPre = `banner-pre-${id}`
  const bannerNext = `banner-next-${id}`
  const bannerPagination = `banner-pagination-${id}`

  return (
    <div className={cn('relative', className)}>
      <Swiper
        className='w-full h-[32.5rem]'
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          prevEl: `.${bannerPre}`,
          nextEl: `.${bannerNext}`,
        }}
        pagination={{
          el: `.${bannerPagination}`,
          clickable: true,
          bulletClass: 'w-4 h-4 bg-cool-gray rounded-full transition-all duration-300',
          bulletActiveClass: 'bg-primary-6 w-[4.375rem]',
          renderBullet: function (index, className) {
            return `<button class='${className}'></button>`
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='w-full h-[32.5rem] relative'>
              <Image src={slide.imageUrl} alt='' fill className='w-full h-full object-cover grayscale-[50%]' />
              <div className='absolute inset-0 bg-[#043430]/80'>
                <div className='p-[6.5rem] max-w-screen-2xl mx-auto flex flex-col gap-4 justify-center h-full'>
                  <h1 className='heading-1 max-w-[22rem]'>{slide.title}</h1>
                  <p className='paragraph-1 max-w-[25rem]'>{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <CarouselPrevButton className={cn('left-8', bannerPre)} />
        <CarouselNextButton className={cn('right-8', bannerNext)} />
      </Swiper>
      <div className='mt-8 w-full'>
        <div className={cn('flex gap-2 justify-center', bannerPagination)}></div>
      </div>
    </div>
  )
}

export default BannerCarousel
