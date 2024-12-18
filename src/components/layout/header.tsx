'use client'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import useClickOutside from '@/hooks/useClickOutside'
import useScroll from '@/hooks/useScroll'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { useGlobalStore } from '@/providers/store-provider'

type MenuItem = {
  name: string
  icon?: string
  href?: string
  items?: MenuItem[]
}

const menuItems: MenuItem[] = [
  {
    name: 'New Arrivals',
    href: '#',
  },
  {
    name: 'Sale',
    href: '#',
  },
  {
    name: 'Danh mục sản phẩm',
    items: [
      {
        name: 'Bé ngủ',
        icon: '/icons/icon-pillow.svg',
        items: [
          { name: 'Giường, quây, cũi', href: '#' },
          { name: 'Chăn, ga, gối, đệm', href: '#' },
          { name: 'Kén, nhộng chũn, quần bé', href: '#' },
        ],
      },
      {
        name: 'Bé ăn',
        icon: '/icons/icon-spoon.svg',
        items: [
          { name: 'Bé tuti', href: '#' },
          { name: 'Thực phẩm', href: '#' },
          { name: 'Dụng cụ ăn dặm', href: '#' },
          { name: 'Tỉ giá & phụ kiện', href: '#' },
        ],
      },
      {
        name: 'Bé điệu',
        icon: '/icons/icon-dress.svg',
        items: [
          { name: 'Quần áo', href: '#' },
          { name: 'Giày dép', href: '#' },
          { name: 'Túi / balo', href: '#' },
          { name: 'Phụ kiện', href: '#' },
        ],
      },
      {
        name: 'In - thêu tên',
        icon: '/icons/icon-teddy-bear.svg',
        items: [
          { name: 'Khăn mặt', href: '#' },
          { name: 'Sticker', href: '#' },
          { name: 'Huy hiệu / Nametag', href: '#' },
          { name: 'Sản phẩm khác', href: '#' },
        ],
      },
      {
        name: 'Chăm sóc',
        icon: '/icons/icon-face-child.svg',
        items: [
          { name: 'Bỉm', href: '#' },
          { name: 'Bé tắm', href: '#' },
          { name: 'Vật dụng bảo hộ', href: '#' },
          { name: 'Chăm sóc da bé', href: '#' },
          { name: 'Chăm sóc răng miệng', href: '#' },
          { name: 'Dung dịch vệ sinh cho bé', href: '#' },
        ],
      },
      {
        name: 'Bé chơi',
        icon: '/icons/icon-drum.svg',
        items: [
          { name: 'Thú bông', href: '#' },
          { name: 'Đồ sơ sinh', href: '#' },
          { name: 'Đồ chơi giáo dục', href: '#' },
          { name: 'Đồ chơi sáng tạo', href: '#' },
          { name: 'Nội thất phòng bé', href: '#' },
          { name: 'Xe đẩy và phụ kiện', href: '#' },
        ],
      },
      {
        name: 'Chăm sóc gia đình',
        icon: '/icons/icon-family-home.svg',
        items: [
          { name: 'Thực phẩm chức năng', href: '#' },
          { name: 'Máy móc thiết bị', href: '#' },
          { name: 'Mỹ phẩm & phụ kiện', href: '#' },
          { name: 'Sản phẩm khác', href: '#' },
        ],
      },
    ],
  },
  {
    name: 'Blog',
    href: '#',
  },
  {
    name: 'Về chúng tôi',
    href: '#',
  },
]

