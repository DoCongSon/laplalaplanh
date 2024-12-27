import { cn } from '@/lib/utils'
import React from 'react'
import ImageProductCarousel from '../carousel/image-product-carousel'

type ProductViewedProps = {
  productImages: string[]
  className?: string
  id: string
}

const ProductViewed = ({ productImages, className, id }: ProductViewedProps) => {
  return (
    <div className={cn(className)}>
      <h2 className={cn('title leading-normal inline-block text-transparent bg-clip-text bg-primary-6')}>
        Sản phẩm đã xem
      </h2>
      <ImageProductCarousel
        images={productImages}
        id={id}
        className='mt-8 w-full h-[10.8125rem] px-6'
        imageClassName='h-[10.8125rem] w-[10.75rem] hover:border-[3px] hover:border-primary-6 transition-all duration-300'
        nextClassName='-right-12'
        prevClassName='-left-12'
        slidesPerView={6}
        spaceBetween={40}
      />
    </div>
  )
}

export default ProductViewed
