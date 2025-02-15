'use client'
import PaymentProgress from '@/components/cart/payment-progress'
import PaymentDetail from '@/components/result-payment/payment-detail'
import PaymentResult from '@/components/result-payment/payment-result'
import Price from '@/components/result-payment/price'
import ProductsInfo from '@/components/result-payment/products-info'
import { useGlobalStore } from '@/providers/store-provider'
import { useMemo } from 'react'

const ResultPaymentPage = () => {
  const { payments } = useGlobalStore((state) => state)

  const { totalPrices, discount, totalProduct } = useMemo(() => {
    let totalPrices = 0
    let discount = 0
    let totalProduct = 0
    payments.forEach((payment) => {
      discount += (payment.price - (payment.salePrice ?? payment.price)) * payment.quantity
      totalPrices += payment.price * payment.quantity
      totalProduct += payment.quantity
    })

    return { totalPrices, discount, totalProduct }
  }, [payments])

  return (
    <div className='mt-10 max-w-screen-2xl mx-auto px-[6.5rem] pb-20'>
      <PaymentProgress progress='complete' />
      <h2 className='heading-2 leading-normal uppercase text-primary-6 mt-12 text-center'>Kết quả đặt hàng</h2>
      <PaymentResult className='mt-14' status='success' orderCode='123456789' />
      <h2 className='heading-2 leading-normal uppercase text-primary-6 mt-12 text-center'>Chi tiết đơn hàng</h2>
      <PaymentDetail />
      <div className='mt-14 w-full'>
        <ProductsInfo products={payments} />
      </div>
      <Price totalProduct={totalProduct} totalPrices={totalPrices} discount={discount} />
    </div>
  )
}
export default ResultPaymentPage
