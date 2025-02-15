'use client'
import AddressForm from '@/components/payment/address-form'
import CardSection from '@/components/payment/card-section'
import OptionItem from '@/components/payment/option-item'
import { Button } from '@/components/ui/button'
import Checkbox from '@/components/ui/checkbox'
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { cn, generateId } from '@/lib/utils'
import { useGlobalStore } from '@/providers/store-provider'
import { AddressItem as AddressItemType } from '@/stores/store'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export type AddressItemProps = AddressItemType & {
  onClick?: () => void
  selected?: boolean
  className?: string
}

const AddressItem = ({ onClick, selected, className, type, name, phone, address }: AddressItemProps) => {
  return (
    <OptionItem onClick={onClick} selected={selected} className={className}>
      <div className='flex flex-col gap-1'>
        <div className='flex items-center gap-2'>
          <div className='font-semibold text-xs text-white leading-5 flex items-center justify-center px-2 py-1 bg-[#996E11] rounded-full shadow-button-secondary'>
            {type}
          </div>
          <p>
            {name} - {phone}
          </p>
        </div>
        <p className='text-neutral-7 font-normal'>{`${address.street}, ${address.ward?.Name}, ${address.district?.Name}, ${address.city?.Name}`}</p>
      </div>
    </OptionItem>
  )
}

type AddressItemPopupProps = AddressItemProps & {
  onDelete?: () => void
  onUpdate?: (value: AddressItemType) => void
}

