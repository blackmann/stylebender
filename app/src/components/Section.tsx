import { ComponentChildren } from 'preact'
import React from 'preact/compat'
import clsx from 'clsx'
import styles from './Section.module.css'

interface Props extends React.PropsWithChildren {
  config?: ComponentChildren
  id: string
  name: ComponentChildren
}

function Section({ config, id, name, children }: Props) {
  return (
    <div class={styles.section} id={id}>
      <div class={styles['nav-side']}>{name}</div>
      <div class={clsx(styles.preview, 'root')}>{children}</div>
      <div class={styles.config}>{config}</div>
    </div>
  )
}

export default Section
