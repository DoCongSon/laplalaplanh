import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex items-center justify-center h-[40rem] bg-primary-6 relative overflow-hidden'>
      <div className='z-10 text-center'>
        <h1 className='heading-1'>Oops! Địa chỉ trang không tồn tại</h1>
        <p className='mt-9 paragraph-1 w-[32rem] mx-auto'>
          Xin vui lòng kiểm tra lại địa chỉ trang vừa truy cập hoặc liên hệ với chúng tôi qua email{' '}
          <a href='mailto:laplalaplanh.twinkle@gmail.com'>
            <b>laplalaplanh.twinkle@gmail.com</b>
          </a>{' '}
          hoặc hotline <b>093.113.0729</b> để được hỗ trợ!
        </p>
        <Link
          href='/'
          className='mt-9 inline-flex h-10 px-5 py-3 rounded-full items-center justify-center bg-secondary-4 hover:bg-secondary-4/90 text-sm font-semibold leading-5 text-primary-9 uppercase'>
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
