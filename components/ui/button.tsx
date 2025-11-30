import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none border-[0.7px]",
  {
    variants: {
      variant: {
        // Black button with dark blue background
        primary: 'bg-[#0D1B2A] text-white border-[#0D1B2A] disabled:bg-[#F8F9FA] disabled:border-[#F8F9FA] disabled:text-gray-900',
        // Light gray button
        secondary: 'bg-[#F8F9FA] text-gray-900 border-[#F8F9FA]',
        // Outline button with light gray border
        outline: 'bg-transparent border-[#F8F9FA] text-gray-900',
        // Ghost button
        ghost: 'border-transparent',
      },
      size: {
        default: 'h-12 px-8',
        sm: 'h-10 px-6',
        lg: 'h-14 px-10',
        icon: 'size-12',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

