import CardSection from '@/components/payment/card-section'
import OptionItem from '@/components/payment/option-item'
import { cn } from '@/lib/utils'

type DeliveryProps = {
  value: 'one-time' | 'multiple-time' | null
  onChange: (value: 'one-time' | 'multiple-time' | null) => void
}

const Delivery = ({ value, onChange }: DeliveryProps) => {
  return (
    <CardSection title='Số lần giao hàng'>
      <OptionItem selected={value === 'one-time'} onClick={() => onChange('one-time')}>
        <p>Giao hàng 01 lần</p>
        <p className={cn('text-[#8C8D8F] font-normal', value === 'one-time' ? 'block' : 'hidden')}>
          <span className='font-bold'>Lưu ý:</span> Chờ hàng order về đủ sau 10-15 ngày làm việc rồi giao 1 lần
        </p>
      </OptionItem>
      <OptionItem selected={value === 'multiple-time'} onClick={() => onChange('multiple-time')}>
        <p>Giao hàng nhiều lần</p>
        <div className={cn('text-[#8C8D8F] font-normal', value === 'multiple-time' ? 'block' : 'hidden')}>
          <p className='font-bold'>Lưu ý:</p>
          <ul className='list-disc pl-6'>
            <li>Hàng có sẵn được giao trước. Hàng order giao sau 10-15 ngày làm việc.</li>
            <li>Phí vận chuyển được tính riêng cho từng lần giao hàng.</li>
          </ul>
        </div>
      </OptionItem>
    </CardSection>
  )
}
export default Delivery
