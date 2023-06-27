import { ComponentChildren } from 'preact'
import React from 'preact/compat'
import clsx from 'clsx'
import styles from './Fieldset.module.css'

interface Props extends React.PropsWithChildren {
  className?: string
  inputId?: string
  label: ComponentChildren
  disabled?: boolean
}

function Fieldset({ children, className, disabled, inputId, label }: Props) {
  return (
    <fieldset className={clsx(styles.fieldset, className)} disabled={disabled}>
      <label htmlFor={inputId}>{label}</label>

      <div className={styles.input}>{children}</div>
    </fieldset>
  )
}

export default Fieldset
export type { Props }
