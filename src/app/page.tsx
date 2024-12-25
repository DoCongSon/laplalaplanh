'use client'
import BannerCarousel from '@/components/carousel/banner-carousel'
import CustomerReviewCarousel from '@/components/carousel/customer-review-carousel'
import { ReviewCardProps } from '@/components/carousel/review-card'
import BrandMarquee from '@/components/home/brand-marquee'
import BrandStory, { BrandStoryProps } from '@/components/home/brand-story'
import Collection, { CollectionItem } from '@/components/home/collection'
import { ProductCardProps } from '@/components/product/product-card'
import ProductCategoryList, { ProductCategory } from '@/components/product/product-category-list'
import ProductList from '@/components/product/product-list'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { useState } from 'react'
import RegisterPage from './auth/register/page'
import AuthLayout from './auth/layout'
import { useGlobalStore } from '@/providers/store-provider'

const slides = [
  {
    imageUrl: '/images/banner-1.png',
    title: 'TRỞ THÀNH THÀNH VIÊN CỦA LẤP LA LẤP LÁNH',
    description:
      'Đăng ký thành viên và hưởng những ưu đãi dành riêng cho thành viên của Lấp La Lấp Lánh (Dummy Content)',
  },
  {
    imageUrl: '/images/banner-1.png',
    title: 'Banner 2',
    description: 'Description 2',
  },
  {
    imageUrl: '/images/banner-1.png',
    title: 'Banner 3',
    description: 'Description 3',
  },
  {
    imageUrl: '/images/banner-1.png',
  },
  {
    imageUrl: '/images/banner-1.png',
  },
  {
    imageUrl: '/images/banner-1.png',
  },
]

const products: ProductCardProps[] = [
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé Rotobebe Áo ngủ chống mồ hôi trộm cho bé Rotobebe',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
]

const reviews: ReviewCardProps[] = [
  {
    customerName: 'hanhtran2012',
    rating: 5,
    review:
      '13:49 đặt, 14:03 nhận hàng rồi 😂😂😂 chọn giao hoả   tốc mà hông ngờ hoả tốc tới vậy, xinh yêu box tag đầy đủ cảm ơn shop rất nhiều ạ',
    imageUrl: '/images/review-1.png',
  },
  { customerName: 'hanhtran2012', rating: 4, review: 'Sản phẩm rất tốt', imageUrl: '/images/review-1.png' },
  { customerName: 'hanhtran2012', rating: 4, review: 'Sản phẩm rất tốt', imageUrl: '/images/review-1.png' },
  { customerName: 'hanhtran2012', rating: 4, review: 'Sản phẩm rất tốt', imageUrl: '/images/review-1.png' },
  { customerName: 'hanhtran2012', rating: 3, review: 'Sản phẩm rất tốt', imageUrl: '/images/review-1.png' },
]

const categories = [
  {
    name: 'Bé ngủ',
    icon: '/icons/icon-pillow.svg',
    link: '#',
  },
  {
    name: 'Bé ăn',
    icon: '/icons/icon-spoon.svg',
    link: '#',
  },
  {
    name: 'Bé điệu',
    icon: '/icons/icon-dress.svg',
    link: '#',
  },
  {
    name: 'In - thêu tên',
    icon: '/icons/icon-teddy-bear.svg',
    link: '#',
  },
  {
    name: 'Chăm sóc',
    icon: '/icons/icon-face-child.svg',
    link: '#',
  },
  {
    name: 'Bé chơi',
    icon: '/icons/icon-drum.svg',
    link: '#',
  },
  {
    name: 'Chăm sóc gia đình',
    icon: '/icons/icon-family-home.svg',
    link: '#',
  },
]

const collectionItems: CollectionItem[] = [
  {
    imageUrl: '/images/collection-main.jpg',
    title: 'Mom-to-be collection',
    type: 'main',
  },
  {
    imageUrl: '/images/collection-main.jpg',
    title: 'BST Cáo con',
    type: 'sub',
  },
  {
    imageUrl: '/images/collection-main.jpg',
    title: 'BST Chiếc khăn gió ấm',
    type: 'sub',
  },
]

