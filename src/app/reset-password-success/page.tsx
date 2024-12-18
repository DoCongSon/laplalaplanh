import Image from 'next/image'
import Link from 'next/link'

const ResetPasswordSuccessPage = () => {
  return (
    <div className='flex items-center justify-center h-[40rem] bg-primary-6 relative overflow-hidden'>
      <div className='z-10 text-center'>
        <h1 className='heading-1'>Đặt lại mật khẩu thành công</h1>
        <p className='mt-9 paragraph-1'>
          Vui lòng thực hiện đăng nhập <br /> để tiếp tục trải nghiệm mua sắm tại Lấp La Lấp Lánh!
        </p>
        <Link
          href='/'
          className='mt-9 flex h-10 px-5 py-3 rounded-full items-center justify-center bg-secondary-4 hover:bg-secondary-4/90 text-sm font-semibold leading-5 text-primary-9 uppercase'>
          Đăng nhập
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

export default ResetPasswordSuccessPage
