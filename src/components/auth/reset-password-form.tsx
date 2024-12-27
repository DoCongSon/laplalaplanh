'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { PasswordInput } from '../ui/password-input'

export const resetPasswordFormSchema = z.object({
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
})

type ResetPasswordFormProps = {
  onSubmit: (values: z.infer<typeof resetPasswordFormSchema>) => void
  defaultValues?: z.infer<typeof resetPasswordFormSchema>
  email?: string
}

const ResetPasswordForm = ({ onSubmit, defaultValues, email }: ResetPasswordFormProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: defaultValues,
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-[30.5625rem] card'>
        <div>
          <h2 className='text-2xl font-semibold text-black leading-tight text-center'>Quên mật khẩu</h2>
          <p className='mt-3 paragraph-1 text-primary-6 text-center'>
            Thiết lập mật khẩu cho tài khoản: <br />
            <span className='text-[#006CB6]'>{email}</span>
          </p>
        </div>
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Mật khẩu mới</FormLabel>
              <FormControl>
                <PasswordInput placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Nhập lại mật khẩu mới</FormLabel>
              <FormControl>
                <PasswordInput placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>ĐẶT LẠI MẬT KHẨU</Button>
      </form>
    </Form>
  )
}

export default ResetPasswordForm
