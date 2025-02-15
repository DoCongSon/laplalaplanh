import { Product } from '@/constants'
import { cn, priceFormat } from '@/lib/utils'
import Image from 'next/image'

type ProductItemProps = Product & {
  nature?: string
  className?: string
  quantity: number
}

const status = {
  available: 'Hàng có sẵn',
  custom: 'Hàng order tên riêng đặt cọc 100%',
  order: 'Hàng order đặt cọc 30%',
}

const ProductItem = ({ className, image, name, tags, type, salePrice, price, quantity, nature }: ProductItemProps) => {
  return (
    <div className={cn('w-full py-4 flex items-center border-b border-neutral-3', className)}>
      <div className='flex gap-4 items-start flex-1'>
        <Image src={image} width={100} height={100} alt={name} className='rounded-[0.3125rem]' />
        <div className='flex-1'>
          <div className='flex flex-col gap-1 items-start'>
            <h3 className='text-base font-semibold text-primary-10 line-clamp-2'>{name}</h3>
            {tags && tags.includes('out-of-stock') && (
              <p className='paragraph-2 text-error-4 p-1 rounded bg-error-2'>Sản phẩm tạm hết hàng, vui lòng xoá</p>
            )}
            {type && <p className='text-[#C41B24] font-semibold leading-5 text-sm'>{status[type]}</p>}
            {nature && <p className='paragraph-2 text-neutral-7'>Phân loại: {nature}</p>}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-1 items-center justify-center w-[14rem]'>
        {salePrice ? (
          <>
            <p className='font-semibold text-primary-6'>{priceFormat(salePrice)}</p>
            <p className='font-semibold text-sm text-neutral-4 line-through'>{priceFormat(price)}</p>
          </>
        ) : (
          <p className='heading-6 text-primary-6'>{priceFormat(price)}</p>
        )}
      </div>
      <div className='flex flex-col gap-1 items-center justify-center w-[14rem]'>
        <p className='text-xs font-semibold text-primary-4'>{quantity}</p>
      </div>
      <div className='flex flex-col gap-1 items-center justify-center w-[14rem]'>
        <p className='font-semibold text-primary-6'>{priceFormat(price * quantity)}</p>
      </div>
    </div>
  )
}

type ProductsInfoProps = {
  products: ProductItemProps[]
}

const ProductsInfo = ({ products }: ProductsInfoProps) => {
  return (
    <div>
      <div className='w-full rounded-t-3xl bg-secondary-4  flex'>
        <div className='flex-1 flex items-center px-4 py-5 gap-4'>
          <p className='text-base leading-none font-semibold text-black'>Sản phẩm</p>
        </div>
        <div className='flex items-center justify-center px-4 py-5 gap-4 w-[14rem]'>
          <p className='text-base leading-none font-semibold text-black'>Đơn giá</p>
        </div>
        <div className='flex items-center justify-center px-4 py-5 gap-4 w-[14rem]'>
          <p className='text-base leading-none font-semibold text-black'>Số lượng</p>
        </div>
        <div className='flex items-center justify-center px-4 py-5 gap-4 w-[14rem]'>
          <p className='text-base leading-none font-semibold text-black'>Thành tiền</p>
        </div>
      </div>
      {products.map((product, index) => (
        <ProductItem key={index} {...product} />
      ))}
    </div>
  )
}
export default ProductsInfo
