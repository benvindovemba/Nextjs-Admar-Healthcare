// components/ui/Input.tsx
import React from 'react'
import clsx from 'clsx'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={clsx(
        'w-full rounded-md border border-input bg-input text-foreground placeholder-muted-foreground px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition',
        className
      )}
      {...props}
    />
  )
}
