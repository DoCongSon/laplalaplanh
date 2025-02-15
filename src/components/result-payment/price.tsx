import { Button } from '@/components/ui/button'
import { priceFormat } from '@/lib/utils'
import Link from 'next/link'

type PriceProps = {
  totalProduct: number
  totalPrices: number
  discount: number
  voucherDiscount?: number
}

const Price = ({ totalProduct, totalPrices, discount, voucherDiscount }: PriceProps) => {
  const handleCancelOrder = () => {
    console.log('cancel order')
  }

  return (
    <div className='flex justify-end px-[3.25rem] bg-secondary-4 mt-2'>
      <div className='p-4 min-w-[24.0625rem]'>
        <div className='pb-4 border-b border-primary-3'>
          <div className='flex items-center justify-between'>
            <p className='text-sm text-black'>Tổng tiền ({totalProduct} sản phẩm)</p>
            <p className='text-black font-semibold uppercase'>{priceFormat(totalPrices)}</p>
          </div>
          <div className='flex items-center justify-between mt-2'>
            <p className='text-sm text-black'>Giảm giá</p>
            <p className='text-black font-semibold uppercase'>{priceFormat(discount)}</p>
          </div>
          {voucherDiscount && voucherDiscount !== 0 && (
            <div className='flex items-center justify-between mt-2'>
              <p className='text-sm text-black'>
                Voucher <br /> <span className='text-[#0084C9]'>FREE</span>
              </p>
              <p className='text-black font-semibold uppercase'>{priceFormat(voucherDiscount)}</p>
            </div>
          )}
          <div className='flex items-center justify-between mt-2'>
            <p className='text-sm text-black'>Phí vận chuyển</p>
            <p className='text-[#A4A4A4] text-xs leading-5'>báo qua điện thoại</p>
          </div>
        </div>
        <div className='py-6'>
          <div className='flex items-start justify-between'>
            <div>
              <p className='text-sm text-black'>Tổng thanh toán</p>
              <p className='paragraph-2 text-neutral-5'>(Đã bao gồm VAT)</p>
            </div>
            <p className='text-error-6 font-semibold uppercase'>
              {priceFormat(totalPrices - discount - (voucherDiscount ?? 0))}
            </p>
          </div>
        </div>
        <div className='flex justify-center gap-2 items-center'>
          <Link href='/' className='w-full'>
            <Button className='uppercase w-full' variant='outline'>
              Về trang chủ
            </Button>
          </Link>
          <Button onClick={handleCancelOrder} className='uppercase w-full'>
            Huỷ đơn hàng
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Price
