import { cn, priceFormat } from '@/lib/utils'
import Link from 'next/link'

type StatusProps = {
  status: 'CHỜ XÁC NHẬN' | 'ĐANG XỬ LÝ' | 'CHỜ THANH TOÁN' | 'ĐANG GIAO HÀNG' | 'HOÀN TẤT' | 'ĐÃ HỦY' | 'TRẢ HÀNG'
}

const Status = ({ status }: StatusProps) => {
  const bg = {
    'CHỜ XÁC NHẬN': 'bg-[#FFE9B9]',
    'ĐANG XỬ LÝ': 'bg-[#FFE9B9]',
    'CHỜ THANH TOÁN': 'bg-[#FFE9B9]',
    'ĐANG GIAO HÀNG': 'bg-[#FFE9B9]',
    'HOÀN TẤT': 'bg-[#FFE9B9]',
    'ĐÃ HỦY': 'bg-neutral-4',
    'TRẢ HÀNG': 'bg-neutral-4',
  }

  return (
    <p
      className={cn(
        'h-9 p-2 rounded w-full flex items-center justify-center text-sm font-semibold tracking-[0.0175rem] text-neutral-10',
        bg[status]
      )}>
      {status}
    </p>
  )
}

export type ListOrderProps = {
  items: {
    id: string
    date: string
    total: number
    status: StatusProps['status']
  }[]
}

const headings = [
  'Mã đơn hàng',
  'Ngày mua',
  'Tổng thanh toán',
  'Trạng thái',
  'Chi tiết đơn hàng',
  'Thao tác',
  'Đánh giá',
]

const ListOrder = ({ items }: ListOrderProps) => {
  return (
    <div>
      <div className='h-16 bg-secondary-4 rounded-t-3xl grid grid-cols-7'>
        {headings.map((heading, index) => (
          <div
            key={index}
            className='text-sm leading-4 uppercase text-black tracking-[0.04375rem] flex items-center justify-center'>
            {heading}
          </div>
        ))}
      </div>
      {items.map((item, index) => {
        return (
          <div key={index} className={cn('h-[4.75rem] grid grid-cols-7', index % 2 === 0 && 'bg-neutral-2')}>
            <div className='text-sm font-semibold tracking-[0.0175rem] text-primary-6 flex items-center justify-center'>
              {item.id}
            </div>
            <div className='text-sm font-semibold tracking-[0.0175rem] text-primary-6 flex items-center justify-center'>
              {item.date}
            </div>
            <div className='text-sm font-semibold tracking-[0.0175rem] text-primary-6 flex items-center justify-center'>
              {priceFormat(item.total)}
            </div>
            <div className='flex items-center justify-center'>
              <Status status={item.status} />
            </div>
            <div className='text-sm font-semibold tracking-[0.0175rem] text-primary-6 flex items-center justify-center'>
              <Link href='#'>Xem chi tiết</Link>
            </div>
            <div className='text-sm font-semibold tracking-[0.0175rem] text-primary-6 flex items-center justify-center'>
              <Link href='#'>Mua lại</Link>
            </div>
            <div className='text-sm font-semibold tracking-[0.0175rem] text-primary-6 flex items-center justify-center'>
              <Link href='#'>Cập nhật đánh giá</Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default ListOrder
