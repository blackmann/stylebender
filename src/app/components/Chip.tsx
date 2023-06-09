import clsx from 'clsx'
import styles from './Chip.module.css'

interface Props extends React.PropsWithChildren {
  checked?: boolean
  className?: string
  onClick?: VoidFunction
}

function Chip({ checked, children, className, onClick }: Props) {
  const interactive = Boolean(onClick)

  return (
    <div
      className={clsx(styles.chip, className, {
        [styles.interactive]: interactive,
        [styles.checked]: checked
      })}
      onClick={onClick}
      tabIndex={interactive ? 0 : undefined}
    >
      {children}
    </div>
  )
}

export default Chip
export type { Props }
