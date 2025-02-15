'use client'
import AuthLayout from '@/app/auth/layout'
import RegisterPage from '@/app/auth/register/page'
import { useGlobalStore } from '@/providers/store-provider'

const RegisterSection = () => {
  const user = useGlobalStore((state) => state.user)
  if (user) {
    return null
  }

  return (
    <AuthLayout>
      <RegisterPage />
    </AuthLayout>
  )
}
export default RegisterSection
