import { cn } from '@/lib/utils'
import React from 'react'
import Star from '../icons/star'

type CheckboxProps = {
  selected?: boolean
  onClick?: () => void
  className?: string
}

const Checkbox = ({ onClick, selected, className }: CheckboxProps) => {
  return (
    <button
      className={cn(
        'w-5 h-5 border border-primary-4 rounded-full flex items-center justify-center transition-all duration-300',
        selected ? 'bg-primary-4' : 'bg-white',
        className
      )}
      onClick={onClick}>
      <Star className='w-3 h-3' strokeWidth='1' stroke='#29433E' fill={selected ? 'white' : 'none'} />
    </button>
  )
}

export default Checkbox
