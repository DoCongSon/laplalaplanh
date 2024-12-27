'use client'
import Logo from '@/components/icons/logo'
import Star from '@/components/icons/star'
import MainPagination from '@/components/layout/main-pagination'
import ProductCard from '@/components/product/product-card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { products } from '@/constants'
import Link from 'next/link'

const SearchPage = () => {
  return (
    <div className='mt-10 max-w-screen-2xl mx-auto px-[6.5rem] pb-20'>
      <div className='flex items-center gap-4 justify-center'>
        <Star className='w-10 h-10' stroke='#344B4E' strokeWidth='2' />
        <h2 className={cn('heading-2 leading-normal uppercase inline-block text-primary-6 text-center mt-1')}>
          Wishlist
        </h2>
      </div>
      <h6 className='heading-6 text-primary-6 mt-6 py-4 border-t border-neutral-4'>tổng sản phẩm: {12}</h6>
      {products.length > 100 ? (
        <div className='mt-7'>
          <div className='flex flex-wrap gap-10'>
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <MainPagination currentPage={1} totalPages={5} className='mt-3' />
        </div>
      ) : (
        <div className='flex gap-6 flex-col items-center py-[6rem]'>
          <Logo className='w-[4.9375rem] h-[5.125rem]' fill='#29433E' />
          <h2 className='heading-2 text-primary-6 max-w-[21.25rem] text-center'>
            Chưa có sản phẩm nào được thêm vào wishlist
          </h2>
          <Link href='/'>
            <Button className='uppercase'>Tiếp tục mua sắm</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default SearchPage
