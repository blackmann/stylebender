import clsx from 'clsx'
import styles from './Fieldset.module.css'

interface Props extends React.PropsWithChildren {
  className?: string
  inputId?: string
  label: React.ReactNode
}

function Fieldset({ children, className, inputId, label }: Props) {
  return (
    <fieldset className={clsx(styles.fieldset, className)}>
      <label htmlFor={inputId}>{label}</label>

      <div className={styles.input}>{children}</div>
    </fieldset>
  )
}

export default Fieldset
export type { Props }
