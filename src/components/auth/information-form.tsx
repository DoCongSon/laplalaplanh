'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export const informationFormSchema = z.object({
  childQuantity: z.coerce.number().int().min(0).max(10),
  childInfo: z.array(
    z.object({
      name: z.string().min(2).max(50),
      dob: z.string(),
    })
  ),
})

type InformationFormProps = {
  onSubmit: (values: z.infer<typeof informationFormSchema>) => void
  onBack?: () => void
  defaultValues?: z.infer<typeof informationFormSchema>
}

const InformationForm = ({ onSubmit, defaultValues, onBack }: InformationFormProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof informationFormSchema>>({
    resolver: zodResolver(informationFormSchema),
    defaultValues: defaultValues,
  })
  const childQuantity = form.watch('childQuantity')

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-[30.5625rem] card'>
        <div>
          <h2 className='text-2xl font-semibold text-black leading-tight'>Thông tin của bé</h2>
          <p className='mt-3 paragraph-1 text-primary-6'>
            Lấp Lánh có chương trình ưu đãi vào ngày sinh nhật bé. Ba mẹ nhập thông tin để tận hưởng ưu đãi nhé!
          </p>
        </div>
        <FormField
          control={form.control}
          name='childQuantity'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gia đình bạn có mấy bé</FormLabel>
              <FormControl>
                <Input type='number' placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {Array.from({ length: childQuantity }).map((_, index) => (
          <div key={index} className='flex gap-6'>
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

        <div className='flex items-center gap-2'>
          <button onClick={onBack} className='flex h-10 flex-1 items-center gap-1 hover:bg-primary-1 rounded-full px-4'>
            <Image src='/icons/icon-back.svg' width={12} height={12} alt='' />
            <p className='flex-1 text-start text-xs leading-5 text-primary-6'>Quay lại</p>
          </button>
          <Button className='flex-1' type='submit'>
            ĐĂNG KÝ TÀI KHOẢN
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default InformationForm
