'use client'
import MainPagination from '@/components/layout/main-pagination'
import ListOrder, { ListOrderProps } from '@/components/order-history/list-order'
import ProductViewed from '@/components/product/product-viewed'
import { Button } from '@/components/ui/button'
import Checkbox from '@/components/ui/checkbox'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { images } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const sortItems = [
  { name: 'Tất cả', value: 'all' },
  { name: 'Chờ xác nhận', value: 'confirm' },
  { name: 'Đang xử lý', value: 'handle' },
  { name: 'Chờ thanh toán', value: 'payment' },
  { name: 'Đang giao hàng', value: 'shipping' },
  { name: 'Hoàn tất', value: 'complete' },
  { name: 'Đã hủy', value: 'cancel' },
  { name: 'Trả hàng', value: 'return' },
]

const itemOrder = [
  {
    id: '123456',
    date: '20/10/2021',
    total: 2000000,
    status: 'CHỜ XÁC NHẬN',
  },
  {
    id: '123456',
    date: '20/10/2021',
    total: 2000000,
    status: 'CHỜ XÁC NHẬN',
  },
  {
    id: '123456',
    date: '20/10/2021',
    total: 2000000,
    status: 'ĐANG XỬ LÝ',
  },
  {
    id: '123456',
    date: '20/10/2021',
    total: 2000000,
    status: 'CHỜ THANH TOÁN',
  },
  {
    id: '123456',
    date: '20/10/2021',
    total: 2000000,
    status: 'ĐANG GIAO HÀNG',
  },
  {
    id: '123456',
    date: '20/10/2021',
    total: 2000000,
    status: 'HOÀN TẤT',
  },
  {
    id: '123456',
    date: '20/10/2021',
    total: 2000000,
    status: 'TRẢ HÀNG',
  },
  {
    id: '123456',
    date: '20/10/2021',
    total: 2000000,
    status: 'ĐÃ HỦY',
  },
] as ListOrderProps['items']

const OrderHistory = () => {
  const [sort, setSort] = useState<{ name: string; value: string }>(sortItems[0])
  const [searchInput, setSearchInput] = useState('')

  const handleClickSort = (newSort: { name: string; value: string }) => {
    setSort(newSort)
  }

  const handleSearch = () => {
    console.log('search', searchInput)
  }

  return (
    <div className='w-[77.0625rem] mx-auto pb-[7.5rem]'>
      <div className='flex flex-col items-center mt-12'>
        <h2 className='heading-2 text-primary-6'>QUẢN LÝ TÀI KHOẢN</h2>
        <div className='mt-8 space-x-1'>
          <Link href='/my-information'>
            <Button size='sm' variant='outline'>
              Thông tin của tôi
            </Button>
          </Link>
          <Button size='sm' className='pointer-events-none'>
            Lịch sử mua hàng
          </Button>
        </div>
      </div>
      <div className='flex mt-8 p-4 h-12 items-center border border-neutral-5 bg-secondary-2 rounded-full'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder='Tìm kiếm theo mã đơn hàng hoặc tên sản phẩm'
          className='text-sm flex-1 text-primary-9 placeholder:text-neutral-4 leading-[0.0175rem] border-none outline-none bg-transparent'
        />
        <Image
          onClick={handleSearch}
          alt=''
          height={16}
          src='/icons/icon-search.svg'
          width={16}
          className='cursor-pointer'
        />
      </div>
      <div className='flex items-center justify-between mt-5 p-2'>
        <h6 className='heading-6 text-primary-6'>Tổng đơn hàng: {12}</h6>
        <HoverCard>
          <HoverCardTrigger>
            <button className='px-4 py-3 flex items-center gap-3'>
              <Image src='/icons/icon-sort.svg' alt='' width={16} height={16} />
              <h6 className='heading-6 text-primary-6'>Hiển thị: {sort.name}</h6>
              <Image src='/icons/icon-down.svg' alt='' width={16} height={16} />
            </button>
          </HoverCardTrigger>
          <HoverCardContent
            align='end'
            className='w-[14.8125rem] px-4 py-5 rounded-b-lg bg-secondary-2 shadow-floating-button flex flex-col gap-1'>
            {sortItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClickSort(item)}
                className={cn(
                  'h-10 px-3 rounded flex items-center gap-2 hover:bg-secondary-5',
                  sort.value === item.value && 'bg-secondary-5'
                )}>
                <Checkbox selected={sort.value === item.value} />
                <p className='text-xs leading-5 font-semibold uppercase text-primary-4'>{item.name}</p>
              </button>
            ))}
          </HoverCardContent>
        </HoverCard>
      </div>
      <div>
        <ListOrder items={itemOrder} />
        <MainPagination currentPage={1} totalPages={5} className='my-8' />
      </div>
      <ProductViewed id='abcd' productImages={images} className='mt-12' />
    </div>
  )
}
export default OrderHistory
