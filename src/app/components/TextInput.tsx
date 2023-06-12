import clsx from 'clsx'
import styles from './TextInput.module.css'

interface Props extends React.ComponentProps<'input'> {}

function TextInput({ className, id, ...props }: Props) {
  return <input className={clsx(styles.input, className)} id={id} {...props} />
}

export default TextInput
export type { Props }
