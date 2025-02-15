import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const Item = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className='flex items-center gap-6'>
      <p className='w-[6rem] text-sm font-semibold text-neutral-5'>{label}</p>
      <p className='flex-1 text-sm text-primary-10'>{value}</p>
    </div>
  )
}

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h3 className='text-base leading-tight text-primary-10 font-semibold'>{children}</h3>
}

const StateItem = ({ state }: { state: 'progress' | 'confirm' | 'cancel' }) => {
  const stateMap = {
    progress: 'Đang xử lý',
    confirm: 'Chờ xác nhận thanh toán',
    cancel: 'Đã hủy',
  }

  const statusCva = cva('p-2 rounded text-sm font-semibold uppercase', {
    variants: {
      state: {
        progress: 'text-primary-10 bg-warning-4',
        confirm: 'text-white bg-[#0084C9]',
        cancel: 'text-black bg-[#BBBCBF]',
      },
    },
  })

  return (
    <div className='flex items-start gap-6'>
      <p className='w-[6rem] text-sm font-semibold text-neutral-5'>Trạng thái</p>
      <p className={cn(statusCva({ state }))}>{stateMap[state]}</p>
    </div>
  )
}

const PaymentDetail = () => {
  return (
    <div className='grid grid-cols-3 gap-10 p-5 rounded-lg border border-neutral-3 bg-secondary-4'>
      <div className='space-y-2'>
        <Title>Thông tin đơn hàng</Title>
        <Item label='Mã đơn hàng' value='123456789' />
        <Item label='Ngày đặt' value='12/12/2021' />
        <StateItem state='progress' />
      </div>
      <div className='space-y-2'>
        <Title>Thông tin người nhận</Title>
        <Item label='Tên' value='Ngô Vũ Viết Hoàng' />
        <Item label='Số điện thoại' value='0931130729' />
        <Item label='Email' value='abc@gmail.com' />
        <Item label='Địa chỉ' value='123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh' />
      </div>
      <div className='space-y-7'>
        <div className='space-y-2'>
          <Title>Hình thức thanh toán</Title>
          <p className='text-sm text-primary-10'>Thanh toán khi nhận hàng (COD)</p>
        </div>
        <div className='space-y-2'>
          <Title>Phương thức giao hàng</Title>
          <p className='text-sm text-primary-10'>Giao hàng tiết kiệm (2-3 ngày làm việc)</p>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetail
