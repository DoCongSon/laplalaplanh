'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const forgotPasswordFormSchema = z.object({
  email: z.string().email(),
})

type ForgotPasswordFormProps = {
  onSubmit: (values: z.infer<typeof forgotPasswordFormSchema>) => void
  defaultValues?: z.infer<typeof forgotPasswordFormSchema>
}

const ForgotPasswordForm = ({ onSubmit, defaultValues }: ForgotPasswordFormProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: defaultValues,
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-[30.5625rem] card'>
        <div>
          <h2 className='text-2xl font-semibold text-black leading-tight text-center'>Quên mật khẩu</h2>
          <p className='mt-3 paragraph-1 text-primary-6 text-center'>
            Chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu qua Email đăng ký tài khoản trên website Lấp La Lấp Lánh
          </p>
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
        <Button type='submit'>XÁC NHẬN</Button>
      </form>
    </Form>
  )
}

export default ForgotPasswordForm