const Header = () => {
  const [menuItem, setMenuItem] = useState<MenuItem | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderBlur, setIsHeaderBlur] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const { scrollY, scrollDirection } = useScroll()
  const { user, clearUser } = useGlobalStore((state) => state)

  useClickOutside(
    menuRef,
    () => {
      setIsMenuOpen(false)
    },
    [navRef]
  )

  // scroll y > 32 => bg blur for header
  useEffect(() => {
    if (scrollY > 32) {
      setIsHeaderBlur(true)
    } else {
      setIsHeaderBlur(false)
    }
  }, [scrollY])

  const handleSearch = () => {
    // Handle search
  }

  const handleLogout = () => {
    clearUser()
  }

  const handleShowMenu = (menu: MenuItem) => {
    if (menuItem?.name === menu.name && isMenuOpen) {
      setIsMenuOpen(false)
      return
    }
    setIsMenuOpen(true)
    setMenuItem(menu)
  }

  return (
    <header
      className={cn('sticky -top-8 z-50 transition-all duration-300', scrollDirection === 'up' ? 'top-0' : '-top-8')}>
      <div className='flex gap-20 bg-primary-4 h-8 items-center justify-center'>
        <p className='text-white text-xs'>
          Subscribe to{' '}
          <Link className='underline' href='#'>
            Lap La Lap Lanh&apos;s Instagram
          </Link>{' '}
          to get 10% Off today!
        </p>
        <p className='text-white text-xs'>
          Subscribe to{' '}
          <Link className='underline' href='#'>
            Lap La Lap Lanh&apos;s Facebook
          </Link>{' '}
          to get 10% Off today!
        </p>
        <nav className='flex gap-8'>
          <Link className='nav-link' href='#'>
            <Image alt='wishlist' height={16} src='/icons/icon-star.svg' width={16} />
            WISHLIST
          </Link>
          <Link className='nav-link' href='#'>
            <Image alt='wishlist' height={16} src='/icons/icon-bag.svg' width={16} />
            GIỎ HÀNG
          </Link>
          {!user ? (
            <>
              <Link className='nav-link' href='/auth/register'>
                ĐĂNG KÝ
              </Link>
              <Link className='nav-link' href='/auth/login'>
                ĐĂNG NHẬP
              </Link>
            </>
          ) : (
            <HoverCard>
              <HoverCardTrigger>
                <p className='nav-link cursor-pointer'>
                  <Image alt='wishlist' height={16} src='/icons/icon-account.svg' width={16} />
                  Hello, {user.name}
                </p>
              </HoverCardTrigger>
              <HoverCardContent className='w-[14.8125rem] top-0 -right-20 absolute px-4 py-5 rounded-b-lg bg-secondary-2 shadow-floating-button flex flex-col gap-2'>
                <Link className='item-card-hover' href='#'>
                  Thông tin của tôi
                </Link>
                <Link className='item-card-hover' href='#'>
                  Lịch sử mua hàng
                </Link>
                <button onClick={handleLogout} className='item-card-hover'>
                  Đăng xuất
                </button>
              </HoverCardContent>
            </HoverCard>
          )}
        </nav>
      </div>
      <div
        className={cn(
          'flex h-[6.75rem] items-center justify-center transition-all duration-300',
          isHeaderBlur ? 'bg-secondary-1/90 backdrop-blur-[2px]' : 'bg-secondary-1'
        )}>
        <Link href='#' className='flex items-center gap-2'>
          <Image alt='logo' height={41} src='/icons/icon-logo-star.svg' width={42} />
          <div>
            <h2 className='text-[1.75rem] font-bold text-primary-6 leading-[1.875rem] uppercase'>LẤP LA LẤP LÁNH</h2>
            <p className='mt-2 text-xs font-semibold text-primary-4 text-center uppercase'>Bring Korea close to you</p>
          </div>
        </Link>
      </div>
      <div
        className={cn(
          'flex items-center justify-center gap-[5.875rem] px-[6.5rem] py-3 border-t border-b border-neutral-4 transition-all duration-300',
          isHeaderBlur ? 'bg-secondary-1/90 backdrop-blur-[2px]' : 'bg-secondary-1'
        )}>
        <nav ref={navRef} className='flex gap-4'>
          {menuItems.map((item) => {
            if (item.items) {
              return (
                <p
                  onClick={() => handleShowMenu(item)}
                  key={item.name}
                  className={cn(
                    'cursor-pointer text-base leading-tight font-semibold uppercase text-primary-9 flex items-center justify-center h-10 px-5 py-3 rounded-full hover:bg-secondary-5 transition-all duration-300',
                    menuItem?.name === item.name && isMenuOpen ? 'bg-secondary-5' : ''
                  )}>
                  {item.name}
                </p>
              )
            } else {
              return (
                <Link
                  key={item.name}
                  className='text-base leading-tight font-semibold uppercase text-primary-9 flex items-center justify-center h-10 px-5 py-3 rounded-full hover:bg-secondary-5 transition-all duration-300'
                  href={item.href as string}>
                  {item.name}
                </Link>
              )
            }
          })}
        </nav>
        <div className='flex gap-3 h-10 px-[6rem] items-center border border-black rounded-full'>
          <input
            placeholder='Bạn đang tìm kiếm gì?'
            className='text-base text-primary-9 placeholder:text-primary-6 leading-tight border-none outline-none bg-transparent'
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
      </div>
      <div
        ref={menuRef}
        className={cn(
          '-z-10 py-8 rounded-b-lg bg-secondary-2 shadow-header absolute w-full left-0 transition-all duration-300',
          isMenuOpen ? 'top-[12.9rem]' : '-top-[20rem] opacity-0'
        )}>
        <div className='flex px-[6.5rem] gap-8 max-w-screen-2xl mx-auto'>
          {menuItem?.items?.map((item) => (
            <div key={item.name} className='flex-1'>
              <div className='flex items-center gap-1 py-1 border-b border-neutral-4'>
                {item.icon && <Image alt='icon' height={40} src={item.icon} width={40} />}
                <p className='text-sm text-black font-semibold uppercase'>{item.name}</p>
              </div>
              <div className='mt-2 flex flex-col gap-2'>
                {item.items?.map((subItem) => (
                  <Link
                    key={subItem.name}
                    className='text-xs leading-4 font-semibold text-primary-6 px-3 py-2 rounded-full hover:bg-secondary-5 transition-all duration-300'
                    href={subItem.href as string}>
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
