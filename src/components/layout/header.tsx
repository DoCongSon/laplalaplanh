'use client'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import useClickOutside from '@/hooks/useClickOutside'
import useScroll from '@/hooks/useScroll'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import ProductPrice from '@/components/product/product-price'
import TopHeader from '@/components/layout/top-header'
import { homeCategories, MenuItem, menuItems, products } from '@/constants'

const trendingKeywords = ['Áo ngủ', 'scooter', 'túi giữ nhiệt', 'địu', 'túi ngủ']

const Header = () => {
  const [searchInput, setSearchInput] = useState('')
  const [menuItem, setMenuItem] = useState<MenuItem | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderBlur, setIsHeaderBlur] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const searchDropdownRef = useRef<HTMLDivElement>(null)
  const { scrollY, scrollDirection } = useScroll()
  const router = useRouter()

  useClickOutside(
    menuRef,
    () => {
      setIsMenuOpen(false)
    },
    [navRef]
  )

  useClickOutside(searchDropdownRef, () => {
    setIsSearchOpen(false)
  })

  // scroll y > 32 => bg blur for header
  useEffect(() => {
    if (scrollY > 32) {
      setIsHeaderBlur(true)
    } else {
      setIsHeaderBlur(false)
    }
  }, [scrollY])

  const handleSearch = () => {
    router.push(`/search?query=${searchInput}`)
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
      className={cn(
        'sticky z-50 transition-all duration-500 ease-in-out',
        scrollDirection === 'up' ? 'top-0' : '-top-[8.75rem]'
      )}>
      <TopHeader />
      <div
        className={cn(
          'flex h-[6.75rem] items-center justify-center transition-all duration-300',
          isHeaderBlur ? 'bg-secondary-1/90 backdrop-blur-[2px]' : 'bg-secondary-1'
        )}>
        <Link href='/' className='flex items-center gap-2'>
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
        <div className='flex gap-3 h-10 px-[6rem] items-center border border-black rounded-full relative'>
          <HoverCard open={isSearchOpen}>
            <HoverCardTrigger></HoverCardTrigger>
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
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
            <HoverCardContent
              ref={searchDropdownRef}
              className='w-[40.25rem] max-h-[40rem] overflow-y-scroll scrollbar px-5 py-9 bg-secondary-2 shadow-basic-top absolute top-7 -left-[13rem] inline-flex flex-col gap-10'>
              <div>
                <h3 className='font-semibold text-base leading-5 uppercase text-primary-6'>Từ khóa XU HƯỚNG</h3>
                <div className='flex flex-wrap mt-4 gap-x-6 gap-y-4'>
                  {trendingKeywords.map((keyword) => (
                    <Button
                      onClick={() => setSearchInput(keyword)}
                      size='sm'
                      variant='outline'
                      key={keyword}
                      className='hover:bg-primary-4 hover:text-white'>
                      {keyword}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className='font-semibold text-base leading-5 uppercase text-primary-6'>Danh mục phổ biến</h3>
                <div className='flex flex-wrap mt-4 gap-10'>
                  {homeCategories.slice(0, 4).map((category, index) => (
                    <Link
                      href={category.link}
                      key={index}
                      className={cn('w-[6.741rem] flex flex-col items-center gap-[1.13931rem] cursor-pointer group')}>
                      <div
                        className={cn(
                          'w-full h-[6.741rem] px-[1.32919rem] py-[1.21056rem] bg-transparent flex items-center justify-center rounded-full transition-all duration-300 group-hover:bg-secondary-5'
                        )}>
                        <Image src={category.icon} alt='' width={60} height={60} className='w-full h-full' />
                      </div>
                      <span className='text-xs font-semibold uppercase text-primary-6 text-center'>
                        {category.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className='font-semibold text-base leading-5 uppercase text-primary-6'>
                  Sản phẩm ĐƯỢC TÌM KIẾM NHIỀU NHẤT
                </h3>
                <div className='flex flex-col gap-4'>
                  {products.map((product, index) => (
                    <div key={index} className='flex gap-3 py-2 items-center border-b border-[#D5D5D5]'>
                      <Image alt='' height={100} src={product.image} width={100} className='rounded-lg' />
                      <div className='flex flex-col gap-1'>
                        <p className='heading-5 text-black'>{product.name}</p>
                        <ProductPrice price={product.price} salePrice={product.salePrice} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
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
