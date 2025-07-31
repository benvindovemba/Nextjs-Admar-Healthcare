import React from 'react'
import clsx from 'clsx'

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={clsx(
        'rounded-xl border border-border bg-card text-card-foreground shadow-md p-6',
        className
      )}
    >
      {children}
    </div>
  )
}
