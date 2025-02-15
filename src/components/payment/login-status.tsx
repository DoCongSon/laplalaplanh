'use client'
import CardSection from '@/components/payment/card-section'
import OptionItem from '@/components/payment/option-item'
import { useGlobalStore } from '@/providers/store-provider'
import { useRouter } from 'next/navigation'

const LoginStatus = () => {
  const user = useGlobalStore((state) => state.user)
  const router = useRouter()

  if (user) {
    return null
  }

  return (
    <CardSection title='Trạng thái đăng nhập'>
      <OptionItem onClick={() => router.push('/auth/login')}>
        Đăng nhập để tận hưởng các tính năng dành riêng cho khách hàng thân thiết của Lấp La Lấp Lánh
      </OptionItem>
      <OptionItem selected onClick={() => {}}>
        Mua hàng nhanh không cần đăng nhập
      </OptionItem>
    </CardSection>
  )
}
export default LoginStatus
