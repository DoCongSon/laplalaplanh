import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export type ProductTagProps = {
  tag: 'order' | 'new' | 'best-seller' | 'out-of-stock'
}

const ProductTagVariants = cva(
  'inline-flex items-center justify-center rounded-full text-xs font-semibold text-floral-white uppercase px-3 py-2',
  {
    variants: {
      tag: {
        order: 'bg-green-gradient',
        new: 'bg-blue-gradient',
        'best-seller': 'bg-orange-gradient',
        'out-of-stock': 'bg-neutral-10',
      },
    },
  }
)

const ProductTag = ({ tag }: ProductTagProps) => {
  return <div className={cn(ProductTagVariants({ tag }))}>{tag}</div>
}

export default ProductTag
