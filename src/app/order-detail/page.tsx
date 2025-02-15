import Process from '@/components/order-detail/process'

const OrderDetail = () => {
  return (
    <div className='w-[77.0625rem] mx-auto'>
      <Process progress='delivery' date={['16:20, 23/04/2024', '16:20, 23/04/2024', '', '']} />
    </div>
  )
}
export default OrderDetail
