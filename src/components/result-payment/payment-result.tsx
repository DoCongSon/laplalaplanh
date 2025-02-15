'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type PaymentResultProps = {
  status: 'success' | 'error' | 'pending'
  orderCode: string
  className?: string
}

const PaymentResult = ({ status, orderCode, className }: PaymentResultProps) => {
  const title = {
    success: 'Đặt hàng thành công',
    error: 'Đang chờ xác nhận chuyển khoản',
    pending: 'Giao dịch không thành công',
  }

  const handleCopyOrderCode = async () => {
    try {
      await navigator.clipboard.writeText(orderCode)
      alert('Đã sao chép mã đơn hàng')
    } catch (error) {
      console.error('Error copying text: ', error)
    }
  }

  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <h3 className='heading-1 text-primary-6 font-semibold'>{title[status]}</h3>
      <div className='flex items-center gap-[0.625rem] px-2 py-1 bg-primary-6 rounded-full'>
        <p className='text-xs font-semibold leading-5 uppercase text-secondary-4'>
          Mã đơn hàng: <span className='font-bold'>{orderCode}</span>
        </p>
        <Image
          onClick={handleCopyOrderCode}
          src='/icons/icon-copy.svg'
          width={20}
          height={20}
          alt=''
          className='w-5 h-5 cursor-pointer'
        />
      </div>
      <div className='flex items-center flex-col gap-6 text-xs leading-tight text-primary-6 w-[25rem] mx-auto text-center'>
        {status === 'error' ? (
          <p>
            Quý khách vui lòng thao tác <b>Đặt lại đơn hàng</b> hoặc liên hệ Hotline <b>093.113.0729</b> để được hỗ trợ.
          </p>
        ) : (
          <>
            <p>
              Thông tin chi tiết đơn hàng đã được gửi đến địa chỉ email: <b>ngovuviethoang.0110@gmail.com</b>
            </p>
            <p>
              Trường hợp không thấy email, quý khách vui lòng kiểm tra thư mục Spam hoặc liên hệ Hotline{' '}
              <b>093.113.0729</b> để được hỗ trợ.
            </p>
          </>
        )}
        <p>Lấp La Lấp Lánh chân thành cảm ơn!</p>
      </div>
    </div>
  )
}
export default PaymentResult
