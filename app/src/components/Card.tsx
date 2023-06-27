import React from 'preact/compat'
import styles from './Card.module.css'

type Props = React.PropsWithChildren

function Card({ children }: Props) {
  return <div className={styles.card}>{children}</div>
}

export default Card
export type { Props }
