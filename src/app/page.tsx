'use client'
import BannerCarousel from '@/components/carousel/banner-carousel'
import CustomerReviewCarousel from '@/components/carousel/customer-review-carousel'
import BrandMarquee from '@/components/home/brand-marquee'
import BrandStory from '@/components/home/brand-story'
import Collection from '@/components/home/collection'
import ProductCategoryList from '@/components/product/product-category-list'
import ProductList from '@/components/product/product-list'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import RegisterPage from './auth/register/page'
import AuthLayout from './auth/layout'
import { useGlobalStore } from '@/providers/store-provider'
import { homeConstants } from '@/constants'
const { slides, homeCategories, products, collectionItems, brandStory, reviewCards, brandMarqueeItems } = homeConstants

export default function Home() {
  const user = useGlobalStore((state) => state.user)

  return (
    <div className=''>
      <BannerCarousel slides={slides} id='1' />
      <div className='max-w-screen-2xl mx-auto px-[6.5rem] mt-20'>
        <ProductCategoryList categories={homeCategories} />
        <Separator className='mt-10' />
        <ProductList className='mt-11' title='Best Seller' products={products} readMoreLink='/best-seller' />
        <Separator className='mt-11' />
        <ProductList className='mt-11' title='New arrivals' products={products} readMoreLink='/new-arrival' />
        <Separator className='mt-11' />
        <ProductList
          className='mt-11'
          title='Sale'
          products={products}
          readMoreLink='/sale'
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
          <CustomerReviewCarousel reviews={reviewCards} id='1' />
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
