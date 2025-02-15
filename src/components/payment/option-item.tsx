import Checkbox from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

type OptionItemProps = {
  children: React.ReactNode
  selected?: boolean
  onClick?: () => void
  className?: string
}

const OptionItem = ({ selected, onClick, className, children }: OptionItemProps) => {
  return (
    <div
      className={cn(
        'flex gap-2 px-2 py-3 rounded-lg border text-sm items-center transition-all duration-300 relative',
        selected
          ? 'border-neutral-10 bg-secondary-5 font-semibold text-primary-5'
          : 'border-neutral-4 bg-transparent font-normal text-neutral-10',
        className
      )}>
      <Checkbox selected={selected} onClick={onClick} />
      <div className='flex-1'>{children}</div>
    </div>
  )
}
export default OptionItem
