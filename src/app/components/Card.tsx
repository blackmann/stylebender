import styles from './Card.module.css'

interface Props extends React.PropsWithChildren {}

function Card({ children }: Props) {
  return <div className={styles.card}>{children}</div>
}

export default Card
export type { Props }
