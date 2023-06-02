import type React from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'

interface Props extends React.ComponentProps<'button'> {
  href?: string
}

interface LinkProps extends React.ComponentProps<'a'> {}

function LinkButton({children, className, href, ...props}: LinkProps) {
  return (
    <a className={clsx(styles.button, className)} href={href} {...props}>
      {children}
    </a>
  )
}

function Button({ children, className, ...props }: Props) {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  )
}

export default Button
export { LinkButton }
export type { Props, LinkProps }
