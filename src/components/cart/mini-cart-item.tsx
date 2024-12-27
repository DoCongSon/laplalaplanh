import ProductPrice from '@/components/product/product-price'
import Image from 'next/image'

type MiniCartItemProps = {
  image: string
  name: string
  price: number
  quantity: number
  note?: string
  natures?: string[]
  salePrice?: number
  onIncrease?: () => void
  onDecrease?: () => void
  onRemove?: () => void
}

const MiniCartItem = ({
  image,
  name,
  price,
  quantity,
  note,
  onDecrease,
  onIncrease,
  onRemove,
  salePrice,
  natures,
}: MiniCartItemProps) => {
  return (
    <div className='flex gap-4 pb-2 border-b border-neutral-7 items-start'>
      <Image src={image} width={100} height={100} alt={name} className='rounded-[0.3125rem]' />
      <div className='flex-1'>
        <div className='flex flex-col gap-1 items-start'>
          <div className='flex justify-between items-start gap-2'>
            <h3 className='text-base font-semibold text-primary-10 line-clamp-2'>{name}</h3>
            <Image
              alt=''
              src='/icons/icon-close.svg'
              width={16}
              height={16}
              onClick={onRemove}
              className='cursor-pointer'
            />
          </div>
          {note && <p className='text-[#C41B24] font-semibold leading-5 text-sm'>{note}</p>}
          <div className='inline-flex gap-1 items-center p-1 rounded bg-neutral-3'>
            <p className='paragraph-2 text-neutral-7'>Phân loại: {natures?.join(', ')}</p>
            <Image src='/icons/icon-down.svg' width={16} height={16} alt='star' />
          </div>
        </div>
        <ProductPrice className='mt-3' price={price} salePrice={salePrice} />
        <div className='mt-2 inline-flex items-center justify-center gap-[0.625rem] rounded-full border border-neutral-5 bg-neutral-1 shadow-button-secondary px-2 py-1'>
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
    </div>
  )
}
export default MiniCartItem
