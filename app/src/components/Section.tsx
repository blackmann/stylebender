import { ComponentChildren } from 'preact'
import { LinkButton } from './Button'
import React from 'preact/compat'
import clsx from 'clsx'
import styles from './Section.module.css'
import useHash from '../hooks/use-hash'

interface Props extends React.PropsWithChildren {
  config?: ComponentChildren
  id: string
  name: ComponentChildren
}

function Section({ config, id, name, children }: Props) {
  const hash = useHash()
  const checked = hash === `#${id}`

  return (
    <div class={styles.section} id={id}>
      <div class={styles['nav-side']}>
        <LinkButton className={clsx('plain', { checked })} href={`#${id}`}>
          {name}
        </LinkButton>
      </div>
      <div class={clsx(styles.preview, 'root')}>{children}</div>
      <div class={styles.config}>{config}</div>
    </div>
  )
}

export default Section
