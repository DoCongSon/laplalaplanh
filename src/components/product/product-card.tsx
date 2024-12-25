'use client'
import Image from 'next/image'
import ProductTag, { ProductTagProps } from './product-tag'
import ProductPrice from './product-price'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

export type ProductCardProps = {
  image: string
  name: string
  price: number
  salePrice?: number
  tags?: ProductTagProps['tag'][]
  wishlist?: boolean
  cart?: boolean
  onWishlistClick?: () => void
  onCartClick?: () => void
}

type IconProps = {
  onClick?: () => void
  chosen?: boolean
}

const WishlistIcon = ({ chosen, onClick }: IconProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          onClick={onClick}
          className={cn(
            'flex items-center justify-center p-2 rounded-lg border group/wishlist hover:shadow-floating-button hover:bg-secondary-6 hover:border-neutral-5 transition-all duration-300',
            chosen ? 'bg-secondary-4 border-secondary-5 shadow-floating-button' : 'border-neutral-5 bg-secondary-2'
          )}>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <path
              d='M15.4432 7.91836L15.5541 8.1087L15.7694 8.15534L21.1971 9.33128C21.1971 9.33128 21.1971 9.33129 21.1971 9.33129C21.3252 9.35913 21.4438 9.42006 21.541 9.508C21.6382 9.59595 21.7106 9.70784 21.7511 9.83253C21.7916 9.95722 21.7987 10.0903 21.7717 10.2186C21.7447 10.3469 21.6846 10.4658 21.5974 10.5635C21.5973 10.5636 21.5973 10.5636 21.5973 10.5637L17.8974 14.7045L17.7506 14.8689L17.7728 15.0881L18.3328 20.6131L18.3328 20.6132C18.346 20.7437 18.3248 20.8755 18.2712 20.9952C18.2177 21.115 18.1336 21.2186 18.0275 21.2957C17.9213 21.3728 17.7968 21.4208 17.6663 21.4347C17.5359 21.4487 17.404 21.4281 17.284 21.3752L17.2839 21.3752L12.2019 19.1352L12.0002 19.0463L11.7986 19.1352L6.71656 21.3752L6.71647 21.3752C6.59643 21.4281 6.46459 21.4487 6.33412 21.4347C6.20366 21.4208 6.07914 21.3728 5.97299 21.2957C5.86685 21.2186 5.78279 21.115 5.72921 20.9952C5.67564 20.8755 5.65442 20.7437 5.66767 20.6132L5.66768 20.6131L6.22768 15.0881L6.24991 14.8688L6.10304 14.7045L2.40304 10.5645L2.4029 10.5643C2.31544 10.4666 2.25516 10.3475 2.22807 10.2192C2.20099 10.0908 2.20805 9.95758 2.24855 9.8328C2.28905 9.70801 2.36158 9.59604 2.45889 9.50804C2.5562 9.42005 2.67489 9.35912 2.8031 9.33134L8.2311 8.15534L8.44639 8.1087L8.55727 7.91836L11.3522 3.12043C11.3522 3.1204 11.3523 3.12038 11.3523 3.12036C11.4183 3.00709 11.5129 2.9131 11.6265 2.84777C11.7402 2.78243 11.8691 2.74805 12.0002 2.74805C12.1314 2.74805 12.2602 2.78243 12.3739 2.84777C12.4876 2.9131 12.5822 3.00709 12.6482 3.12036C12.6482 3.12038 12.6482 3.1204 12.6482 3.12043L15.4432 7.91836Z'
              fill={chosen ? '#344B4E' : 'none'}
              strokeWidth={chosen ? 0 : 1.25}
              className={cn('stroke-current text-primary-6 group-hover/wishlist:text-white')}
            />
          </svg>
        </div>
      </TooltipTrigger>
      <TooltipContent className='p-2 overflow-visible rounded-lg bg-secondary-6 relative' side='left' sideOffset={8}>
        <p className='paragraph-1 text-neutral-1'>Wishlist</p>
        <svg
          className='absolute top-1/2 -right-1 transform -translate-y-1/2'
          xmlns='http://www.w3.org/2000/svg'
          width='4'
          height='8'
          viewBox='0 0 4 8'
          fill='none'>
          <path
            d='M3.29289 3.29289C3.68342 3.68342 3.68342 4.31658 3.29289 4.70711L9.5399e-08 8L0 4.76995e-08L3.29289 3.29289Z'
            fill='#CCBE99'
          />
        </svg>
      </TooltipContent>
    </Tooltip>
  )
}

