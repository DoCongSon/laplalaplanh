'use client'
import AddressManage from '@/components/my-information/address-manage'
import InformationForm from '@/components/my-information/information-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const MyInformation = () => {
  return (
    <div className='w-[77.0625rem] mx-auto pb-[7.5rem]'>
      <div className='flex flex-col items-center mt-12'>
        <h2 className='heading-2 text-primary-6'>QUẢN LÝ TÀI KHOẢN</h2>
        <div className='mt-8 space-x-1'>
          <Button size='sm' className='pointer-events-none'>
            Thông tin của tôi
          </Button>
          <Link href='/order-history'>
            <Button size='sm' variant='outline'>
              Lịch sử mua hàng
            </Button>
          </Link>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-2 gap-[2.625rem]'>
        <div>
          <InformationForm />
        </div>
        <div>
          <AddressManage />
        </div>
      </div>
    </div>
  )
}
export default MyInformation
