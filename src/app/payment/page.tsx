'use client'
import PaymentProgress from '@/components/cart/payment-progress'
import Address, { AddressItemProps } from '@/components/payment/address'
import CardSection from '@/components/payment/card-section'
import Delivery from '@/components/payment/delivery'
import DeliveryMethod from '@/components/payment/delivery-method'
import Discount from '@/components/payment/discount'
import LoginStatus from '@/components/payment/login-status'
import Note from '@/components/payment/note'
import PaymentMethod from '@/components/payment/payment-method'
import Price from '@/components/payment/price'
import ProductsInfo from '@/components/payment/products-info'
import ProductViewed from '@/components/product/product-viewed'
import { deliveryMethods, DeliveryMethodType, images } from '@/constants'
import { useGlobalStore } from '@/providers/store-provider'
import { useMemo, useState } from 'react'

const PaymentPage = () => {
  const [deliveryType, setDeliveryType] = useState<'one-time' | 'multiple-time' | null>(null)
  const [addressSelected, setAddressSelected] = useState<AddressItemProps | null>(null)
  const [selectedMethod, setSelectedMethod] = useState<DeliveryMethodType>(deliveryMethods[0])
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'vnpay' | 'bank-transfer'>('cod')
  const [discountCode, setDiscountCode] = useState('')
  const [discountState, setDiscountState] = useState<null | 'error' | 'success'>(null)
  const [voucherDiscount, setVoucherDiscount] = useState(0)
  const [note, setNote] = useState('')
  const { payments } = useGlobalStore((state) => state)

  const handleSubmitDiscount = (values: string) => {
    if (values === 'free') {
      setDiscountState('success')
      setVoucherDiscount(200000)
    } else {
      setDiscountState('error')
      setVoucherDiscount(0)
    }
  }

  const { totalPrices, deliveryFee, discount, totalProduct, deposit, depositProduct } = useMemo(() => {
    let totalPrices = 0
    const deliveryFee = 30000
    let discount = 0
    let totalProduct = 0
    let deposit = 0
    let depositProduct = 0
    payments.forEach((payment) => {
      discount += (payment.price - (payment.salePrice ?? payment.price)) * payment.quantity
      totalPrices += payment.price * payment.quantity
      totalProduct += payment.quantity
    })
    const paymentOrder = payments.filter((payment) => payment.type === 'order')

    paymentOrder.forEach((payment) => {
      deposit += payment.price * payment.quantity * 0.3 // 30% deposit
      depositProduct += payment.quantity
    })

    return { totalPrices, deliveryFee, discount, totalProduct, deposit, depositProduct }
  }, [payments])

  const handleOrder = () => {
    // handle order
  }

  return (
    <div className='mt-10 max-w-screen-2xl mx-auto px-[6.5rem] pb-20'>
      <PaymentProgress progress='payment' />
      <h2 className='heading-2 leading-normal uppercase text-primary-6 mt-12 text-center'>Thanh toán</h2>
      <div className='flex gap-7 mt-12 items-start'>
        <div className='flex-1 flex flex-col gap-7'>
          <LoginStatus />
          <Delivery value={deliveryType} onChange={setDeliveryType} />
          <Address value={addressSelected} onChange={setAddressSelected} />
          <DeliveryMethod value={selectedMethod} onChange={setSelectedMethod} />
          <PaymentMethod value={paymentMethod} onChange={setPaymentMethod} />
          <Discount
            value={discountCode}
            onChange={setDiscountCode}
            state={discountState}
            onSubmit={handleSubmitDiscount}
          />
          <ProductsInfo
            title='Ngày dự kiến giao hàng'
            note='30.000đ'
            description='Giao hàng tiết kiệm (2-3 ngày làm việc)'
            products={payments}
          />
          <CardSection>
            <div className='flex items-start gap-6'>
              <Note value={note} onChange={setNote} />
              <Price
                className='border-none shadow-none'
                totalPrices={totalPrices}
                deliveryFee={deliveryFee}
                discount={discount}
                totalProduct={totalProduct}
                deposit={deposit}
                depositProduct={depositProduct}
                voucherDiscount={voucherDiscount}
                onSubmit={handleOrder}
              />
            </div>
          </CardSection>
        </div>
        <Price
          totalPrices={totalPrices}
          deliveryFee={deliveryFee}
          discount={discount}
          totalProduct={totalProduct}
          deposit={deposit}
          depositProduct={depositProduct}
          voucherDiscount={voucherDiscount}
          onSubmit={handleOrder}
        />
      </div>
      <ProductViewed id='abcd' productImages={images} className='mt-12' />
    </div>
  )
}
export default PaymentPage
