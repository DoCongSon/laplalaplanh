import { Button } from '@/components/ui/button'
import { cn, priceFormat } from '@/lib/utils'
import Link from 'next/link'

type PriceProps = {
  totalPrices: number
  totalProduct: number
  discount: number
  deliveryFee: number
  voucherDiscount?: number
  deposit?: number
  depositProduct?: number
  className?: string
  onSubmit?: () => void
}

const Price = ({
  deliveryFee,
  discount,
  totalPrices,
  totalProduct,
  deposit,
  depositProduct,
  voucherDiscount,
  className,
  onSubmit,
}: PriceProps) => {
  return (
    <div
      className={cn(
        'w-[18.5rem] p-4 pt-7 flex flex-col gap-6 rounded-lg shadow-basic-bottom bg-secondary-4 border border-neutral-4',
        className
      )}>
      <div className='flex items-center justify-between'>
        <h3 className='font-semibold uppercase leading-none text-black'>Đơn hàng</h3>
        <Link href='/cart' className='text-xs font-semibold text-neutral-7'>
          Quay lại giỏ hàng
        </Link>
      </div>
      <div className='pb-4 border-b border-primary-3'>
        <div className='flex items-center justify-between'>
          <p className='text-sm text-black'>Tổng tiền ({totalProduct} sản phẩm)</p>
          <p className='text-black font-semibold uppercase'>{priceFormat(totalPrices)}</p>
        </div>
        <div className='flex items-center justify-between mt-2'>
          <p className='text-sm text-black'>Giảm giá sản phẩm</p>
          <p className='text-black font-semibold uppercase'>{priceFormat(discount)}</p>
        </div>
        {voucherDiscount && voucherDiscount !== 0 && (
          <div className='flex items-center justify-between mt-2'>
            <p className='text-sm text-black'>
              Giảm giá voucher <br /> <span className='text-[#0084C9]'>FREE</span>
            </p>
            <p className='text-black font-semibold uppercase'>{priceFormat(voucherDiscount)}</p>
          </div>
        )}
        <div className='flex items-center justify-between mt-2'>
          <p className='text-sm text-black'>Phí vận chuyển</p>
          <p className='text-black font-semibold uppercase'>{priceFormat(deliveryFee)}</p>
        </div>
      </div>
      <div className='pb-4 border-b border-primary-3'>
        <div className='flex items-start justify-between'>
          <div>
            <p className='text-sm text-black'>Tổng thanh toán</p>
            <p className='paragraph-2 text-neutral-5'>(Đã bao gồm VAT)</p>
          </div>
          <p className='text-error-6 font-semibold uppercase'>
            {priceFormat(totalPrices - discount - Number(voucherDiscount) + deliveryFee)}
          </p>
        </div>
      </div>
      {deposit && deposit !== 0 && depositProduct && (
        <div className='pb-4 border-b border-primary-3'>
          <div className='flex items-center justify-between'>
            <p className='text-sm text-black'>Đặt cọc ({depositProduct} sản phẩm)</p>
            <p className='text-error-6 font-semibold uppercase'>{priceFormat(deposit)}</p>
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-black'>Còn lại</p>
              <p className='paragraph-2 text-neutral-5'>(Thanh toán khi nhận hàng)</p>
            </div>
            <p className='text-error-6 font-semibold uppercase'>
              {priceFormat(totalPrices - discount - Number(voucherDiscount) + deliveryFee - deposit)}
            </p>
          </div>
        </div>
      )}
      <Button onClick={onSubmit} className='uppercase w-full'>
        Đặt hàng
      </Button>
      <p className='text-[0.625rem] text-neutral-5'>
        Đã bao gồm VAT, phí đóng gói, phí vận chuyển và các chi phí khác vui lòng xem
        <Link className='text-[#007BA4]' href='#'>
          Chính sách giao hàng
        </Link>
      </p>
    </div>
  )
}
export default Price
