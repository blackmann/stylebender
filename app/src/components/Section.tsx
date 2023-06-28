import { AnimatePresence, motion } from 'framer-motion'
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
      <div class={styles.config}>
        <AnimatePresence>
          {checked && (
            <motion.div
              animate={{ translateY: 10 }}
              exit={{
                translateY: -80,
                opacity: 0,
                transition: { duration: 0.1 },
              }}
              key={`config-${id}`}
            >
              {config}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Section
