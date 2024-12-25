'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export type ProductCategory = {
  name: string
  link: string
  icon: string
}

type ProductCategoryListProps = {
  categories: ProductCategory[]
  active: ProductCategory
  onClick: (category: ProductCategory) => void
  className?: string
}

const ProductCategoryList = ({ active, className, categories, onClick }: ProductCategoryListProps) => {
  return (
    <div className={cn('flex gap-10', className)}>
      {categories.map((category, index) => (
        <div
          key={index}
          className={cn('w-[8.875rem] flex flex-col items-center gap-6 cursor-pointer group')}
          onClick={() => onClick(category)}>
          <div
            className={cn(
              'w-full h-[8.875rem] px-7 py-[1.59rem] flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-secondary-5',
              active === category ? 'bg-secondary-5' : 'bg-secondary-1'
            )}>
            <Image src={category.icon} alt='' width={200} height={200} className='w-full h-full' />
          </div>
          <span className='heading-4 uppercase text-primary-6 text-center'>{category.name}</span>
        </div>
      ))}
    </div>
  )
}

export default ProductCategoryList