const CartIcon = ({ chosen, onClick }: IconProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div
          onClick={onClick}
          className={cn(
            'flex items-center justify-center p-2 rounded-lg border group/wishlist hover:shadow-floating-button hover:bg-secondary-6 hover:border-neutral-5 transition-all duration-300',
            chosen ? 'bg-secondary-4 border-secondary-5 shadow-floating-button' : 'border-neutral-5 bg-secondary-2'
          )}>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16.5 8V5.5C16.5 4.67157 15.8284 4 15 4H9C8.17157 4 7.5 4.67157 7.5 5.5V8'
              strokeWidth={1.25}
              className={cn('stroke-current text-primary-6', !chosen && 'group-hover/wishlist:text-white')}
            />
            <path
              d='M4.12595 9.7003C4.05795 8.78229 4.78443 8 5.70496 8H18.3365C19.2417 8 19.9626 8.75741 19.918 9.66143L19.4817 18.4948C19.4401 19.3378 18.7444 20 17.9003 20H6.35928C5.5302 20 4.84151 19.3604 4.78027 18.5336L4.12595 9.7003Z'
              fill={chosen ? '#344B4E' : 'none'}
              strokeWidth={chosen ? 0 : 1.25}
              className={cn('stroke-current text-primary-6 group-hover/wishlist:text-white')}
            />
          </svg>
        </div>
      </TooltipTrigger>
      <TooltipContent className='p-2 overflow-visible rounded-lg bg-secondary-6 relative' side='left' sideOffset={8}>
        <p className='paragraph-1 text-neutral-1'>Add to cart</p>
        <svg
          className='absolute top-1/2 -right-1 transform -translate-y-1/2'
          xmlns='http://www.w3.org/2000/svg'
          width='4'
          height='8'
          viewBox='0 0 4 8'
          fill='none'>
          <path
            d='M3.29289 3.29289C3.68342 3.68342 3.68342 4.31658 3.29289 4.70711L9.5399e-08 8L0 4.76995e-08L3.29289 3.29289Z'
            fill='#CCBE99'
          />
        </svg>
      </TooltipContent>
    </Tooltip>
  )
}

const ProductCard = (props: ProductCardProps) => {
  const { tags, image, name, price, cart, onCartClick, onWishlistClick, salePrice, wishlist } = props

  return (
    <div className='rounded-[1.25rem] overflow-hidden w-[17.375rem] border border-[#C5C5C5] bg-secondary-1 inline-flex flex-col transition-all duration-300 hover:shadow-floating-button relative group'>
      <Image src={image} alt={name} width={278} height={278} className='rounded-[1.25rem] p-2 grayscale-[50%]' />
      <div className='p-4'>
        <h3
          className={cn(
            'h-10 text-black line-clamp-2 text-base leading-tight font-semibold',
            tags && tags.includes('out-of-stock') && 'text-neutral-7'
          )}>
          {name}
        </h3>
        <ProductPrice
          className={cn('mt-8', tags && tags.includes('out-of-stock') && 'text-neutral-7')}
          price={price}
          salePrice={salePrice}
        />
      </div>
      <div className='flex flex-col items-start gap-1 absolute top-2 left-2'>
        {tags && tags.map((tag, index) => <ProductTag key={index} tag={tag} />)}
      </div>
      {tags && tags.includes('out-of-stock') && (
        <div className='absolute top-0 left-0 w-full h-full bg-[#5A555533] z-10' />
      )}
      <div className='flex flex-col gap-[0.375rem] absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
        <WishlistIcon chosen={wishlist} onClick={onWishlistClick} />
        <CartIcon chosen={cart} onClick={onCartClick} />
      </div>
    </div>
  )
}

export default ProductCard
