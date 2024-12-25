import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export type CollectionItem = {
  imageUrl: string
  title: string
  type: 'sub' | 'main'
}

type CollectionProps = {
  items: CollectionItem[]
  className?: string
}

const Collection = ({ items, className }: CollectionProps) => {
  return (
    <div className={cn(className)}>
      <h2 className={cn('title leading-normal text-primary-6')}>Bộ sưu tập</h2>
      <div className='flex flex-wrap gap-10 mt-10'>
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              'aspect-[5/2] rounded-[1.25rem] relative overflow-hidden',
              item.type === 'main' ? 'w-full' : 'w-[calc(50%-1.25rem)]'
            )}>
            <Image src={item.imageUrl} alt='' width={500} height={200} className={cn('w-full h-full object-cover')} />
            {item.type === 'sub' && (
              <div className='absolute inset-0 bg-[#043430]/70 flex items-center justify-center'>
                <h1 className='heading-1'>{item.title}</h1>
              </div>
            )}
            {item.type === 'main' && (
              <div className='absolute left-10 bottom-16'>
                <Button className='px-4 py-2 uppercase'>lời khuyên từ chuyên gia</Button>
                <h1 className='heading-1 text-primary-6 mt-6'>{item.title}</h1>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collection
