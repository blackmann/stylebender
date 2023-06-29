import { getStyle as s, setStyle } from '../config'
import Card from '../components/Card'
import ColorPicker from '../components/ColorPicker'
import Fieldset from '../components/Fieldset'
import React from 'preact/compat'
import Section from '../components/Section'
import Select from '../components/Select'
import TextInput from '../components/TextInput'
import UnitInput from '../components/UnitInput'
import clsx from 'clsx'
import cs from './Common.module.css'
import ComponentHeader from '../components/ComponentHeader'

function Typography() {
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

function Preview() {
  return (
    <>
      <ComponentHeader>h1</ComponentHeader>
      <h1>The quick brown fox jumps over the lazy dog</h1>

      <ComponentHeader>h2</ComponentHeader>
      <h2>The quick brown fox jumps over the lazy dog</h2>

      <ComponentHeader>h3</ComponentHeader>
      <h3>The quick brown fox jumps over the lazy dog</h3>

      <ComponentHeader>h4</ComponentHeader>
      <h4>The quick brown fox jumps over the lazy dog</h4>

      <ComponentHeader>h5</ComponentHeader>
      <h5>The quick brown fox jumps over the lazy dog</h5>

      <ComponentHeader>h6</ComponentHeader>
      <h6>The quick brown fox jumps over the lazy dog</h6>
    </>
  )
}

enum Level {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

function Config() {
  const [level, setLevel] = React.useState<`${Level}`>('h1')

  const levelTypography = s(`typography.${level}`) as Record<string, any>

  const fontFamily = levelTypography.fontFamily || s('body.fontFamily')
  const fontSize = levelTypography.fontSize || ''
  const fontWeight = levelTypography.fontWeight || '700'
  const color = levelTypography.color || s('body.foreground')

  function handleChange(key: string, value: string) {
    setStyle(`typography.${level}.${key}`, value)
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

      <Fieldset label="Font family" inputId="typography-font-family">
        <TextInput
          id="typography-font-family"
          onChange={(e) => handleChange('fontFamily', e.target.value)}
          value={fontFamily}
        />
      </Fieldset>

      <Fieldset label="Font weight" inputId="typography-font-weight">
        <Select
          id="typography-font-weight"
          onChange={(e) => handleChange('fontWeight', e.target.value)}
          value={fontWeight}
        >
          <option value="400">Regular</option>
          <option value="500">Medium</option>
          <option value="700">Bold</option>
        </Select>
      </Fieldset>

      <Fieldset label="Font size" inputId="typography-font-size">
        <UnitInput
          id="typography-font-size"
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

export default Typography
