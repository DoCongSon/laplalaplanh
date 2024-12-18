'use client'
import ResetPasswordForm, { resetPasswordFormSchema } from '@/components/auth/reset-password-form'
import React from 'react'
import { z } from 'zod'
import { use } from 'react'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const ResetPassword = ({ searchParams }: { searchParams: SearchParams }) => {
  const { token, email } = use(searchParams)

  const handleResetPassword = async (values: z.infer<typeof resetPasswordFormSchema>) => {
    console.log(token)
    console.log(values)
  }

  return (
    <div className='flex justify-center items-center'>
      <ResetPasswordForm onSubmit={handleResetPassword} email={email as string} />
    </div>
  )
}

export default ResetPassword
