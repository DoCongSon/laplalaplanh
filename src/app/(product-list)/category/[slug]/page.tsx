'use client'
import NotFound from '@/app/not-found'
import Logo from '@/components/icons/logo'
import MainPagination from '@/components/layout/main-pagination'
import ProductCard from '@/components/product/product-card'
import ProductList from '@/components/product/product-list'
import ProductViewed from '@/components/product/product-viewed'
import { Button } from '@/components/ui/button'
import Checkbox from '@/components/ui/checkbox'
import FilterNature from '@/components/ui/filter-nature'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { categories, productListConstants, SortProduct } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { use, useEffect, useMemo, useState } from 'react'
const { products, images, filters, sortItems } = productListConstants

const CategoryPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [sort, setSort] = useState<{ name: string; value: SortProduct }>({ name: 'mặc định', value: 'default' })
  const [activeSubCategory, setActiveSubCategory] = useState<{ name: string; href: string } | null>(null)
  const { slug } = use(params)
  const category = useMemo(() => categories.find((c) => c.slug === slug), [slug])

  useEffect(() => {
    if (category) {
      setActiveSubCategory(category.items[0])
    }
  }, [category])

  const handleClickSort = (newSort: { name: string; value: SortProduct }) => {
    if (sort.value === newSort.value) {
      setSort({ name: 'mặc định', value: 'default' })
    } else {
      setSort(newSort)
    }
  }

  if (!category) {
    return <NotFound />
  }

  return (
    <div className='mt-10 max-w-screen-2xl mx-auto px-[6.5rem] pb-20'>
      <div className='flex flex-col gap-8 items-center justify-center'>
        <div className='flex items-center gap-2'>
          <Image src={category.icon} alt='' width={50} height={50} />
          <h2 className={cn('heading-2 leading-normal uppercase inline-block text-primary-6')}>{category.name}</h2>
        </div>
        <div className='flex gap-1'>
          {category.items.map((item, index) => (
            <Button
              key={index}
              variant={item === activeSubCategory ? 'default' : 'outline'}
              onClick={() => setActiveSubCategory(item)}
              size='sm'
              className={cn(item !== activeSubCategory && 'opacity-50')}>
              {item.name}
            </Button>
          ))}
        </div>
      </div>
      <FilterNature
        className='mt-10'
        filters={filters}
        prideFilter={{ min: 0, max: 30000000 }}
      />
      <div className='flex items-center justify-between mt-3 p-2'>
        <h6 className='heading-6 text-primary-6'>tổng sản phẩm: {12}</h6>
        <HoverCard>
          <HoverCardTrigger>
            <button className='px-4 py-3 flex items-center gap-3'>
              <Image src='/icons/icon-sort.svg' alt='' width={16} height={16} />
              <h6 className='heading-6 text-primary-6'>sắp xếp theo: {sort.name}</h6>
              <Image src='/icons/icon-down.svg' alt='' width={16} height={16} />
            </button>
          </HoverCardTrigger>
          <HoverCardContent
            align='end'
            className='w-[14.8125rem] px-4 py-5 rounded-b-lg bg-secondary-2 shadow-floating-button flex flex-col gap-1'>
            {sortItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClickSort(item)}
                className={cn(
                  'h-10 px-3 rounded flex items-center gap-2 hover:bg-secondary-5',
                  sort.value === item.value && 'bg-secondary-5'
                )}>
                <Checkbox selected={sort.value === item.value} />
                <p className='text-xs leading-5 font-semibold uppercase text-primary-4'>{item.name}</p>
              </button>
            ))}
          </HoverCardContent>
        </HoverCard>
      </div>
      {products.length > 0 ? (
        <div>
          <div className='flex flex-wrap gap-10'>
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <MainPagination currentPage={1} totalPages={5} className='mt-3' />
        </div>
      ) : (
        <div className='flex flex-col items-center py-[6rem]'>
          <Logo className='w-[4.9375rem] h-[5.125rem]' fill='#29433E' />
          <h2 className='heading-2 text-primary-6 mt-6'>Không tìm thấy sản phẩm</h2>
        </div>
      )}
      <ProductList
        products={products}
        title='Sản phẩm được tìm kiếm nhiều nhất'
        listType='carousel'
        id='12313'
        className='mt-3'
      />
      <ProductViewed id='abcd' productImages={images} className='mt-12' />
    </div>
  )
}

export default CategoryPage
