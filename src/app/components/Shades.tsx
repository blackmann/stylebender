import Values from 'values.js'
import styles from './Shades.module.css'
import clsx from 'clsx'

interface Props {
  className?: string
  color: string
}

function Shades({ className, color }: Props) {
  const values = new Values(color)

  return (
    <div className={clsx(styles.shades, className)}>
      {values
        .tints(20)
        .reverse()
        .slice(1)
        .map((value, index) => (
          <div
            key={`tints-${index}`}
            style={{ background: value.hexString() }}
          ></div>
        ))}

      {values
        .shades(20)
        .slice(0, 4)
        .map((value, index) => (
          <div
            key={`shades-${index}`}
            style={{ background: value.hexString() }}
          ></div>
        ))}
    </div>
  )
}

export default Shades
export type { Props }
