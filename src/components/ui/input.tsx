import * as React from 'react'

import { cn } from '@/lib/utils'

type InputProps = {
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'> & InputProps>(
  ({ className, type, prefix, suffix, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex gap-1 items-center w-full rounded-full border border-neutral-5 bg-transparent px-5 py-3',
          className
        )}>
        {prefix && <div>{prefix}</div>}
        <input
          type={type}
          className={cn('flex-1 outline-none bg-transparent text-sm placeholder:text-[#ACABAB] text-black')}
          ref={ref}
          {...props}
        />
        {suffix && <div>{suffix}</div>}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
