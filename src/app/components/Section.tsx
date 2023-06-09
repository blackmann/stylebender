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
  const [{ body, colors }] = useStyleConfig()

  const hash = useHash()
  const checked = hash === `#${id}`

  const colorVariables: Record<string, string> = {
    '--primary-color': colors.primary,
    '--secondary-color': colors.secondary,
    '--tertiary-color': colors.tertiary,
  }

  for (const [type, shades] of [
    ['primary', colors.primaryShades],
    ['secondary', colors.secondaryShades],
    ['tertiary', colors.tertiaryShades],
  ] as const) {
    for (const [i, shade] of shades.entries()) {
      colorVariables[`--${type}-color-${(i + 1) * 100}`] = shade
    }
  }

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
          '--foreground-color': body.foreground,
          '--secondary-color': body.secondaryColor,
          ...colorVariables
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
