import ColorPicker from './ColorPicker'
import Section from './Section'
import styles from './ColorSection.module.css'
import Button from './Button'
import Shades from './Shades'
import useStyleConfig from '../hooks/use-style-config'
import clsx from 'clsx'

type ColorTypes = 'primary' | 'secondary' | 'tertiary'

function Preview() {
  const [style, setStyle] = useStyleConfig()

  function handleColorSelect(which: ColorTypes, value: string) {
    setStyle((style) => ({
      ...style,
      colors: { ...style.colors, [which]: value }
    }))
  }

  function handleShadesUpdate(which: ColorTypes, value: string[]) {
    const key = `${which}Shades`
    setStyle((style) => ({
      ...style,
      colors: { ...style.colors, [key]: value }
    }))
  }

  const { primary, secondary, tertiary } = style.colors

  return (
    <div className={styles.preview}>
      <header className={clsx(styles.shadeIndices, 'text-secondary')}>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index}>{(index + 1) * 100}</div>
        ))}
      </header>

      <div className={styles.baseColor}>
        <div>
          <header>Primary</header>
          <ColorPicker
            value={primary}
            onChange={(value) => handleColorSelect('primary', value)}
          />
        </div>

        <Shades
          className={styles.shades}
          color={primary}
          inform={(shades) => handleShadesUpdate('primary', shades)}
        />
      </div>

      <div className={styles.baseColor}>
        <div>
          <header>Secondary</header>
          <ColorPicker
            value={secondary}
            onChange={(value) => handleColorSelect('secondary', value)}
          />
        </div>

        <Shades
          className={styles.shades}
          color={secondary}
          inform={(shades) => handleShadesUpdate('secondary', shades)}
        />
      </div>

      <div className={styles.baseColor}>
        <div>
          <header>Tertiary</header>
          <ColorPicker
            value={tertiary}
            onChange={(value) => handleColorSelect('tertiary', value)}
          />
        </div>

        <Shades
          className={styles.shades}
          color={tertiary}
          inform={(shades) => handleShadesUpdate('tertiary', shades)}
        />
      </div>
    </div>
  )
}

function generateColor() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')}`
}

function ColorSection() {
  const [style, setStyle] = useStyleConfig()

  function handleRandomizeColors() {
    setStyle((style) => ({
      ...style,
      colors: {
        ...style.colors,
        primary: generateColor(),
        secondary: generateColor(),
        tertiary: generateColor(),
      },
    }))
  }

  return (
    <Section
      config={
        <Button className="plain" onClick={handleRandomizeColors}>
          `<span className="material-symbols-outlined me-1">shuffle</span>{' '}
          Randomize
        </Button>
      }
      id='colors'
      name={
        <>
          <span className='material-symbols-outlined me-1'>palette</span>
          Colors
        </>
      }
    >
      <Preview />
    </Section>
  )
}

export default ColorSection
