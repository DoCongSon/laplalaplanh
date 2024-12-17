import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const socials = [
  {
    icon: '/icons/icon-facebook.svg',
    link: 'https://facebook.com',
  },
  {
    icon: '/icons/icon-instagram.svg',
    link: 'https://instagram.com',
  },
  {
    icon: '/icons/icon-shopee.svg',
    link: 'https://shopee.vn',
  },
]

const cashes = [
  {
    image: '/images/logo-vnpay.png',
    link: '#',
  },
  {
    image: '/images/logo-bank-transfer.png',
    link: '#',
  },
  {
    image: '/images/logo-cod.png',
    link: '#',
  },
]

const customerCare = [
  {
    name: 'Tra cứu đơn hàng',
    link: '#',
  },
  {
    name: 'Hướng dẫn mua hàng',
    link: '#',
  },
  {
    name: 'Chính sách thanh toán',
    link: '#',
  },
  {
    name: 'Chính sách giao hàng',
    link: '#',
  },
  {
    name: 'Chính sách bảo mật',
    link: '#',
  },
  {
    name: 'Chính sách đổi trả',
    link: '#',
  },
]

const contact = [
  {
    name: '18 đường C18, Phường 12, Quận Tân Bình, TP. Hồ Chí Minh',
    link: '#',
    icon: '/icons/icon-location.svg',
  },
  {
    name: 'laplalaplanh.twinkle@gmail.com',
    link: '#',
    icon: '/icons/icon-mail.svg',
  },
  {
    name: '09:00 - 18:00',
    link: '#',
    icon: '/icons/icon-clock.svg',
  },
  {
    name: '0123.456.789',
    link: '#',
    icon: '/icons/icon-phone.svg',
  },
]

type FooterProps = {
  showLogoBoCongThuong?: boolean
}

const Footer = ({ showLogoBoCongThuong }: FooterProps) => {
  return (
    <footer className='pt-16 h-[26rem] bg-primary-9 flex flex-col gap-16 overflow-hidden'>
      <div className='flex gap-14 max-w-screen-2xl px-[6.5rem] mx-auto relative'>
        <div className='w-[14.5rem] flex flex-col gap-8'>
          <Link href='#'>
            <Image src='images/logo.svg' alt='logo' width={128} height={133} className='ml-6' />
          </Link>
          <div className='flex gap-4'>
            {socials.map((social, index) => (
              <Link
                href={social.link}
                key={index}
                className='flex items-center justify-center w-12 h-12 bg-secondary-1 rounded-full'>
                <Image src={social.icon} alt='icon' width={32} height={32} />
              </Link>
            ))}
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          <div>
            <h4 className='footer-heading'>Về chúng tôi</h4>
            <div className='flex flex-col mt-3'>
              <Link href='#' className='footer-link'>
                Giới thiệu
              </Link>
              <Link href='#' className='footer-link'>
                Blog
              </Link>
            </div>
          </div>
          <div>
            <h4 className='footer-heading'>Thanh toán</h4>
            <div className='flex mt-3 gap-2'>
              {cashes.map((cash, index) => (
                <Link key={index} href={cash.link} className='rounded-[0.25rem]'>
                  <Image src={cash.image} alt='' width={40} height={30} />
                </Link>
              ))}
            </div>
            {showLogoBoCongThuong && (
              <Image src='/images/logo-bo-cong-thuong.png' alt='' width={120} height={40} className='mt-3' />
            )}
          </div>
        </div>
        <div>
          <h4 className='footer-heading'>Chăm sóc khách hàng</h4>
          <div className='flex flex-col mt-3'>
            {customerCare.map((care, index) => (
              <Link key={index} href={care.link} className='footer-link'>
                {care.name}
              </Link>
            ))}
          </div>
        </div>
        <div className='max-w-[20rem]'>
          <h4 className='footer-heading'>Liên hệ</h4>
          <div className='flex flex-col mt-3'>
            {contact.map((item, index) => (
              <Link key={index} href={item.link} className='footer-link flex items-start gap-2'>
                <Image src={item.icon} alt='' width={24} height={24} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <Image src='/images/shape-footer.svg' alt='' width={300} height={302} className='absolute -bottom-36 right-8' />
      </div>
      <p className='max-w-screen-2xl px-[6.5rem] mx-auto w-full text-sm leading-5 text-secondary-4'>
        All rights reserved @ Lap La Lap Lanh 2024
      </p>
    </footer>
  )
}

export default Footer
