import TextInput, { type Props } from './TextInput'
import clsx from 'clsx'
import styles from './UnitInput.module.css'

function UnitInput({ className, ...props }: Props) {
  return <TextInput className={clsx(styles.input, className)} {...props} />
}

export default UnitInput
