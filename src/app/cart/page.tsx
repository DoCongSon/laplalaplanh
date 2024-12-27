'use client'
import CartItem from '@/components/cart/cart-item'
import PaymentProgress from '@/components/cart/payment-progress'
import Bag from '@/components/icons/bag'
import Logo from '@/components/icons/logo'
import ProductViewed from '@/components/product/product-viewed'
import { Button } from '@/components/ui/button'
import Checkbox from '@/components/ui/checkbox'
import { images, products } from '@/constants'
import { cn, priceFormat } from '@/lib/utils'
import Link from 'next/link'

const CartPage = () => {
  return (
    <div className='mt-10 max-w-screen-2xl mx-auto px-[6.5rem]'>
      <PaymentProgress progress='cart' />
      <div className='flex items-center justify-center gap-2 mt-12'>
        <Bag stroke='#344B4E' className='w-10 h-10' />
        <h2 className={cn('heading-2 leading-normal uppercase inline-block text-primary-6 mt-1')}>Giỏ hàng</h2>
      </div>
      <div className='flex gap-[0.8125rem] items-start mt-14'>
        <div>
          <div className='w-[56.8125rem] rounded-t-lg bg-secondary-4 flex'>
            <div className='flex items-center px-4 py-5 gap-4 w-[27.9375rem]'>
              <Checkbox className='rounded' />
              <p className='text-base leading-none font-semibold text-black'>Chọn tất cả (4 sản phẩm)</p>
            </div>
            <div className='flex items-center justify-center px-4 py-5 gap-4 w-[10rem]'>
              <p className='text-base leading-none font-semibold text-black'>Đơn giá</p>
            </div>
            <div className='flex items-center justify-center px-4 py-5 gap-4 w-[7.5rem]'>
              <p className='text-base leading-none font-semibold text-black'>Số lượng</p>
            </div>
            <div className='flex items-center justify-center px-4 py-5 gap-4 w-[10rem]'>
              <p className='text-base leading-none font-semibold text-black'>Thành tiền</p>
            </div>
          </div>

          {/* Cart item */}
          <div>
            {products.map((product, index) => (
              <CartItem
                key={index}
                name={product.name}
                image={product.image}
                price={product.price}
                salePrice={product.salePrice}
                checked={false}
                quantity={3}
                natures={['đen', 'xl']}
                colors={[
                  { value: 'red', outOfStock: false },
                  { value: 'blue', outOfStock: false },
                  { value: 'yellow', outOfStock: false },
                  { value: 'green', outOfStock: true },
                ]}
                sizes={[
                  { value: '0-1M', outOfStock: false },
                  { value: '1-3M', outOfStock: false },
                  { value: '3-6M', outOfStock: false },
                  { value: '6-9M', outOfStock: true },
                ]}
                outOfStock
                type='available'
              />
            ))}
          </div>

          {/* Cart entry */}
          <div className='flex gap-6 flex-col items-center mt-8'>
            <Logo className='w-[4.9375rem] h-[5.125rem]' fill='#29433E' />
            <h2 className='heading-2 text-primary-6 max-w-[21.25rem] text-center'>
              Chưa có sản phẩm nào được thêm vào giỏ hàng
            </h2>
            <Link href='/'>
              <Button className='uppercase'>Tiếp tục mua sắm</Button>
            </Link>
          </div>
        </div>
        <div className='flex-1 p-4 pt-7 flex flex-col gap-6 rounded-lg shadow-basic-bottom bg-secondary-4'>
          <h3 className='font-semibold uppercase leading-none text-black'>Đơn hàng</h3>
          <div className='mb-4 border-b border-primary-3'>
            <div className='flex items-center justify-between'>
              <p className='text-sm text-black'>Tổng tiền (3 sản phẩm)</p>
              <p className='text-black font-semibold uppercase'>{priceFormat(1000000)}</p>
            </div>
            <div className='flex items-center justify-between mt-2'>
              <p className='text-sm text-black'>Giảm giá sản phẩm</p>
              <p className='text-black font-semibold uppercase'>{priceFormat(-10000)}</p>
            </div>
          </div>
          <div className='flex items-start justify-between'>
            <div>
              <p className='text-sm text-black'>Tạm tính</p>
              <p className='paragraph-2 text-neutral-5'>(Đã bao gồm VAT)</p>
            </div>
            <p className='text-error-6 font-semibold uppercase'>{priceFormat(200000)}</p>
          </div>
          <Button className='uppercase w-full'>Thanh toán</Button>
        </div>
      </div>
      <ProductViewed id='2123123' productImages={images} className='mt-12 mb-[6.5rem]' />
    </div>
  )
}
export default CartPage
