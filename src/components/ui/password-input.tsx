import * as React from 'react'
import { Input } from './input'
import Image from 'next/image'

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(({ ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <Input
      {...props}
      ref={ref}
      type={showPassword ? 'text' : 'password'}
      suffix={
        <Image
          onClick={() => setShowPassword(!showPassword)}
          alt=''
          height={16}
          src={`/icons/icon-eye-${showPassword ? 'on' : 'off'}.svg`}
          width={16}
        />
      }
    />
  )
})
PasswordInput.displayName = 'PassWordInput'

export { PasswordInput }
