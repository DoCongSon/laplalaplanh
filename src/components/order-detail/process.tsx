'use client'
import Checkbox from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

type ProcessItemProps = {
  title: string
  date: string
  itemFirst?: boolean
  itemLast?: boolean
}

const ProcessItem = ({ date, title, itemFirst, itemLast }: ProcessItemProps) => {
  return (
    <div
      className={cn(
        'space-y-3 max-w-[10.5rem] flex flex-col items-center',
        itemFirst && 'items-start',
        itemLast && 'items-end'
      )}>
      <p className='font-semibold h-5 text-sm text-primary-6 line-clamp-1'>{date}</p>
      <Checkbox className={cn('w-8 h-8 pointer-events-none')} iconClassName={cn('w-5 h-5')} selected />
      <p
        className={cn(
          'font-semibold text-sm text-primary-6 line-clamp-2 text-center',
          itemFirst && 'text-start',
          itemLast && 'text-end'
        )}>
        {title}
      </p>
    </div>
  )
}

type ProcessProps = {
  progress: 'order' | 'payment' | 'delivery' | 'complete'
  date: [string, string, string, string]
}

const Process = ({ date, progress }: ProcessProps) => {
  const widthProcess = {
    order: '0%',
    payment: '33.3333%',
    delivery: 'calc(66.6666% - 2rem)',
    complete: '100%',
  }

  return (
    <div className='relative'>
      <div className='flex justify-between'>
        <ProcessItem itemFirst date={date[0]} title='Đơn hàng đã đặt' />
        <ProcessItem date={date[1]} title='Đã xác nhận thanh toán chuyển khoản' />
        <ProcessItem date={date[2]} title='Đã bàn giao cho đơn vị vận chuyển' />
        <ProcessItem itemLast date={date[3]} title='Đã giao hàng thành công' />
      </div>
      <div className='w-full h-[0.625rem] bg-neutral-3 absolute top-11 left-0 -z-20'></div>
      <div
        style={{ width: widthProcess[progress] }}
        className='h-[0.625rem] bg-warning-4 absolute top-11 left-0 -z-10'></div>
    </div>
  )
}
export default Process
