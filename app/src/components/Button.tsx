import React from 'preact/compat'
import clsx from 'clsx'
import styles from './Button.module.css'

interface Props extends React.ComponentProps<'button'> {
  href?: string
}

type LinkProps =  React.ComponentProps<'a'>

function LinkButton({ children, className, href, ...props }: LinkProps) {
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
