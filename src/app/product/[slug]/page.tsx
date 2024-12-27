import MainBreadcrumb from '@/components/layout/main-breadcrumb'
import ProductCard from '@/components/product/product-card'
import ProductImageView from '@/components/product/product-image-view'
import ProductList from '@/components/product/product-list'
import ProductNature from '@/components/product/product-nature'
import ProductReviewItem from '@/components/product/product-review-item'
import ProductViewed from '@/components/product/product-viewed'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Description, productConstants } from '@/constants'
import Image from 'next/image'
import React from 'react'
const { images, reviewProducts, products } = productConstants

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const items = [
    { label: 'Product', href: '/product' },
    { label: 'Product 1', href: '/product/product-1' },
  ]

  const description: Description[] = [
    {
      type: 'image',
      content: '/images/description.png',
    },
    {
      type: 'text',
      content: (
        <p>
          1 số đặc điểm của chiếc gối thần thánh, được review cực kỳ tốt suốt nhiều năm: <br /> <br /> - Gối được thiết
          kế với độ lõm và góc nghiêng chuẩn, đảm bảo chức năng chống trào ngược và chống sặc mà vẫn êm ái nâng niu giấc
          ngủ của bé, <br />- Ngoài công dụng trên, gối còn là nơi để bé TẬP LẪY (tummy time), nằm chơi, nằm ngủ, và làm
          background siêu yêu để mẹ chụp hình con, lưu dấu những khoảnh khắc đầu đời bé nữa,
          <br />- Vỏ gối CÓ THỂ THÁO RA và vệ sinh dễ dàng. Đa số gối chống trào ngược trên thị trường KHÔNG tháo được
          vỏ nên vấn đề vệ sinh rất bất tiện. Các mẹ lưu ý trước khi quyết định đầu tư nha,
        </p>
      ),
    },
    {
      type: 'image',
      content: '/images/description.png',
    },
  ]

  console.log('🚀 ~ params:', params)

  return (
    <div className='max-w-screen-2xl mx-auto px-[6.5rem] mt-10'>
      <MainBreadcrumb items={items} />
      <div className='flex gap-20 mt-4'>
        <ProductImageView images={images} name='Product 1' />
        <ProductNature
          name='Product 1'
          price={100000}
          salePrice={80000}
          tags={['new', 'order']}
          type='order'
          colors={[
            { value: 'red', outOfStock: false },
            { value: 'blue', outOfStock: false },
            { value: 'yellow', outOfStock: false },
            { value: 'green', outOfStock: true },
          ]}
          sizes={[
            { value: '0-1M', outOfStock: false },
            { value: '1-3M', outOfStock: false },
            { value: '3-6M', outOfStock: false },
            { value: '6-9M', outOfStock: true },
          ]}
        />
      </div>
      <div className='mt-20 flex gap-10'>
        <Tabs
          defaultValue='description'
          className='px-12 flex-1 py-10 rounded-xl bg-secondary-1 shadow-floating-button'>
          <TabsList className='bg-transparent'>
            <TabsTrigger
              value='description'
              className='heading-2 text-primary-9/50 uppercase bg-transparent data-[state=active]:text-primary-9 data-[state=active]:shadow-none data-[state=active]:underline'>
              Mô tả sản phẩm
            </TabsTrigger>
            <TabsTrigger
              value='review'
              className='heading-2 text-primary-9/50 uppercase bg-transparent data-[state=active]:text-primary-9 data-[state=active]:shadow-none data-[state=active]:underline'>
              Đánh giá (500)
            </TabsTrigger>
          </TabsList>
          <TabsContent value='description'>
            <div className='flex flex-col gap-5'>
              {description.map((item, index) => {
                if (item.type === 'image') {
                  return (
                    <Image
                      className='rounded-lg w-full h-auto'
                      width={800}
                      height={800}
                      key={index}
                      src={item.content}
                      alt='description'
                    />
                  )
                }
                return (
                  <div className='text-lg leading-6 text-primary-9' key={index}>
                    {item.content}
                  </div>
                )
              })}
            </div>
          </TabsContent>
          <TabsContent value='review'>
            <div className='flex flex-col gap-6'>
              {reviewProducts.map((review, index) => (
                <ProductReviewItem key={index} {...review} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        <div className='flex flex-col gap-5 pt-[1.8125rem]'>
          <h2 className='heading-2 text-primary-9'>Sản phẩm liên quan</h2>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      <ProductList products={products} title='Gợi ý cho cha mẹ' listType='carousel' id='12313' className='mt-20' />
      <ProductViewed id='abcd' productImages={images} className='mt-16 mb-40' />
    </div>
  )
}

export default page
