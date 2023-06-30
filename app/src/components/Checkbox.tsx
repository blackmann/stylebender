import React from 'preact/compat'
import clsx from 'clsx'
import styles from './Checkbox.module.css'

type Props = React.ComponentProps<'input'>

function Checkbox({ className, ...props }: Props) {
  return (
    <input
      className={clsx(styles.checkbox, className)}
      {...props}
      type="checkbox"
    />
  )
}

export default Checkbox
export type { Props }
