import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='auth-layout'>
      <div className='max-w-screen-2xl mx-auto px-[6.5rem] py-20'>{children}</div>
    </div>
  )
}

export default AuthLayout
