'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type ProductCategory = {
  name: string
  link: string
  icon: string
}

type ProductCategoryListProps = {
  categories: ProductCategory[]
  className?: string
}

const ProductCategoryList = ({ className, categories }: ProductCategoryListProps) => {
  return (
    <div className={cn('flex gap-10', className)}>
      {categories.map((category, index) => (
        <Link
          href={category.link}
          key={index}
          className={cn('w-[8.875rem] flex flex-col items-center gap-6 cursor-pointer group')}>
          <div
            className={cn(
              'w-full h-[8.875rem] px-7 py-[1.59rem] bg-secondary-1 flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-secondary-5'
            )}>
            <Image src={category.icon} alt='' width={200} height={200} className='w-full h-full' />
          </div>
          <span className='heading-4 uppercase text-primary-6 text-center'>{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default ProductCategoryList
