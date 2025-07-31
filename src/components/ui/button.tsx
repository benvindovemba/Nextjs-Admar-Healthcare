import React from 'react'
import clsx from 'clsx'
import { custom } from 'zod'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary' | 'accent' | 'destructive' | 'ghost' | 'outline' | 'link'
  size?: 'sm' | 'md' | 'lg' 
}

export const Button = ({
  className,
  variant = 'default',
  size = 'md',
  ...props
}: ButtonProps) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none'

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
  }

  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/80',
    destructive: 'bg-destructive text-white hover:bg-destructive/90',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900',
    outline: 'border border-gray-300 text-gray-900 bg-transparent hover:bg-gray-100',
    link: 'bg-transparent text-primary hover:underline p-0 h-auto',

  }

  return (
    <button
      className={clsx(base, sizes[size], variants[variant], className)}
      {...props}
    />
  )
}
