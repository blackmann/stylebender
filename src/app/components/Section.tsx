import { LinkButton } from './Button'
import styles from './Section.module.css'

interface Props extends React.PropsWithChildren {
  config: React.ReactNode
  id: string
  name: React.ReactNode
}

function Section({ children, config, id, name }: Props) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles['nav-side']}>
        <LinkButton className="plain" href={`#${id}`}>{name}</LinkButton>
      </div>

      <div className={styles.preview}>{children}</div>

      <div className={styles.config}>{config}</div>
    </section>
  )
}

export default Section
export type { Props }
