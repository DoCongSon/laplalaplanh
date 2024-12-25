'use client'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import ReviewCard, { ReviewCardProps } from './review-card'
import { cn } from '@/lib/utils'
import CarouselPrevButton from './carousel-prev-button'
import CarouselNextButton from './carousel-next-button'

type ReviewCarouselProps = {
  reviews: ReviewCardProps[]
  id: string
  className?: string
}

const CustomerReviewCarousel = ({ reviews, id, className }: ReviewCarouselProps) => {
  const reviewPre = `review-pre-${id}`
  const reviewNext = `review-next-${id}`

  return (
    <div className={cn('relative px-6', className)}>
      <Swiper
        className='w-full'
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={40}
        navigation={{
          prevEl: `.${reviewPre}`,
          nextEl: `.${reviewNext}`,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselPrevButton className={cn('-left-12', reviewPre)} />
      <CarouselNextButton className={cn('-right-12', reviewNext)} />
    </div>
  )
}

export default CustomerReviewCarousel
