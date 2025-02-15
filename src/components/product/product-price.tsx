import { cn, priceFormat } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type ProductPriceProps = {
  price: number
  salePrice?: number
  className?: string
}

const ProductPrice = ({ price, salePrice, className }: ProductPriceProps) => {
  if (!salePrice) {
    return (
      <p className={cn('text-lg leading-5 font-semibold uppercase text-primary-4', className)}>{priceFormat(price)}</p>
    )
  }
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <p className='text-xs leading-normal line-through text-neutral-4'>{priceFormat(price)}</p>
      <p className='text-lg leading-5 font-semibold uppercase text-error-6'>{priceFormat(salePrice)}</p>
      <div className='flex items-center gap-0.5 p-0.5 rounded-sm bg-orange-gradient'>
        <Image src='/icons/icon-star-2.svg' alt='' width={11} height={11} />
        <p className='heading-6'>SALE</p>
      </div>
    </div>
  )
}

export default ProductPrice
