import Link from 'next/link'
import ProductCard, { ProductCardProps } from './product-card'
import { cn } from '@/lib/utils'
import ProductCarousel from '../carousel/product-carousel'

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
        <ProductCarousel products={products} id={id as string} />
      ) : (
        <div className='flex flex-wrap gap-10'>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
