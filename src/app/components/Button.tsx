import type React from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'

interface Props extends React.ComponentProps<'button'> {}

function Button({ children, className, ...props }: Props) {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  )
}

export default Button
export type { Props }
