import useStyleConfig from '../hooks/use-style-config'
import Card from './Card'
import ColorPicker from './ColorPicker'
import Fieldset from './Fieldset'
import Section from './Section'
import TextInput from './TextInput'
import UnitInput from './UnitInput'

import '../../styles/body.css'

function Preview() {
  const [{ body }] = useStyleConfig()

  return (
    <>
      <header className="text-secondary medium">body</header>
      <p>
        Everyone has the right to rest and leisure, including reasonable
        limitation of working hours and periodic holidays with pay.
      </p>

      <header className="text-secondary medium mt-2">secondary text</header>
      <p
        className="text-secondary"
        style={{ '--secondary-color': body.secondaryColor }}
      >
        No one shall be subjected to arbitrary interference with his privacy,
        family, home or correspondence, nor to attacks upon his honour and
        reputation.
      </p>
    </>
  )
}

function Config() {
  const [{ body }, setStyle] = useStyleConfig()

  function handleChange<T>(field: string, value: T) {
    setStyle((style) => ({ ...style, body: { ...style.body, [field]: value } }))
  }

  console.log('body', body)

  return (
    <Card>
      <header className="medium text-secondary">body</header>

      <Fieldset label="Background">
        <ColorPicker
          onChange={(value) => {
            handleChange('background', value)
          }}
          value={body.background}
        />
      </Fieldset>

      <Fieldset label="Foreground">
        <ColorPicker
          onChange={(value) => {
            handleChange('foreground', value)
          }}
          value={body.foreground}
        />
      </Fieldset>

      <Fieldset label="Secondary color">
        <ColorPicker
          onChange={(value) => {
            handleChange('secondaryColor', value)
          }}
          value={body.secondaryColor}
        />
      </Fieldset>

      <Fieldset label="Font family">
        <TextInput
          onChange={(e) => handleChange('fontFamily', e.target.value)}
          value={body.fontFamily}
        />
      </Fieldset>

      <small className="text-secondary">
        Every element gets this font. You can override fonts for specific
        components
      </small>

      <Fieldset label="Font size">
        <UnitInput
          onChange={(e) => handleChange('fontSize', e.target.value)}
          value={body.fontSize}
        />
      </Fieldset>
    </Card>
  )
}

function BodySection() {
  return (
    <Section
      config={<Config />}
      id="body"
      name={
        <>
          <span className="material-symbols-outlined me-1">segment</span> Body
        </>
      }
    >
      <Preview />
    </Section>
  )
}

export default BodySection
