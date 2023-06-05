import clsx from 'clsx'
import { LinkButton } from './Button'
import styles from './Section.module.css'
import useHash from '../hooks/use-location'
import { AnimatePresence, motion } from 'framer-motion'
import useStyleConfig from '../hooks/use-style-config'

interface Props extends React.PropsWithChildren {
  config: React.ReactNode
  id: string
  name: React.ReactNode
}

function Section({ children, config, id, name }: Props) {
  const [{ body }] = useStyleConfig()

  const hash = useHash()
  const checked = hash === `#${id}`

  return (
    <div className={styles.section} id={id}>
      <div className={styles['nav-side']}>
        <LinkButton className={clsx('plain', { checked })} href={`#${id}`}>
          {name}
        </LinkButton>
      </div>

      <div
        className={styles.preview}
        style={{
          // @ts-ignore
          '--background-color': body.background,
          '--font-family': body.fontFamily,
          '--font-size': body.fontSize,
          '--foreground-color': body.foreground
        }}
        data-preview="true"
      >
        {children}
      </div>

      <div className={styles.config}>
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
export type { Props }
