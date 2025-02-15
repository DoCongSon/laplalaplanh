import Checkbox from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

export type EstimatedDeliveryDateProps = {
  title: string
  description?: React.ReactNode
  note: React.ReactNode
}

const EstimatedDeliveryDate = ({ note, title, description }: EstimatedDeliveryDateProps) => {
  return (
    <div
      className={cn(
        'flex gap-2 px-2 py-3 rounded-lg border text-sm items-center transition-all duration-300 relative border-warning-6 bg-warning-2 font-semibold text-primary-5'
      )}>
      <Checkbox selected />
      <div className='flex-1'>
        <p className='text-warning-8'>{title}</p>
        <div className='text-[#8C8D8F] font-normal'>
          {description}
          <p className='text-sm text-center font-semibold text-warning-8 bg-warning-3 px-2 leading-5 rounded absolute right-2 bottom-3'>
            {note}
          </p>
        </div>
      </div>
    </div>
  )
}
export default EstimatedDeliveryDate
