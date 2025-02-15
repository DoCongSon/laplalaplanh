'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '../ui/password-input'
import { useState } from 'react'
import Image from 'next/image'
import { useGlobalStore } from '@/providers/store-provider'
import { toast } from 'sonner'

export const informationFormSchema = z.object({
  username: z.string().min(2).max(50),
  phone: z.string().min(10).max(10),
  email: z.string().email(),
  oldPassword: z.string(),
  newPassword: z.string(),
  confirmPassword: z.string(),
  childInfo: z.array(
    z.object({
      name: z.string().min(2).max(50),
      dob: z.string(),
    })
  ),
})

const InformationForm = () => {
  const { user, setUser } = useGlobalStore((state) => state)
  const [childQuantity, setChildQuantity] = useState(user?.childInfo?.length ?? 1)

  // 1. Define your form.
  const form = useForm<z.infer<typeof informationFormSchema>>({
    resolver: zodResolver(informationFormSchema),
    defaultValues: {
      username: user?.name ?? '',
      phone: user?.phoneNumber ?? '',
      email: user?.email ?? '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      childInfo: user?.childInfo ?? [{ name: '', dob: '' }],
    },
  })

  const onSubmit = (values: z.infer<typeof informationFormSchema>) => {
    if (values.oldPassword !== '' && values.oldPassword !== '123456') {
      form.setError('oldPassword', {
        type: 'manual',
        message: 'Mật khẩu không đúng',
      })
      return
    }

    if (values.newPassword !== values.confirmPassword) {
      form.setError('confirmPassword', {
        type: 'manual',
        message: 'Mật khẩu không khớp',
      })
      return
    }

    setUser({
      name: values.username,
      phoneNumber: values.phone,
      email: values.email,
      childInfo: values.childInfo,
    })
    toast.success('Cập nhật thông tin thành công')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div>
          <h2 className='heading-2 text-primary-6'>Thông tin khách hàng</h2>
          <p className='mt-4 leading-5 text-primary-6'>
            Lấp Lánh sẽ gửi thông báo liên quan đến tài khoản của bạn theo các thông tin dưới đây.
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
                <Input readOnly placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='!mt-10'>
          <h2 className='heading-2 text-primary-6'>Thông tin của bé</h2>
          <p className='mt-4 leading-5 text-primary-6'>
            Lấp Lánh có chương trình ưu đãi vào ngày sinh nhật bé. Ba mẹ nhập thông tin để tận hưởng những ưu đãi nhé!
          </p>
        </div>
        {Array.from({ length: childQuantity }).map((_, index) => (
          <div key={index} className='space-y-6'>
            <FormField
              control={form.control}
              name={`childInfo.${index}.name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nickname của bé {index + 1}</FormLabel>
                  <FormControl>
                    <Input placeholder='' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`childInfo.${index}.dob`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sinh nhật của bé {index + 1}</FormLabel>
                  <FormControl>
                    <Input type='date' placeholder='' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
        <button
          type='button'
          onClick={() => setChildQuantity(childQuantity + 1)}
          className='px-2 py-1 cursor-pointer text-ms font-semibold leading-5 uppercase text-primary-6 flex items-center justify-end w-full !mt-3 gap-2'>
          Thêm thông tin em bé mới
          <Image src='/icons/icon-plus.svg' alt='' width={16} height={16} />
        </button>
        <div className='!mt-10'>
          <h2 className='heading-2 text-primary-6'>Đổi mật khẩu</h2>
        </div>
        <FormField
          control={form.control}
          name='oldPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Mật khẩu hiện tại</FormLabel>
              <FormControl>
                <PasswordInput placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='newPassword'
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
              <FormLabel required>Nhập lại mật khẩu</FormLabel>
              <FormControl>
                <PasswordInput placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          CẬP NHẬT
        </Button>
      </form>
    </Form>
  )
}

export default InformationForm
