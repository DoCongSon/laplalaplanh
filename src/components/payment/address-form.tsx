'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import LocationPicker, { Address } from '@/components/payment/location-picker'
import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

export const addressFormSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string().min(9).max(12),
  email: z.string().email(),
})

type AddressFormProps = {
  onSubmit: (
    values: z.infer<typeof addressFormSchema> & { address: Address; isDefault: boolean; type: 'Công ty' | 'Nhà riêng' }
  ) => void
  onCancel: () => void
  className?: string
  defaultValues?: z.infer<typeof addressFormSchema> & {
    address: Address
    isDefault: boolean
    type: 'Công ty' | 'Nhà riêng'
  }
}

const AddressForm = ({ onSubmit, defaultValues, onCancel, className }: AddressFormProps) => {
  const [address, setAddress] = useState<Address>({ city: null, district: null, ward: null, street: null })
  const [isDefault, setIsDefault] = useState(defaultValues?.isDefault || false)
  const [addressType, setAddressType] = useState<'Công ty' | 'Nhà riêng'>(defaultValues?.type || 'Nhà riêng')
  // 1. Define your form.
  const form = useForm<z.infer<typeof addressFormSchema>>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: defaultValues,
  })

  const handleSubmit = (values: z.infer<typeof addressFormSchema>) => {
    onSubmit({ ...values, address, isDefault, type: addressType })
    form.reset({ name: '', phone: '', email: '' })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={cn('flex flex-col gap-5', className)}>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Họ và tên</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='grid grid-cols-2 gap-4'>
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
        </div>
        <div className='flex flex-col gap-2'>
          <FormLabel required>Địa chỉ</FormLabel>
          <LocationPicker onChange={setAddress} defaultValues={defaultValues?.address} />
        </div>
        <div className='flex flex-col gap-3'>
          <FormLabel>Chọn loại địa chỉ</FormLabel>
          <div className='flex gap-3'>
            {['Nhà riêng', 'Công ty'].map((type) => (
              <button
                type='button'
                onClick={() => setAddressType(type as 'Công ty' | 'Nhà riêng')}
                key={type}
                className={cn(
                  'font-semibold text-xs leading-5 flex items-center justify-center px-2 py-1 rounded-full shadow-button-secondary transition-all duration-300',
                  addressType === type ? 'bg-[#996E11] text-white' : 'text-[#996E11] border border-[#996E11]'
                )}>
                {type}
              </button>
            ))}
          </div>
          <div className='flex gap-2'>
            <Switch checked={isDefault} onCheckedChange={setIsDefault} /> Đặt làm địa chỉ mặc định
          </div>
        </div>
        <div className='flex items-center justify-end gap-3'>
          <Button type='button' onClick={onCancel} variant='outline'>
            Huỷ
          </Button>
          <Button type='submit'>Lưu địa chỉ</Button>
        </div>
      </form>
    </Form>
  )
}

export default AddressForm
