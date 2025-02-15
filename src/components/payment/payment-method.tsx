'use client'
import CardSection from '@/components/payment/card-section'
import OptionItem from '@/components/payment/option-item'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type PaymentMethodProps = {
  value: 'cod' | 'vnpay' | 'bank-transfer'
  onChange: (value: 'cod' | 'vnpay' | 'bank-transfer') => void
}

const PaymentMethod = ({ value, onChange }: PaymentMethodProps) => {
  return (
    <CardSection title='Trạng thái đăng nhập'>
      <OptionItem selected={value === 'cod'} onClick={() => onChange('cod')}>
        Thanh toán khi nhận hàng (COD)
      </OptionItem>
      <OptionItem selected={value === 'vnpay'} onClick={() => onChange('vnpay')}>
        Cổng thanh toán trực tuyến VNPAY
      </OptionItem>
      <OptionItem selected={value === 'bank-transfer'} onClick={() => onChange('bank-transfer')}>
        <p>Thanh toán chuyển khoản</p>
        <div className={cn('text-[#8C8D8F] font-normal flex gap-2', value === 'bank-transfer' ? 'flex' : 'hidden')}>
          <Image
            className='p-2 w-[8.25rem] h-[9.25rem] rounded-xl bg-white'
            src='/images/bank-transfer.jpg'
            width={132}
            height={148}
            alt='bank-transfer'
          />
          <div className='flex-1 flex flex-col justify-between'>
            <p>
              Ngân hàng: <b>Vietcombank - Chi nhánh Nam Bình Dương</b>
            </p>
            <p>
              Số tài khoản: <b>0411008899999</b>
            </p>
            <p>
              Chủ tài khoản: <b>NGO THI THU TRANG</b>
            </p>
            <p>
              Nội dung: <b>Mã đơn hàng</b> (mã này do hệ thống cung cấp sau khi đặt hàng thành công)
            </p>
            <p>
              <b>Lưu ý:</b> Sau khi hoàn tất chuyển khoản, Quý khách vui lòng gửi biên lai chuyển tiền qua tin nhắn
              facebook Lấp La Lấp Lánh để được xác nhận đơn hàng trong thời gian ngắn nhất. Lấp Lánh chân thành cảm ơn.
            </p>
          </div>
        </div>
      </OptionItem>
    </CardSection>
  )
}
export default PaymentMethod
