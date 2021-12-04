import React, { ReactNode } from 'react'
import { cls } from '@utils/helpers'

export interface ButtonProps {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  className?: string
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  onClick?: () => void
}

const classes = {
  base: 'focus:outline-none transition ease-in-out duration-300 rounded-lg',
  disabled: 'opacity-50 cursor-not-allowed',
  size: {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-8 py-3 text-lg',
  },
  variant: {
    primary:
      'bg-indigo-500 hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 text-white',
    secondary:
      'bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white',
    danger:
      'bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white',
  },
}

const Button = ({
  children,
  type = 'button',
  className,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cls(`
    ${classes.base}
    ${classes.size[size]}
    ${classes.variant[variant]}
    ${disabled && classes.disabled}
    ${className}
`)}
      {...props}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button
