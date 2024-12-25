import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'

type MainBreadcrumbProps = {
  items: { label: string; href: string }[]
  className?: string
}

const MainBreadcrumb = ({ items, className }: MainBreadcrumbProps) => {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        {items &&
          items.slice(0, items.length - 1).map((item, index) => (
            <div key={index} className='flex items-center gap-2'>
              <BreadcrumbSeparator />
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              </BreadcrumbItem>
            </div>
          ))}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{items[items.length - 1].label}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default MainBreadcrumb
