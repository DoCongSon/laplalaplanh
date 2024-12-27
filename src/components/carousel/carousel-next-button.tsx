import { cn } from '@/lib/utils'
import React from 'react'

type CarouselNextButtonProps = {
  className?: string
}

const CarouselNextButton = ({ className }: CarouselNextButtonProps) => {
  return (
    <button
      className={cn(
        'w-12 h-12 flex items-center justify-center rounded-full shadow-floating-button bg-white/70 disabled:opacity-50 disabled:shadow-none absolute top-1/2 transform -translate-y-1/2 z-10',
        className
      )}>
      <svg xmlns='http://www.w3.org/2000/svg' width='9' height='14' viewBox='0 0 9 14' fill='none'>
        <path d='M1 1L7 7L1 13' stroke='black' strokeWidth='1.5' />
      </svg>
    </button>
  )
}

export default CarouselNextButton