const AddressItemPopup = ({
  address,
  onClick,
  selected,
  className,
  onDelete,
  name,
  phone,
  type,
  isDefault,
  id,
  onUpdate,
  email,
}: AddressItemPopupProps) => {
  const [open, setOpen] = useState(false)

  const handleUpdate = (value: AddressItemType) => {
    onUpdate?.(value)
    setOpen(false)
  }

  return (
    <div className={cn('flex py-4 gap-4 border-b border-neutral-4 items-start', className)}>
      <Checkbox selected={selected} onClick={onClick} className='mt-1' />
      <div className='flex flex-1 flex-col gap-3'>
        <p>
          {name} - {phone}
        </p>
        <p className='text-neutral-7 font-normal'>{`${address.street}, ${address.ward?.Name}, ${address.district?.Name}, ${address.city?.Name}`}</p>
        <div className='flex gap-3'>
          <div className='font-semibold text-xs text-white leading-5 flex items-center justify-center px-2 py-1 bg-[#996E11] rounded-full shadow-button-secondary'>
            {type}
          </div>
          {isDefault && (
            <div className='font-semibold text-xs text-[#996E11] leading-5 flex items-center justify-center px-2 py-1 border border-[#996E11] rounded-full shadow-button-secondary'>
              Địa chỉ mặc định
            </div>
          )}
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <p className='px-2 py-0.5 cursor-pointer text-xs text-neutral-7 hover:text-neutral-10 hover:underline font-semibold'>
            Sửa
          </p>
        </DialogTrigger>
        <DialogContent className='w-[45.3125rem] p-6 rounded-lg border border-neutral-5 bg-secondary-4 shadow-floating-button'>
          <DialogTitle />
          <h2 className='text-base font-semibold leading-none uppercase text-primary-6'>Sửa địa chỉ</h2>
          <AddressForm
            onSubmit={(value) => handleUpdate({ ...value, id })}
            onCancel={() => setOpen(false)}
            defaultValues={{ address, type, name, phone, isDefault, email }}
            className='mt-6'
          />
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger>
          <Image className='cursor-pointer' src='/icons/icon-trash.svg' alt='' width={16} height={16} />
        </DialogTrigger>
        <DialogContent className='w-[20rem] p-6 rounded-lg border border-neutral-5 bg-secondary-4 shadow-floating-button'>
          <DialogTitle />
          <h2 className='text-base font-semibold leading-none uppercase text-primary-6'>Xoá địa chỉ</h2>
          <p className='text-primary-6 paragraph-1 mt-3'>Bạn có chắc muốn xóa địa chỉ đang chọn</p>
          <div className='flex gap-3 mt-6'>
            <DialogClose className='flex-1'>
              <Button variant='outline' className='w-full'>
                Hủy
              </Button>
            </DialogClose>
            <DialogClose className='flex-1'>
              <Button onClick={onDelete} className='w-full'>
                Xác nhận
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

type AddressProps = {
  value: AddressItemType | null
  onChange: (value: AddressItemType | null) => void
}

const Address = ({ value, onChange }: AddressProps) => {
  const { addAddress, addresses, removeAddress, updateAddress } = useGlobalStore((state) => state)
  const [isFormActive, setIsFormActive] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (addresses.length === 0) return onChange(null)
    const defaultAddress = addresses.find((address) => address.isDefault)
    if (defaultAddress) onChange(defaultAddress)
    else onChange(addresses[0])
  }, [addresses, onChange])

  const handleAddAddress = (value: AddressItemType) => {
    addAddress(value)
    setIsFormActive(false)
    setOpen(false)
  }

  const handleUpdateAddress = (value: AddressItemType) => {
    updateAddress(value)
    setIsFormActive(false)
  }

  return (
    <CardSection title='Địa chỉ nhận hàng' className='relative'>
      <div className='absolute right-6 top-6 cursor-pointer'>
        {value ? (
          <Dialog>
            <DialogTrigger>
              <p className='leading-none hover:underline'>Thay đổi</p>
            </DialogTrigger>
            <DialogContent className='w-[45.3125rem] p-6 rounded-lg border border-neutral-5 bg-secondary-4 shadow-floating-button'>
              <DialogTitle />
              <h2 className='text-base font-semibold leading-none uppercase text-primary-6'>Địa chỉ nhận hàng</h2>
              <div className='flex flex-col gap-3'>
                {addresses.map((address) => (
                  <AddressItemPopup
                    key={address.id}
                    {...address}
                    onClick={() => onChange(address)}
                    onDelete={() => removeAddress(address.id)}
                    onUpdate={handleUpdateAddress}
                    selected={value?.id === address.id}
                  />
                ))}
              </div>
              <div className='flex items-center justify-between'>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger>
                    <button className='px-2 py-1 cursor-pointer text-ms font-semibold leading-5 uppercase text-primary-6 flex items-center justify-center gap-2'>
                      Thêm địa chỉ mới
                      <Image src='/icons/icon-plus.svg' alt='' width={16} height={16} />
                    </button>
                  </DialogTrigger>
                  <DialogContent className='w-[45.3125rem] p-6 rounded-lg border border-neutral-5 bg-secondary-4 shadow-floating-button'>
                    <DialogTitle />
                    <h2 className='text-base font-semibold leading-none uppercase text-primary-6'>Thêm địa chỉ mới</h2>
                    <AddressForm
                      onSubmit={(values) => handleAddAddress({ ...values, id: generateId() })}
                      onCancel={() => setOpen(false)}
                      className='mt-6'
                    />
                  </DialogContent>
                </Dialog>
                <div className='flex gap-3'>
                  <DialogClose>
                    <Button variant='outline'>Đóng</Button>
                  </DialogClose>
                  <DialogClose>
                    <Button>Xác nhận</Button>
                  </DialogClose>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ) : (
          <p onClick={() => setIsFormActive(!isFormActive)} className='leading-none hover:underline'>
            Thêm địa chỉ mới
          </p>
        )}
      </div>
      <AddressForm
        onSubmit={(value) => handleAddAddress({ ...value, id: generateId() })}
        onCancel={() => setIsFormActive(false)}
        className={cn('transition-all duration-500 mt-0 overflow-hidden h-[32rem]', !isFormActive && 'h-0 -mt-3')}
      />
      {value && <AddressItem {...value} selected={true} />}
    </CardSection>
  )
}

export default Address
