import React from 'preact/compat'
import clsx from 'clsx'
import styles from './TextInput.module.css'

type Props = React.ComponentProps<'input'>

function TextInput({ className, ...props }: Props) {
  return <input className={clsx(styles.input, className)} {...props} />
}

export default TextInput
export type { Props }
