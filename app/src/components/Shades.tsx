import React from 'preact/compat'
import Values from 'values.js'
import clsx from 'clsx'
import styles from './Shades.module.css'

interface Props {
  className?: string
  color: string
  inform?: (shades: string[]) => void
}

function Shades({ className, color, inform }: Props) {
  const values = React.useMemo(() => new Values(color), [color])

  const tints = React.useMemo(
    () =>
      values
        .tints(20)
        .reverse()
        .slice(1)
        .map((value) => value.hexString()),
    [values]
  )

  const shades = React.useMemo(
    () =>
      values
        .shades(20)
        .slice(0, 4)
        .map((value) => value.hexString()),
    [values]
  )

  React.useEffect(() => {
    // inform?.([...tints, ...shades])
  }, [tints, shades, inform])

  return (
    <div className={clsx(styles.shades, className)}>
      {tints.map((color, index) => (
        <div key={`tints-${index}`} style={{ background: color }} />
      ))}

      {shades.map((color, index) => (
        <div key={`shades-${index}`} style={{ background: color }} />
      ))}
    </div>
  )
}

export default Shades
export type { Props }
