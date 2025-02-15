'use client'
import CardSection from '@/components/payment/card-section'
import OptionItem from '@/components/payment/option-item'
import { deliveryMethods, DeliveryMethodType } from '@/constants'
import { cn } from '@/lib/utils'

type MethodItemProps = DeliveryMethodType & {
  selected: boolean
  onClick: () => void
}

const MethodItem = ({ title, description, selected, onClick, note }: MethodItemProps) => {
  return (
    <OptionItem selected={selected} onClick={onClick}>
      <p>{title}</p>
      <div className={cn('text-[#8C8D8F] font-normal', !selected && 'hidden')}>
        {description}
        <p className='text-sm text-center font-semibold text-warning-8 bg-warning-3 px-2 leading-5 rounded absolute right-2 bottom-3'>
          {note}
        </p>
      </div>
    </OptionItem>
  )
}

type DeliveryMethodProps = {
  value: DeliveryMethodType
  onChange: (value: DeliveryMethodType) => void
}

const DeliveryMethod = ({ value, onChange }: DeliveryMethodProps) => {
  return (
    <CardSection title='Trạng thái đăng nhập'>
      {deliveryMethods.map((method, index) => (
        <MethodItem
          key={index}
          title={method.title}
          description={method.description}
          selected={value === method}
          onClick={() => onChange(method)}
          note={method.note}
        />
      ))}
    </CardSection>
  )
}
export default DeliveryMethod
