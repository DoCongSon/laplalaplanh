'use client'
import MainPagination from '@/components/layout/main-pagination'
import ProductCard, { ProductCardProps } from '@/components/product/product-card'
import ProductList from '@/components/product/product-list'
import ProductViewed from '@/components/product/product-viewed'
import Checkbox from '@/components/ui/checkbox'
import FilterNature from '@/components/ui/filter-nature'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type SortProduct = 'default' | 'price-asc' | 'price-desc' | 'newest' | 'best-sell'

const products: ProductCardProps[] = [
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
]

const images = [
  '/images/product-1.jpg',
  '/images/product-1.jpg',
  '/images/product-1.jpg',
  '/images/product-1.jpg',
  '/images/product-1.jpg',
  '/images/product-1.jpg',
  '/images/product-1.jpg',
]

const SalePage = () => {
  const [sort, setSort] = React.useState<{ name: string; value: SortProduct }>({ name: 'mặc định', value: 'default' })

  const sortItems: { name: string; value: SortProduct }[] = [
    { name: 'mới nhất', value: 'newest' },
    { name: 'bán chạy', value: 'best-sell' },
    { name: 'giá tăng dần', value: 'price-asc' },
    { name: 'giá giảm dần', value: 'price-desc' },
  ]

  const handleClickSort = (newSort: { name: string; value: SortProduct }) => {
    if (sort.value === newSort.value) {
      setSort({ name: 'mặc định', value: 'default' })
    } else {
      setSort(newSort)
    }
  }

  return (
    <div className='mt-10 max-w-screen-2xl mx-auto px-[6.5rem] pb-20'>
      <div className='flex items-center justify-center'>
        <h2
          className={cn(
            'heading-2 leading-normal uppercase inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#C75835] to-[#8F1313]'
          )}>
          Sale
        </h2>
      </div>
      <FilterNature
        className='mt-10'
        onFilterChange={(natures) => {
          console.log(natures)
        }}
        filters={[
          {
            name: 'Size',
            values: [
              {
                name: 'S',
                selected: false,
              },
              {
                name: 'M',
                selected: false,
              },
              {
                name: 'L',
                selected: false,
              },
              {
                name: 'XL',
                selected: false,
              },
            ],
          },
          {
            name: 'Color',
            values: [
              { name: 'Red', selected: false },
              { name: 'Blue', selected: false },
              { name: 'Green', selected: false },
              { name: 'Yellow', selected: false },
            ],
          },
        ]}
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
      <div className='flex flex-wrap gap-10'>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <MainPagination currentPage={1} totalPages={5} className='mt-3' />
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

export default SalePage