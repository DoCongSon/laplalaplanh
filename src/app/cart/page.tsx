'use client'
import CartItem from '@/components/cart/cart-item'
import PaymentProgress from '@/components/cart/payment-progress'
import Bag from '@/components/icons/bag'
import Logo from '@/components/icons/logo'
import ProductViewed from '@/components/product/product-viewed'
import { Button } from '@/components/ui/button'
import Checkbox from '@/components/ui/checkbox'
import { images } from '@/constants'
import { cn, priceFormat } from '@/lib/utils'
import { useGlobalStore } from '@/providers/store-provider'
import { CartItem as CartItemType } from '@/stores/store'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'

const CartPage = () => {
  const [selected, setSelected] = useState<string[]>([])
  const { cart, removeFromCart, updateItemCart, wishlist, addToWishlist, removeFromWishlist, addPayment } =
    useGlobalStore((state) => state)
  const router = useRouter()

  const { totalPrice, totalDiscount } = useMemo(() => {
    let totalPrice = 0
    let totalDiscount = 0
    cart
      .filter((item) => selected.includes(item.id))
      .forEach((item) => {
        totalPrice += item.price * item.quantity
        totalDiscount += (item.price - (item.salePrice ?? item.price)) * item.quantity
      })
    return { totalPrice, totalDiscount }
  }, [cart, selected])

  const handleRemoveFromCart = (id: string) => {
    removeFromCart(id)
  }

  const handleIncrease = (item: CartItemType) => {
    updateItemCart({ ...item, quantity: item.quantity + 1 })
  }

  const handleDecrease = (item: CartItemType) => {
    if (item.quantity > 1) {
      updateItemCart({ ...item, quantity: item.quantity - 1 })
    } else {
      handleRemoveFromCart(item.cartId)
    }
  }

  const handleWishList = (item: CartItemType) => {
    if (wishlist.find((wish) => wish.id === item.id)) {
      removeFromWishlist(item.id)
    } else {
      addToWishlist(item)
    }
  }

  const handleCheck = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id))
    } else {
      setSelected([...selected, id])
    }
  }

  const handleCheckAll = () => {
    if (cart.length === selected.length) {
      setSelected([])
    } else {
      setSelected(cart.map((item) => item.id))
    }
  }

  const handlePayment = () => {
    addPayment(cart.filter((item) => selected.includes(item.id)))
    selected.forEach((id) => removeFromCart(id))
    router.push('/payment')
  }

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
            <div className='flex items-center px-4 py-5 gap-4 w-[27.9375rem] cursor-pointer' onClick={handleCheckAll}>
              <Checkbox className='rounded' selected={cart.length === selected.length} />
              <p className='text-base leading-none font-semibold text-black'>Chọn tất cả ({cart.length} sản phẩm)</p>
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
          {cart.length > 0 ? (
            <div>
              {cart.map((product, index) => (
                <CartItem
                  key={index}
                  {...product}
                  onRemove={() => handleRemoveFromCart(product.cartId)}
                  onDecrease={() => handleDecrease(product)}
                  onIncrease={() => handleIncrease(product)}
                  wishlist={!!wishlist.find((item) => item.id === product.id)}
                  onWishList={() => handleWishList(product)}
                  checked={selected.includes(product.id)}
                  onCheck={() => handleCheck(product.id)}
                />
              ))}
            </div>
          ) : (
            <div className='flex gap-6 flex-col items-center mt-8'>
              <Logo className='w-[4.9375rem] h-[5.125rem]' fill='#29433E' />
              <h2 className='heading-2 text-primary-6 max-w-[21.25rem] text-center'>
                Chưa có sản phẩm nào được thêm vào giỏ hàng
              </h2>
              <Link href='/'>
                <Button className='uppercase'>Tiếp tục mua sắm</Button>
              </Link>
            </div>
          )}
        </div>
        <div className='flex-1 p-4 pt-7 flex flex-col gap-6 rounded-lg shadow-basic-bottom bg-secondary-4'>
          <h3 className='font-semibold uppercase leading-none text-black'>Đơn hàng</h3>
          <div className='mb-4 border-b border-primary-3'>
            <div className='flex items-center justify-between'>
              <p className='text-sm text-black'>Tổng tiền ({cart.length} sản phẩm)</p>
              <p className='text-black font-semibold uppercase'>{priceFormat(totalPrice)}</p>
            </div>
            <div className='flex items-center justify-between mt-2'>
              <p className='text-sm text-black'>Giảm giá sản phẩm</p>
              <p className='text-black font-semibold uppercase'>{priceFormat(-totalDiscount)}</p>
            </div>
          </div>
          <div className='flex items-start justify-between'>
            <div>
              <p className='text-sm text-black'>Tạm tính</p>
              <p className='paragraph-2 text-neutral-5'>(Đã bao gồm VAT)</p>
            </div>
            <p className='text-error-6 font-semibold uppercase'>{priceFormat(totalPrice - totalDiscount)}</p>
          </div>
          <Button onClick={handlePayment} className='uppercase w-full'>
            Thanh toán
          </Button>
        </div>
      </div>
      <ProductViewed id='2123123' productImages={images} className='mt-12 mb-[6.5rem]' />
    </div>
  )
}
export default CartPage
