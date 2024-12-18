'use client'
import InformationForm, { informationFormSchema } from '@/components/auth/information-form'
import RegisterForm, { registerFormSchema } from '@/components/auth/register-form'
import React from 'react'
import { z } from 'zod'

const RegisterPage = () => {
  const [step, setStep] = React.useState<1 | 2>(1)
  const handleRegister = (values: z.infer<typeof registerFormSchema>) => {
    console.log(values)
    setStep(2)
  }

  const handleInformation = (values: z.infer<typeof informationFormSchema>) => {
    console.log(values)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <h1 className='heading-1 w-[22rem]'>TRỞ THÀNH THÀNH VIÊN CỦA LẤP LA LẤP LÁNH</h1>
        <p className='paragraph-1 w-[26rem] mt-4'>
          Đăng ký tài khoản và hưởng những ưu đãi dành riêng cho khách hàng thân thiết của Lấp La Lấp Lánh
        </p>
      </div>
      {step === 1 ? (
        <RegisterForm onSubmit={handleRegister} />
      ) : (
        <InformationForm onSubmit={handleInformation} onBack={() => setStep(1)} />
      )}
    </div>
  )
}

export default RegisterPage
