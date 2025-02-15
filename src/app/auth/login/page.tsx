'use client'
import LoginForm, { loginFormSchema } from '@/components/auth/login-form'
import { useGlobalStore } from '@/providers/store-provider'
import { useRouter } from 'next/navigation'
import React from 'react'
import { z } from 'zod'

const LoginPage = () => {
  const setUser = useGlobalStore((state) => state.setUser)
  const router = useRouter()

  const handleLogin = (values: z.infer<typeof loginFormSchema>) => {
    // fake login
    if (values.email === 'demo@gmail.com' && values.password === '123456') {
      setUser({
        email: values.email,
        name: 'Demo User',
        phoneNumber: '0123456789',
        childInfo: [{ name: 'An', dob: '2021-02-04' }],
      })
    }
    router.push('/welcome')
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <h1 className='heading-1 w-[22rem]'>TRỞ THÀNH THÀNH VIÊN CỦA LẤP LA LẤP LÁNH</h1>
        <p className='paragraph-1 w-[26rem] mt-4'>
          Đăng ký tài khoản và hưởng những ưu đãi dành riêng cho khách hàng thân thiết của Lấp La Lấp Lánh
        </p>
      </div>
      <LoginForm onSubmit={handleLogin} defaultValues={{ email: 'demo@gmail.com', password: '123456' }} />
    </div>
  )
}

export default LoginPage
