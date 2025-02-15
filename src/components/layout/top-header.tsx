import MiniCartItem from '@/components/cart/mini-cart-item'
import Logo from '@/components/icons/logo'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import useClickOutside from '@/hooks/useClickOutside'
import { priceFormat } from '@/lib/utils'
import { useGlobalStore } from '@/providers/store-provider'
import { CartItem } from '@/stores/store'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useMemo, useRef, useState } from 'react'

const TopHeader = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { user, clearUser, cart, updateItemCart, removeFromCart, addPayment } = useGlobalStore((state) => state)
  const cartRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  useClickOutside(cartRef, () => {
    if (isCartOpen) {
      setIsCartOpen(false)
    }
  })

  const handleLogout = () => {
    clearUser()
  }

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => {
      if (item.salePrice) {
        return total + item.salePrice * item.quantity
      } else {
        return total + item.price * item.quantity
      }
    }, 0)
  }, [cart])

  const handleRemoveFromCart = (id: string) => {
    removeFromCart(id)
  }

  const handleIncrease = (item: CartItem) => {
    updateItemCart({ ...item, quantity: item.quantity + 1 })
  }

  const handleDecrease = (item: CartItem) => {
    if (item.quantity > 1) {
      updateItemCart({ ...item, quantity: item.quantity - 1 })
    } else {
      handleRemoveFromCart(item.cartId)
    }
  }

  const handlePayment = () => {
    addPayment(cart)
    cart.forEach((item) => removeFromCart(item.cartId))
    router.push('/payment')
  }

  return (
    <div className='flex gap-20 bg-primary-4 h-8 items-center justify-center'>
      <p className='text-white text-xs'>
        Subscribe to{' '}
        <Link className='underline' href='#'>
          Lap La Lap Lanh&apos;s Instagram
        </Link>{' '}
        to get 10% Off today!
      </p>
      <p className='text-white text-xs'>
        Subscribe to{' '}
        <Link className='underline' href='#'>
          Lap La Lap Lanh&apos;s Facebook
        </Link>{' '}
        to get 10% Off today!
      </p>
      <nav className='flex gap-8'>
        <Link className='nav-link' href='/wishlist'>
          <Image alt='wishlist' height={16} src='/icons/icon-star.svg' width={16} />
          WISHLIST
        </Link>
        <div>
          <button className='nav-link' onClick={() => setIsCartOpen(!isCartOpen)}>
            <Image alt='wishlist' height={16} src='/icons/icon-bag.svg' width={16} />
            GIỎ HÀNG
          </button>
          <HoverCard open={isCartOpen}>
            <HoverCardTrigger></HoverCardTrigger>
            <HoverCardContent
              ref={cartRef}
              className='w-[33rem] top-0 -left-32 absolute p-11 bg-secondary-1 flex flex-col gap-1 rounded-none'>
              <div className='flex items-center justify-between'>
                <h2 className='heading-2 text-black'>Giỏ hàng ({cart.length})</h2>
                <Image
                  alt=''
                  height={24}
                  src='/icons/icon-close.svg'
                  width={24}
                  className='cursor-pointer'
                  onClick={() => setIsCartOpen(false)}
                />
              </div>
              {cart.length > 0 ? (
                <div className='flex flex-col gap-4'>
                  <div className='py-4 border-b border-t border-neutral-4'>
                    <div className='flex flex-col gap-6 max-h-[30rem] overflow-y-scroll scrollbar pr-2'>
                      {cart.map((product, index) => (
                        <MiniCartItem
                          key={index}
                          {...product}
                          onRemove={() => handleRemoveFromCart(product.cartId)}
                          onDecrease={() => handleDecrease(product)}
                          onIncrease={() => handleIncrease(product)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <h6 className='heading-6 text-black'>Tổng cộng</h6>
                    <p className='text-lg leading-5 text-[#C41B24] uppercase font-semibold'>
                      {priceFormat(totalPrice)}
                    </p>
                  </div>
                  <div className='flex justify-center gap-2 items-center'>
                    <Link href='/cart' className='w-full'>
                      <Button className='uppercase w-full' variant='outline'>
                        Xem giỏ hàng
                      </Button>
                    </Link>
                    <Button onClick={handlePayment} className='uppercase w-full'>
                      Thanh toán
                    </Button>
                  </div>
                </div>
              ) : (
                <div className='flex gap-6 flex-col items-center'>
                  <Logo className='w-[4.9375rem] h-[5.125rem]' fill='#29433E' />
                  <h2 className='heading-2 text-primary-6 max-w-[21.25rem] text-center'>
                    Chưa có sản phẩm nào được thêm vào giỏ hàng
                  </h2>
                  <Link href='/cart'>
                    <Button className='uppercase'>Xem giỏ hàng</Button>
                  </Link>
                </div>
              )}
            </HoverCardContent>
          </HoverCard>
        </div>
        {!user ? (
          <>
            <Link className='nav-link' href='/auth/register'>
              ĐĂNG KÝ
            </Link>
            <Link className='nav-link' href='/auth/login'>
              ĐĂNG NHẬP
            </Link>
          </>
        ) : (
          <HoverCard>
            <HoverCardTrigger>
              <p className='nav-link cursor-pointer'>
                <Image alt='wishlist' height={16} src='/icons/icon-account.svg' width={16} />
                Hello, {user.name}
              </p>
            </HoverCardTrigger>
            <HoverCardContent className='w-[14.8125rem] top-0 -right-20 absolute px-4 py-5 rounded-b-lg bg-secondary-2 shadow-floating-button flex flex-col gap-2'>
              <Link className='item-card-hover' href='#'>
                Thông tin của tôi
              </Link>
              <Link className='item-card-hover' href='#'>
                Lịch sử mua hàng
              </Link>
              <button onClick={handleLogout} className='item-card-hover'>
                Đăng xuất
              </button>
            </HoverCardContent>
          </HoverCard>
        )}
      </nav>
    </div>
  )
}

export default TopHeader
