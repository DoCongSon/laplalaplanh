import { ReviewCardProps } from '@/components/carousel/review-card'
import { BrandStoryProps } from '@/components/home/brand-story'
import { CollectionItem } from '@/components/home/collection'
import { ProductCardProps } from '@/components/product/product-card'
import { ProductReviewItemProps } from '@/components/product/product-review-item'
import { FilterItem } from '@/components/ui/filter-nature'
import { JSX } from 'react'

export type SortProduct = 'default' | 'price-asc' | 'price-desc' | 'newest' | 'best-sell'

export type Description = { type: 'image'; content: string } | { type: 'text'; content: JSX.Element }

export type paymentProgressItem = { progress: 'cart' | 'payment' | 'complete'; description: string; name: string }

export type MenuItem = {
  name: string
  icon?: string
  href?: string
  items?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  {
    name: 'New Arrivals',
    href: '/new-arrival',
  },
  {
    name: 'Sale',
    href: '/sale',
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

export const slides = [
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

export const products: ProductCardProps[] = [
  {
    slug: 'ao-ngu-chong-mo-hoi-trom-cho-be',
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé lorem ipsum dolor sit amet consectetur adipisicing elit',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    slug: 'ao-ngu-chong-mo-hoi-trom-cho-be',
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé ',
    price: 1400000,
    tags: ['out-of-stock'],
    cart: true,
  },
  {
    slug: 'ao-ngu-chong-mo-hoi-trom-cho-be',
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé ',
    price: 1400000,
    salePrice: 1200000,
    cart: true,
  },
  {
    slug: 'ao-ngu-chong-mo-hoi-trom-cho-be',
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé ',
    price: 1400000,
    salePrice: 1200000,
    tags: ['order'],
    cart: true,
  },
  {
    slug: 'ao-ngu-chong-mo-hoi-trom-cho-be',
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé ',
    price: 1400000,
    salePrice: 1200000,
    tags: ['best-seller'],
    cart: true,
  },
  {
    slug: 'ao-ngu-chong-mo-hoi-trom-cho-be',
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé ',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    slug: 'ao-ngu-chong-mo-hoi-trom-cho-be',
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé ',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
  {
    slug: 'ao-ngu-chong-mo-hoi-trom-cho-be',
    image: '/images/product-1.jpg',
    name: 'Áo ngủ chống mồ hôi trộm cho bé ',
    price: 1400000,
    salePrice: 1200000,
    tags: ['new', 'order'],
    cart: true,
  },
]

export const reviewCards: ReviewCardProps[] = [
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

export const homeCategories = [
  {
    name: 'Bé ngủ',
    icon: '/icons/icon-pillow.svg',
    link: '/category/be-ngu',
  },
  {
    name: 'Bé ăn',
    icon: '/icons/icon-spoon.svg',
    link: '/category/be-an',
  },
  {
    name: 'Bé điệu',
    icon: '/icons/icon-dress.svg',
    link: '/category/be-dieu',
  },
  {
    name: 'In - thêu tên',
    icon: '/icons/icon-teddy-bear.svg',
    link: '/category/in-theu-ten',
  },
  {
    name: 'Chăm sóc',
    icon: '/icons/icon-face-child.svg',
    link: '/category/cham-soc',
  },
  {
    name: 'Bé chơi',
    icon: '/icons/icon-drum.svg',
    link: '/category/be-choi',
  },
  {
    name: 'Chăm sóc gia đình',
    icon: '/icons/icon-family-home.svg',
    link: '/category/cham-soc-gia-dinh',
  },
]

export const collectionItems: CollectionItem[] = [
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

export const brandStory: BrandStoryProps = {
  image: '/images/brand-story.png',
  title: 'Câu chuyện thương hiệu',
  description:
    'Ra đời trong những ngày đầu xuân 2018, Lấp La Lấp Lánh (Lấp Lánh) là sự kết hợp của hai người bạn - một ở Hàn, một ở Việt Nam - có chung tình yêu con trẻ, đam mê cái đẹp và sở thích kinh doanh. Trải qua nhiều năm, hiện tại Lấp Lánh của chúng mình vẫn trung thành với những sản phẩm chất lượng cao cho Mẹ & Bé đến từ xứ sở Kim Chi, với giá cả cạnh tranh, tinh thần cầu thị, và dịch vụ luôn cố gắng hoàn thiện mỗi ngày.',
  aboutLink: '/about',
}

export const brandMarqueeItems = [
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

export const images = [
  '/images/product-1.jpg',
  '/images/product-1.jpg',
  '/images/product-1.jpg',
  '/images/product-1.jpg',
  '/images/product-1.jpg',
  '/images/product-1.jpg',
  '/images/product-1.jpg',
]

export const filters: FilterItem[] = [
  {
    name: 'Nhóm sản phẩm',
    values: [
      {
        name: 'Bé ăn',
        selected: false,
      },
      {
        name: 'Bé chơi',
        selected: false,
      },
      {
        name: 'Bé ngủ',
        selected: false,
      },
      {
        name: 'Bé điệu',
        selected: false,
      },
      {
        name: 'Chăm sóc bé',
        selected: false,
      },
      {
        name: 'in - thêu tên',
        selected: false,
      },
      {
        name: 'Chăm sóc gia đình',
        selected: false,
      },
    ],
  },
  {
    name: 'Trạng thái',
    values: [
      { name: 'Khuyến mãi', selected: false },
      { name: 'Hàng có sẵn', selected: false },
      { name: 'Hàng order', selected: false },
    ],
  },
]

export const sortItems: { name: string; value: SortProduct }[] = [
  { name: 'mới nhất', value: 'newest' },
  { name: 'bán chạy', value: 'best-sell' },
  { name: 'giá tăng dần', value: 'price-asc' },
  { name: 'giá giảm dần', value: 'price-desc' },
]

export const reviewProducts: ProductReviewItemProps[] = [
  {
    avatar: '/images/avatar.png',
    name: 'Nguyễn Thị Hồng',
    date: '20 Oct 2021',
    rating: 3,
    productNature: 'Màu: Xanh',
    content: 'Sản phẩm rất tốt, chất lượng tuyệt vời',
    images: ['/images/product-1.jpg', '/images/product-1.jpg'],
  },
  {
    avatar: '/images/avatar.png',
    name: 'Nguyễn Thị Hồng',
    date: '20 Oct 2021',
    rating: 5,
    productNature: 'Màu: Xanh',
    content: 'Sản phẩm rất tốt, chất lượng tuyệt vời',
    images: ['/images/product-1.jpg', '/images/product-1.jpg'],
  },
]

export const categories = [
  {
    slug: 'be-ngu',
    name: 'Bé ngủ',
    icon: '/icons/icon-pillow.svg',
    items: [
      { name: 'Giường, quây, cũi', href: '#' },
      { name: 'Chăn, ga, gối, đệm', href: '#' },
      { name: 'Kén, nhộng chũn, quần bé', href: '#' },
    ],
  },
  {
    slug: 'be-an',
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
    slug: 'be-dieu',
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
    slug: 'in-theu-ten',
    name: 'In - thêu tên',
    icon: '/icons/icon-teddy-bear.svg',
    items: [
      { name: 'Khăn mặt', href: '#' },
      { name: 'Sticker', href: '#' },
      { name: 'Huy hiệu / Name tag', href: '#' },
      { name: 'Sản phẩm khác', href: '#' },
    ],
  },
  {
    slug: 'cham-soc',
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
    slug: 'be-choi',
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
    slug: 'cham-soc-gia-dinh',
    name: 'Chăm sóc gia đình',
    icon: '/icons/icon-family-home.svg',
    items: [
      { name: 'Thực phẩm chức năng', href: '#' },
      { name: 'Máy móc thiết bị', href: '#' },
      { name: 'Mỹ phẩm & phụ kiện', href: '#' },
      { name: 'Sản phẩm khác', href: '#' },
    ],
  },
]

export const paymentProgressItems: paymentProgressItem[] = [
  { name: 'Giỏ hàng', description: 'Chọn sản phẩm', progress: 'cart' },
  { name: 'Thanh toán', description: 'Nhập thông tin mua hàng', progress: 'payment' },
  { name: 'Hoàn tất', description: 'Trạng thái dơn đặt hàng', progress: 'complete' },
]

export const homeConstants = {
  slides,
  products: products.map((product) => ({ ...product, cart: false, onCartClick: () => {}, onWishlistClick: () => {} })),
  reviewCards,
  homeCategories,
  collectionItems,
  brandStory,
  brandMarqueeItems,
}

export const productListConstants = {
  images,
  filters,
  products,
  sortItems,
}

export const productConstants = {
  images,
  products,
  reviewProducts,
}
