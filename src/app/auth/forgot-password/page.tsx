'use client'
import ForgotPasswordForm, { forgotPasswordFormSchema } from '@/components/auth/forgot-password-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { z } from 'zod'

const ForgotPassword = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const handleForgotPassword = (values: z.infer<typeof forgotPasswordFormSchema>) => {
    console.log(values)
    setHasSubmitted(true)
  }

  return (
    <div className='flex justify-center items-center'>
      {hasSubmitted ? (
        <div className='card items-center gap-0'>
          <h2 className='heading-2 text-black'>Đã gửi email đặt lại mật khẩu</h2>
          <p className='paragraph-2 text-black mt-3'>Vui lòng kiểm tra hộp thư đến hoặc mục thư rác của bạn.</p>
          <Link href='/auth/login'>
            <Button className='mt-6'>QUAY LẠI ĐĂNG NHẬP</Button>
          </Link>
        </div>
      ) : (
        <ForgotPasswordForm onSubmit={handleForgotPassword} />
      )}
    </div>
  )
}

export default ForgotPassword