const brandStory: BrandStoryProps = {
  image: '/images/brand-story.png',
  title: 'Câu chuyện thương hiệu',
  description:
    'Ra đời trong những ngày đầu xuân 2018, Lấp La Lấp Lánh (Lấp Lánh) là sự kết hợp của hai người bạn - một ở Hàn, một ở Việt Nam - có chung tình yêu con trẻ, đam mê cái đẹp và sở thích kinh doanh. Trải qua nhiều năm, hiện tại Lấp Lánh của chúng mình vẫn trung thành với những sản phẩm chất lượng cao cho Mẹ & Bé đến từ xứ sở Kim Chi, với giá cả cạnh tranh, tinh thần cầu thị, và dịch vụ luôn cố gắng hoàn thiện mỗi ngày.',
  aboutLink: '/about',
}

const brandMarqueeItems = [
  '/images/brand-1.png',
  '/images/brand-2.png',
  '/images/brand-3.png',
  '/images/brand-6.png',
  '/images/brand-7.png',
  '/images/brand-1.png',
  '/images/brand-2.png',
  '/images/brand-3.png',
  '/images/brand-6.png',
  '/images/brand-7.png',
  '/images/brand-7.png',
  '/images/brand-1.png',
  '/images/brand-2.png',
  '/images/brand-3.png',
  '/images/brand-6.png',
  '/images/brand-7.png',
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(categories[0])
  const user = useGlobalStore((state) => state.user)

  const handleCategoryClick = (category: ProductCategory) => {
    setActiveCategory(category)
  }

  return (
    <div className=''>
      <BannerCarousel slides={slides} id='1' />
      <div className='max-w-screen-2xl mx-auto px-[6.5rem] mt-20'>
        <ProductCategoryList categories={categories} active={activeCategory} onClick={handleCategoryClick} />
        <Separator className='mt-10' />
        <ProductList className='mt-11' title='Best Seller' products={products} readMoreLink='#' />
        <Separator className='mt-11' />
        <ProductList className='mt-11' title='New arrivals' products={products} readMoreLink='#' />
        <Separator className='mt-11' />
        <ProductList
          className='mt-11'
          title='Sale'
          products={products}
          readMoreLink='#'
          listType='carousel'
          titleType='primary'
        />
        <Separator className='mt-20' />
        <Collection items={collectionItems} className='mt-10' />
        <BrandStory {...brandStory} className='mt-20' />
      </div>
      <div className='bg-secondary-4 py-16 mt-16'>
        <div className='flex items-center justify-center gap-14 py-6 border-t border-b border-neutral-4'>
          <div className='flex items-center gap-3'>
            <Image src='/icons/icon-logo-star.svg' alt='' width={37} height={37} />
            <h2 className='heading-2 text-primary-6'>Mang cả Hàn Quốc về cho mẹ</h2>
          </div>
          <div className='flex items-center gap-3'>
            <Image src='/icons/icon-logo-star.svg' alt='' width={37} height={37} />
            <h2 className='heading-2 text-primary-6'>Khách hàng là trung tâm</h2>
          </div>
          <div className='flex items-center gap-3'>
            <Image src='/icons/icon-logo-star.svg' alt='' width={37} height={37} />
            <h2 className='heading-2 text-primary-6'>Đồng hành cùng cha mẹ</h2>
          </div>
        </div>
        <h2 className='title leading-none text-primary-6 text-center mt-10'>KIỂM CHỨNG BỞI CHA MẸ</h2>
        <div className='max-w-screen-2xl mx-auto px-[6.5rem] mt-10'>
          <CustomerReviewCarousel reviews={reviews} id='1' />
        </div>
      </div>
      <BrandMarquee className='my-16' brands={brandMarqueeItems} />
      {!user && (
        <AuthLayout>
          <RegisterPage />
        </AuthLayout>
      )}
    </div>
  )
}
