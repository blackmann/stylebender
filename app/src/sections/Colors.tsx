import { getStyle as _s, setStyle } from '../config'
import Button from '../components/Button'
import ColorPicker from '../components/ColorPicker'
import ComponentHeader from '../components/ComponentHeader'
import React from 'preact/compat'
import Section from '../components/Section'
import Shades from '../components/Shades'
import clsx from 'clsx'
import styles from './Colors.module.css'

type ColorTypes = 'primary' | 'secondary' | 'accent'

function Colors() {
  function handleRandomizeColors() {
    setStyle('colors.primary', generateColor())
    setStyle('colors.accent', generateColor())
  }
  return (
    <Section
      config={
        <Button className="plain" onClick={handleRandomizeColors}>
          <span className="material-symbols-outlined me-1">shuffle</span>{' '}
          Randomize
        </Button>
      }
      id="colors"
      name={
        <>
          <span className="material-symbols-outlined me-1">palette</span>
          Colors
        </>
      }
    >
      <Preview />
    </Section>
  )
}

function Preview() {
  function handleColorSelect(which: ColorTypes, value: string) {
    setStyle(`colors.${which}`, value)
  }

  function handleShadesUpdate(which: ColorTypes, value: string[]) {
    setStyle(`colors.${which}Shades`, value)
  }

  const primary = _s('colors.primary') as string
  const accent = _s('colors.accent') as string
  const secondary = _s('colors.secondary') as string

  return (
    <div className={styles.preview}>
      <header className={clsx(styles.shadeIndices, 'text-secondary')}>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index}>{(index + 1) * 100}</div>
        ))}
      </header>

      <div className={styles.baseColor}>
        <div>
          <ComponentHeader>Primary</ComponentHeader>
          <ColorPicker
            value={primary}
            onChange={(value) => handleColorSelect('primary', value)}
          />
        </div>

        <Shades
          className={styles.shades}
          color={primary}
          inform={React.useCallback(
            (shades: string[]) => handleShadesUpdate('primary', shades),
            []
          )}
        />
      </div>

      <div className={styles.baseColor}>
        <div>
          <ComponentHeader>Accent</ComponentHeader>
          <ColorPicker
            value={accent}
            onChange={(value) => handleColorSelect('accent', value)}
          />
        </div>

        <Shades
          className={styles.shades}
          color={accent}
          inform={React.useCallback(
            (shades: string[]) => handleShadesUpdate('accent', shades),
            []
          )}
        />
      </div>

      <div className={styles.baseColor}>
        <div>
          <ComponentHeader>Secondary</ComponentHeader>
          <ColorPicker
            value={secondary}
            onChange={(value) => handleColorSelect('secondary', value)}
          />
        </div>

        <div className={styles.shades}>
          <Shades
            color={secondary}
            inform={React.useCallback(
              (shades: string[]) => handleShadesUpdate('secondary', shades),
              []
            )}
          />

          <p class="m-0 text-secondary">
            Used mainly for sub-titles or secondary texts
          </p>
        </div>
      </div>
    </div>
  )
}

function generateColor() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')}`
}

export default Colors
