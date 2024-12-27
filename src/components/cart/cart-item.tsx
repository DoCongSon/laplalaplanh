import Star from '@/components/icons/star'
import { Button } from '@/components/ui/button'
import Checkbox from '@/components/ui/checkbox'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { cn, priceFormat } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

type CartItemProps = {
  type?: 'order' | 'custom' | 'available'
  outOfStock?: boolean
  name: string
  image: string
  price: number
  salePrice?: number
  natures?: string[]
  className?: string
  sizes?: { value: string; outOfStock: boolean }[]
  colors?: { value: string; outOfStock: boolean }[]
  quantity: number
  checked: boolean
  onFavorite?: () => void
  onRemove?: () => void
  onIncrease?: () => void
  onDecrease?: () => void
  onCheck?: () => void
}

const CartItem = (props: CartItemProps) => {
  const {
    checked,
    name,
    price,
    quantity,
    className,
    image,
    outOfStock,
    onCheck,
    onDecrease,
    onFavorite,
    onIncrease,
    onRemove,
    salePrice,
    colors,
    sizes,
    type,
    natures,
  } = props
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

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

  const status = {
    available: 'Hàng có sẵn',
    custom: 'Hàng order tên riêng đặt cọc 100%',
    order: 'Hàng order đặt cọc 30%',
    outOfStock: 'Sản phẩm tạm hết hàng, vui lòng xoá',
  }

  return (
    <div className={cn('w-[56.8125rem] py-4 flex items-center border-b border-neutral-3', className)}>
      <Checkbox className='mx-4 rounded' selected={checked} onClick={onCheck} />
      <div className='flex gap-4 items-start w-[23.625rem]'>
        <Image src={image} width={100} height={100} alt={name} className='rounded-[0.3125rem]' />
        <div className='flex-1'>
          <div className='flex flex-col gap-1 items-start'>
            <h3 className='text-base font-semibold text-primary-10 line-clamp-2'>{name}</h3>
            {outOfStock && <p className='paragraph-2 text-error-4 p-1 rounded bg-error-2'>{status.outOfStock}</p>}
            {!outOfStock && type && <p className='text-[#C41B24] font-semibold leading-5 text-sm'>{status[type]}</p>}
            <HoverCard>
              <HoverCardTrigger>
                <div className='inline-flex gap-1 items-center p-1 rounded bg-neutral-3 cursor-pointer'>
                  <p className='paragraph-2 text-neutral-7'>Phân loại: {natures?.join(', ')}</p>
                  <Image src='/icons/icon-down.svg' width={16} height={16} alt='star' />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className='w-[22.9375rem] p-5 rounded bg-secondary-4'>
                <div>
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
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='25'
                              height='31'
                              viewBox='0 0 25 31'
                              fill='none'>
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
                <div className='mt-6 flex items-center justify-end gap-1'>
                  <Button size='sm' variant='outline'>
                    Trở lại
                  </Button>
                  <Button size='sm'>Xác nhận</Button>
                </div>
              </HoverCardContent>
            </HoverCard>
            <div className='flex gap-2'>
              <button
                onClick={onFavorite}
                className='flex items-center justify-center gap-1 paragraph-2 text-primary-6 hover:underline'>
                <Star className='w-4 h-4' fill='#344B4E' />
                Yêu thích
              </button>
              <button
                onClick={onRemove}
                className='flex items-center justify-center gap-1 paragraph-2 text-primary-6 hover:underline'>
                <Image alt='' src='/icons/icon-trash.svg' height={16} width={16} />
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-1 items-center justify-center w-[10rem] ml-4'>
        {salePrice ? (
          <>
            <p className='font-semibold text-primary-6'>{priceFormat(salePrice)}</p>
            <p className='font-semibold text-sm text-neutral-4 line-through'>{priceFormat(price)}</p>
          </>
        ) : (
          <p className='font-semibold text-primary-6'>{priceFormat(price)}</p>
        )}
      </div>
      <div className='flex flex-col gap-1 items-center justify-center w-[7.5rem]'>
        <div className='inline-flex items-center justify-center gap-[0.625rem] rounded-full border border-neutral-5 bg-neutral-1 shadow-button-secondary px-2 py-1'>
          <Image
            src='/icons/icon-minus.svg'
            alt=''
            width={16}
            height={16}
            className='cursor-pointer'
            onClick={onDecrease}
          />
          <p className='text-xs font-semibold text-primary-4'>{quantity}</p>
          <Image
            src='/icons/icon-plus.svg'
            alt=''
            width={16}
            height={16}
            className='cursor-pointer'
            onClick={onIncrease}
          />
        </div>
      </div>
      <div className='flex flex-col gap-1 items-center justify-center w-[10rem]'>
        <p className='font-semibold text-primary-6'>{priceFormat(price * quantity)}</p>
      </div>
    </div>
  )
}
export default CartItem
