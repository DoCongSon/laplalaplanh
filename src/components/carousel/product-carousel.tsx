'use client'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard, { ProductCardProps } from '../product/product-card'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { cn } from '@/lib/utils'
import CarouselPrevButton from './carousel-prev-button'
import CarouselNextButton from './carousel-next-button'

type ProductCarouselProps = {
  products: ProductCardProps[]
  id: string
  className?: string
}

const ProductCarousel = ({ products, id, className }: ProductCarouselProps) => {
  const productPre = `product-pre-${id}`
  const productNext = `product-next-${id}`

  return (
    <div className={cn('relative px-6', className)}>
      <Swiper
        className='w-full'
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={24}
        navigation={{
          prevEl: `.${productPre}`,
          nextEl: `.${productNext}`,
        }}>
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselPrevButton className={cn('-left-12', productPre)} />
      <CarouselNextButton className={cn('-right-12', productNext)} />
    </div>
  )
}

export default ProductCarousel
