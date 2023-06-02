import clsx from 'clsx'
import styles from './Select.module.css'

interface Props extends React.ComponentProps<'select'> {}

function Select({ children, className, ...props }: Props) {
  return (
    <select className={clsx(styles.select, className)} {...props}>
      {children}
    </select>
  )
}

export default Select
