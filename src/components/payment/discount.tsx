'use client'
import CardSection from '@/components/payment/card-section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type DiscountProps = {
  onSubmit: (values: string) => void
  state?: 'success' | 'error' | null
  onChange: (value: string) => void
  value: string
}

const Discount = ({ onSubmit, state, onChange, value }: DiscountProps) => {
  return (
    <CardSection title='Mã giảm giá'>
      <div className={cn('flex justify-between items-start relative transition-all duration-300', state && 'mb-2')}>
        <Input
          className='max-w-[41.75rem]'
          placeholder='Nhập mã giảm giá'
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {state === 'error' && (
          <p className='paragraph-2 text-[#C41B24] absolute left-0 top-14'>
            Mã giảm giá không áp dụng cho sản phẩm giảm giá hoặc khuyến mãi khác
          </p>
        )}
        {state === 'success' && (
          <p className='paragraph-2 text-green-500 absolute left-0 top-14'>Mã giảm giá đã được áp dụng</p>
        )}
        <Button onClick={() => onSubmit(value)}>Áp dụng</Button>
      </div>
    </CardSection>
  )
}
export default Discount
