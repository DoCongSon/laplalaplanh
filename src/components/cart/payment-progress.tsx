import Checkbox from '@/components/ui/checkbox'
import { paymentProgressItem, paymentProgressItems } from '@/constants'
import { cn } from '@/lib/utils'

type PaymentProgressProps = {
  progress: paymentProgressItem['progress']
  className?: string
}

const PaymentProgress = ({ progress, className }: PaymentProgressProps) => {
  const progressIndex = paymentProgressItems.findIndex((item) => item.progress === progress)

  return (
    <div className={cn('flex items-center gap-4 w-[77rem]', className)}>
      {paymentProgressItems.map((item, index) => {
        if (index === 0) {
          return (
            <div key={index} className='flex items-center gap-2'>
              <Checkbox
                className={cn('w-8 h-8 pointer-events-none', index > progressIndex && 'bg-neutral-1 border-neutral-4')}
                iconClassName={cn('w-4 h-4')}
                stroke={index > progressIndex ? '#bbbcbf' : undefined}
                selected
              />
              <div>
                <h4 className={cn('heading-4 normal-case text-primary-10', index > progressIndex && 'text-neutral-6')}>
                  {item.name}
                </h4>
                <p className={cn('paragraph-1 text-neutral-7', index > progressIndex && 'text-neutral-6')}>
                  {item.description}
                </p>
              </div>
            </div>
          )
        }

        return (
          <div key={index} className='flex items-center gap-4 flex-1'>
            <div className={cn('bg-primary-6 h-[1px] flex-1', index > progressIndex && 'bg-neutral-4')} />
            <div className='flex items-center gap-2'>
              <Checkbox
                className={cn('w-8 h-8 pointer-events-none', index > progressIndex && 'bg-neutral-1 border-neutral-4')}
                iconClassName={cn('w-4 h-4')}
                stroke={index > progressIndex ? '#bbbcbf' : undefined}
                selected
              />
              <div>
                <h4 className={cn('heading-4 normal-case text-primary-10', index > progressIndex && 'text-neutral-6')}>
                  {item.name}
                </h4>
                <p className={cn('paragraph-1 text-neutral-7', index > progressIndex && 'text-neutral-6')}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PaymentProgress
