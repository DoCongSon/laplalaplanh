import { cn } from '@/lib/utils'

type CardSectionProps = {
  title?: string
  className?: string
  children?: React.ReactNode
}

const CardSection = ({ className, title, children }: CardSectionProps) => {
  return (
    <div className={cn('p-6 gap-3 flex flex-col rounded-lg border border-neutral-4 bg-secondary-4', className)}>
      {title && <h2 className='text-base font-semibold leading-none uppercase text-primary-6'>{title}</h2>}
      {children}
    </div>
  )
}
export default CardSection
