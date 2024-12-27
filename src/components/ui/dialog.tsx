'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/lib/utils'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        className
      )}
      {...props}>
      {children}
      <DialogPrimitive.Close className='absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M6.41974 4.82928C6.20648 4.63056 5.92441 4.52238 5.63296 4.52752C5.34151 4.53266 5.06343 4.65073 4.85731 4.85685C4.65119 5.06297 4.53312 5.34105 4.52798 5.6325C4.52284 5.92395 4.63102 6.20602 4.82974 6.41928L10.4097 11.9993L4.82974 17.5793C4.71921 17.6823 4.63056 17.8065 4.56907 17.9445C4.50758 18.0825 4.47452 18.2314 4.47185 18.3825C4.46919 18.5336 4.49698 18.6836 4.55356 18.8237C4.61014 18.9638 4.69436 19.091 4.80118 19.1978C4.90801 19.3047 5.03526 19.3889 5.17535 19.4455C5.31543 19.502 5.46547 19.5298 5.61653 19.5272C5.76758 19.5245 5.91655 19.4914 6.05455 19.43C6.19255 19.3685 6.31675 19.2798 6.41974 19.1693L11.9997 13.5893L17.5797 19.1693C17.6827 19.2798 17.8069 19.3685 17.9449 19.43C18.0829 19.4914 18.2319 19.5245 18.383 19.5272C18.534 19.5298 18.6841 19.502 18.8241 19.4455C18.9642 19.3889 19.0915 19.3047 19.1983 19.1978C19.3051 19.091 19.3893 18.9638 19.4459 18.8237C19.5025 18.6836 19.5303 18.5336 19.5276 18.3825C19.525 18.2314 19.4919 18.0825 19.4304 17.9445C19.3689 17.8065 19.2803 17.6823 19.1697 17.5793L13.5897 11.9993L19.1697 6.41928C19.3685 6.20602 19.4766 5.92395 19.4715 5.6325C19.4664 5.34105 19.3483 5.06297 19.1422 4.85685C18.9361 4.65073 18.658 4.53266 18.3665 4.52752C18.0751 4.52238 17.793 4.63056 17.5797 4.82928L11.9997 10.4093L6.41974 4.82928Z'
            fill='#344B4E'
          />
        </svg>
        <span className='sr-only'>Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
