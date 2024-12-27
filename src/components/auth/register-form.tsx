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

export const registerFormSchema = z.object({
  username: z.string().min(2).max(50),
  phone: z.string().min(10).max(10),
  email: z.string().email(),
  password: z.string().min(6),
})

type RegisterFormProps = {
  onSubmit: (values: z.infer<typeof registerFormSchema>) => void
  defaultValues?: z.infer<typeof registerFormSchema>
}

const RegisterForm = ({ onSubmit, defaultValues }: RegisterFormProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: defaultValues,
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-[30.5625rem] card'>
        <div>
          <h2 className='text-2xl font-semibold text-black leading-tight'>Đăng ký</h2>
          <p className='mt-3 paragraph-1 text-primary-6'>
            Đã có tài khoản?
            <Link href='/auth/login' className='text-info-4 ml-2 hover:underline'>
              Đăng nhập
            </Link>
          </p>
        </div>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Tên của bạn</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Số điện thoại</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Email</FormLabel>
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
          <Button type='submit'>TIẾP THEO</Button>
        </div>
      </form>
    </Form>
  )
}

export default RegisterForm
