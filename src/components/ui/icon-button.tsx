import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type IconButtonProps = {
  icon: string
  onClick?: () => void
  className?: string
}

const IconButton = ({ icon, onClick, className }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-[#D8DADC] hover:opacity-80 transition-all duration-300',
        className
      )}>
      <Image src={icon} alt='' width={20} height={20} />
    </button>
  )
}

export default IconButton
