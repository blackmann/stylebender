import React from 'react'
import useStyleConfig from '../hooks/use-style-config'
import Card from './Card'
import ColorPicker from './ColorPicker'
import Fieldset from './Fieldset'
import Section from './Section'
import TextInput from './TextInput'
import UnitInput from './UnitInput'
import Select from './Select'
import cs from './Common.module.css'
import clsx from 'clsx'

import '../../styles/typography.css'

enum Level {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

function Preview() {
  const [,,, _s] = useStyleConfig()

  function getProps(level: `${Level}`) {
    const levelTypography = _s(`typography.${level}`)

    return {
      '--font-family': levelTypography.fontFamily || _s('body.fontFamily'),
      [`--${level}-font-size`]: levelTypography.fontSize,
      [`--${level}-font-weight`]: levelTypography.fontWeight,
      [`--${level}-color`]: levelTypography.color,
    }
  }

  const h1Props = getProps('h1')
  const h2Props = getProps('h2')
  const h3Props = getProps('h3')
  const h4Props = getProps('h4')
  const h5Props = getProps('h5')
  const h6Props = getProps('h6')

  return (
    <>
      <header className="text-secondary medium">h1</header>

      <h1 style={h1Props}>The quick brown fox jumps over the lazy dog.</h1>

      <header className="text-secondary medium">h2</header>

      <h2 style={h2Props}>The quick brown fox jumps over the lazy dog.</h2>

      <header className="text-secondary medium">h3</header>

      <h3 style={h3Props}>The quick brown fox jumps over the lazy dog.</h3>

      <header className="text-secondary medium">h4</header>

      <h4 style={h4Props}>The quick brown fox jumps over the lazy dog.</h4>

      <header className="text-secondary medium">h5</header>

      <h5 style={h5Props}>The quick brown fox jumps over the lazy dog.</h5>

      <header className="text-secondary medium">h6</header>

      <h6 style={h6Props}>The quick brown fox jumps over the lazy dog.</h6>
    </>
  )
}

function Config() {
  const [, setStyle,, _s] = useStyleConfig()
  const [level, setLevel] = React.useState<`${Level}`>('h1')

  const levelTypography = _s(`typography.${level}`)

  const fontFamily = levelTypography.fontFamily || _s('body.fontFamily')
  const fontSize = levelTypography.fontSize || ''
  const fontWeight = levelTypography.fontWeight || '700'
  const color = levelTypography.color || _s('body.foreground')

  function handleChange<T>(property: string, value: T) {
    setStyle((style) => ({
      ...style,
      typography: {
        ...style.typography,
        [level]: { ...style.typography[level], [property]: value },
      },
    }))
  }

  return (
    <Card>
      <header className={clsx('medium text-secondary', cs.configHeader)}>
        <div>typography</div>

        <Select onChange={(e) => setLevel(e.target.value as Level)}>
          {Object.values(Level).map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </Select>
      </header>

      <Fieldset label="Font family" inputId="font-family">
        <TextInput
          id="font-family"
          onChange={(e) => handleChange('fontFamily', e.target.value)}
          value={fontFamily}
        />
      </Fieldset>

      <Fieldset label="Font weight" inputId="font-weight">
        <Select
          onChange={(e) => handleChange('fontWeight', e.target.value)}
          value={fontWeight}
          id="font-weight"
        >
          <option value="400">Regular</option>
          <option value="500">Medium</option>
          <option value="700">Bold</option>
        </Select>
      </Fieldset>

      <Fieldset label="Font size" inputId="font-size">
        <UnitInput
          id="font-size"
          onChange={(e) => handleChange('fontSize', e.target.value)}
          value={fontSize}
        />
      </Fieldset>

      <Fieldset label="Color">
        <ColorPicker
          onChange={(value) => {
            handleChange('color', value)
          }}
          value={color}
        />
      </Fieldset>
    </Card>
  )
}

function TypographySection() {
  return (
    <Section
      config={<Config />}
      id="typography"
      name={
        <>
          <span className="material-symbols-outlined me-1">title</span>{' '}
          Typography
        </>
      }
    >
      <Preview />
    </Section>
  )
}

export default TypographySection
