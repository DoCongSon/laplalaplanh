'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '../ui/password-input'
import Link from 'next/link'
import IconButton from '../ui/icon-button'

export const loginFormSchema = z.object({
  email: z.string(),
  password: z.string().min(6),
})

type LoginFormProps = {
  onSubmit: (values: z.infer<typeof loginFormSchema>) => void
  defaultValues?: z.infer<typeof loginFormSchema>
}

const LoginForm = ({ onSubmit, defaultValues }: LoginFormProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: defaultValues,
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-[30.5625rem] card'>
        <div>
          <h2 className='text-2xl font-semibold text-black leading-tight'>Đăng nhập</h2>
          <Link href='/auth/forgot-password' className='text-info-4 mt-3 paragraph-1 hover:underline block'>
            Quên mật khẩu?
          </Link>
        </div>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Số điện thoại / Email</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Mật khẩu</FormLabel>
              <FormControl>
                <PasswordInput placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <FormLabel>Hoặc tiếp tục với</FormLabel>
            <div className='flex items-center gap-1'>
              <IconButton icon='/icons/icon-facebook-2.svg' />
              <IconButton icon='/icons/icon-google.svg' />
            </div>
          </div>
          <Button type='submit'>ĐĂNG NHẬP</Button>
        </div>
      </form>
    </Form>
  )
}

export default LoginForm
