'use client'
import React from 'react'
import ProductPrice from './product-price'
import { Separator } from '@radix-ui/react-separator'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import ProductTag, { ProductTagProps } from './product-tag'
import { Input } from '../ui/input'
import Image from 'next/image'
import Star from '../icons/star'
import Bag from '../icons/bag'

type ProductNatureProps = {
  tags?: ProductTagProps['tag'][]
  type?: 'order' | 'custom' | 'available'
  name: string
  price: number
  salePrice?: number
  className?: string
  sizes?: { value: string; outOfStock: boolean }[]
  colors?: { value: string; outOfStock: boolean }[]
  onAddToCart?: () => void
  onBuyNow?: () => void
  onFavorite?: () => void
}

const ProductNature = ({
  name,
  price,
  className,
  salePrice,
  sizes,
  colors,
  tags,
  type,
  onAddToCart,
  onBuyNow,
  onFavorite,
}: ProductNatureProps) => {
  const [quantity, setQuantity] = React.useState(1)
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null)
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null)

  const handleSelectSize = (size: { value: string; outOfStock: boolean }) => {
    if (!size.outOfStock) {
      setSelectedSize(size.value)
    }
  }

  const handleSelectColor = (color: { value: string; outOfStock: boolean }) => {
    if (!color.outOfStock) {
      setSelectedColor(color.value)
    }
  }

  const handleChangeQuantity = (value: number) => {
    if (value > 0) {
      setQuantity(value)
    }
  }

  const handleClear = () => {
    setSelectedColor(null)
    setSelectedSize(null)
  }

  const typeStatus = {
    available: 'Hàng có sẵn',
    custom: 'Hàng order tên riêng đặt cọc 100%. Hàng sẽ về sau 10-15 ngày làm việc.',
    order: 'Hàng order đặt cọc 30%. Hàng sẽ về sau 10-15 ngày làm việc.',
  }

  return (
    <div className={className}>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-1'>
          {tags?.map((tag, index) => (
            <ProductTag key={index} tag={tag} />
          ))}
        </div>
        <h3 className='heading-3 text-black'>{name}</h3>
        <ProductPrice price={price} salePrice={salePrice} />
        {type && <p className='paragraph-2 text-[#C41B24]'>{typeStatus[type]}</p>}
      </div>
      <Separator className='mt-5' />
      <div className='mt-5'>
        <h6 className='heading-6 text-primary-9'>Màu sắc & Hoạ tiết:</h6>
        <div className='flex flex-wrap gap-3 mt-3'>
          {colors?.map((color, index) => (
            <div
              onClick={() => handleSelectColor(color)}
              key={index}
              className={cn(
                'w-11 h-11 rounded-full p-[1px] flex items-center justify-center border-[3px] cursor-pointer',
                selectedColor === color.value ? 'border-primary-6' : 'border-transparent',
                color.outOfStock && 'opacity-60 pointer-events-none'
              )}>
              <div
                className={cn('w-full h-full rounded-full flex items-center justify-center')}
                style={{ backgroundColor: color.value }}>
                {color.outOfStock && (
                  <svg xmlns='http://www.w3.org/2000/svg' width='25' height='31' viewBox='0 0 25 31' fill='none'>
                    <path d='M23.4019 1.30041L2 30.0004' stroke='#121212' strokeWidth='3' />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-5'>
        <h6 className='heading-6 text-primary-9'>Kích cỡ:</h6>
        <div className='flex flex-wrap gap-3 mt-3'>
          {sizes?.map((size, index) => (
            <Button
              key={index}
              onClick={() => handleSelectSize(size)}
              size='sm'
              variant={selectedSize === size.value ? 'default' : 'outline'}
              disabled={size.outOfStock}>
              {size.value}
            </Button>
          ))}
        </div>
      </div>
      <button
        onClick={handleClear}
        className='mt-5 flex items-center justify-center gap-2 p-0.5 border-b border-black heading-6 text-primary-9'>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.28015 3.22082C4.13798 3.08834 3.94993 3.01622 3.75563 3.01965C3.56133 3.02308 3.37594 3.10179 3.23853 3.2392C3.10112 3.37661 3.02241 3.562 3.01898 3.7563C3.01555 3.9506 3.08767 4.13865 3.22015 4.28082L6.94015 8.00082L3.22015 11.7208C3.14647 11.7895 3.08736 11.8723 3.04637 11.9643C3.00538 12.0563 2.98334 12.1556 2.98156 12.2563C2.97979 12.357 2.99831 12.457 3.03603 12.5504C3.07375 12.6438 3.1299 12.7286 3.20112 12.7999C3.27233 12.8711 3.35717 12.9272 3.45056 12.9649C3.54394 13.0027 3.64397 13.0212 3.74468 13.0194C3.84538 13.0176 3.94469 12.9956 4.03669 12.9546C4.12869 12.9136 4.21149 12.8545 4.28015 12.7808L8.00015 9.06082L11.7202 12.7808C11.7888 12.8545 11.8716 12.9136 11.9636 12.9546C12.0556 12.9956 12.1549 13.0176 12.2556 13.0194C12.3563 13.0212 12.4564 13.0027 12.5498 12.9649C12.6431 12.9272 12.728 12.8711 12.7992 12.7999C12.8704 12.7286 12.9266 12.6438 12.9643 12.5504C13.002 12.457 13.0205 12.357 13.0187 12.2563C13.017 12.1556 12.9949 12.0563 12.9539 11.9643C12.9129 11.8723 12.8538 11.7895 12.7802 11.7208L9.06015 8.00082L12.7802 4.28082C12.9126 4.13865 12.9848 3.9506 12.9813 3.7563C12.9779 3.562 12.8992 3.37661 12.7618 3.2392C12.6244 3.10179 12.439 3.02308 12.2447 3.01965C12.0504 3.01622 11.8623 3.08834 11.7202 3.22082L8.00015 6.94082L4.28015 3.22082Z'
            fill='#344B4E'
          />
        </svg>
        CLEAR
      </button>
      <Separator className='mt-5' />
      <div className='mt-5'>
        <h6 className='heading-6 text-primary-9'>Ghi chú:</h6>
        <Input className='mt-3' placeholder='Nhập ghi chú cho sản phẩm' />
      </div>
      <div className='mt-4 flex items-center gap-2'>
        <div className='inline-flex items-center justify-center gap-3 rounded-full text-xs font-semibold border-2 border-primary-4 text-primary-4 shadow-button-secondary px-5 py-3'>
          <Image
            src='/icons/icon-minus.svg'
            alt=''
            width={16}
            height={16}
            className='cursor-pointer'
            onClick={() => handleChangeQuantity(quantity - 1)}
          />
          <p className='w-[2.125rem] text-center'>{quantity}</p>
          <Image
            src='/icons/icon-plus.svg'
            alt=''
            width={16}
            height={16}
            className='cursor-pointer'
            onClick={() => handleChangeQuantity(quantity + 1)}
          />
        </div>
        <Button onClick={onAddToCart} variant='outline'>
          <Bag stroke='#29433e' />
          Thêm vào giỏ hàng
        </Button>
        <Button onClick={onFavorite} variant='outline'>
          <Star stroke='#29433e' />
          Yêu thích
        </Button>
      </div>
      <Button onClick={onBuyNow} className='w-full mt-4'>
        MUA NGAY
      </Button>
    </div>
  )
}

export default ProductNature
