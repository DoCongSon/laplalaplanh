'use client'
import Link from 'next/link'
import ProductCard, { ProductCardProps } from './product-card'
import { cn } from '@/lib/utils'
import ProductCarousel from '../carousel/product-carousel'
import { useGlobalStore } from '@/providers/store-provider'
import { Product } from '@/constants'

type ProductListProps = {
  title: string
  products: ProductCardProps[]
  readMoreLink?: string
  listType?: 'default' | 'carousel'
  titleType?: 'default' | 'primary'
  className?: string
  id?: string
}

const ProductList = ({ id, products, readMoreLink, title, titleType, listType, className }: ProductListProps) => {
  const { addToWishlist, removeFromWishlist, addToCart, cart, wishlist } = useGlobalStore((state) => state)

  const newProducts = products.map((product) => ({
    ...product,
    onCartClick: () => handleCart(product),
    onWishlistClick: () => handleWishlist(product),
    cart: !!cart.find((item) => item.id === product.id),
    wishlist: !!wishlist.find((item) => item.id === product.id),
  }))

  const handleCart = (product: Product) => {
    addToCart({ ...product, quantity: 1, cartId: product.id })
  }

  const handleWishlist = (product: Product) => {
    if (wishlist.find((item) => item.id === product.id)) {
      removeFromWishlist(product.id)
    } else addToWishlist(product)
  }

  return (
    <div className={cn(className)}>
      <div className={'flex items-center justify-between mb-8'}>
        <h2
          className={cn(
            'title leading-normal inline-block text-transparent bg-clip-text',
            titleType === 'primary' ? 'bg-gradient-to-r from-[#C75835] to-[#8F1313]' : 'bg-primary-6'
          )}>
          {title}
        </h2>
        {readMoreLink && (
          <Link
            className={cn(
              'heading-4 leading-normal inline-block text-transparent bg-clip-text',
              titleType === 'primary' ? 'bg-gradient-to-r from-[#C75835] to-[#8F1313]' : 'bg-primary-6'
            )}
            href={readMoreLink}>
            Xem thêm
          </Link>
        )}
      </div>
      {listType === 'carousel' ? (
        <ProductCarousel products={newProducts} id={id as string} />
      ) : (
        <div className='flex flex-wrap gap-10'>
          {newProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
