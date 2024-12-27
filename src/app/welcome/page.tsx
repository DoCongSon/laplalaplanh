'use client'
import { useGlobalStore } from '@/providers/store-provider'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WelcomePage = () => {
  const user = useGlobalStore((state) => state.user)

  return (
    <div className='flex items-center justify-center h-[40rem] bg-primary-6 relative overflow-hidden'>
      <div className='z-10 text-center'>
        <h6 className='heading-6'>Xin chào</h6>
        <h1 className='heading-1 mt-4'>{user?.name}</h1>
        <p className='mt-9 paragraph-1'>
          Chào mừng đến với cửa hàng của Lấp Lánh. <br /> Chúc quý khách có trải nghiệm mua sắm tuyệt vời!
        </p>
        <Link
          href='/'
          className='mt-9 flex h-10 px-5 py-3 rounded-full items-center justify-center bg-secondary-4 hover:bg-secondary-4/90 text-sm font-semibold leading-5 text-primary-9 uppercase'>
          Về trang chủ
        </Link>
      </div>
      <Image
        alt=''
        src='/images/shape-welcome.svg'
        width={800}
        height={790}
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
      />
    </div>
  )
}

export default WelcomePage
