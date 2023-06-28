import { getStyle, setStyle } from '../config'
import Card from '../components/Card'
import ColorPicker from '../components/ColorPicker'
import Fieldset from '../components/Fieldset'
import Section from '../components/Section'
import TextInput from '../components/TextInput'
import UnitInput from '../components/UnitInput'

function Body() {
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

function Preview() {
  return (
    <>
      <header class="fw-bold">body</header>

      <p>
        Everyone has the right to rest and leisure, including reasonable
        limitation of working hours and periodic holidays with pay.
      </p>

      <header class="fw-bold">secondary text</header>

      <p>
        No one shall be subjected to arbitrary interference with his privacy,
        family, home or correspondence, nor to attacks upon his honour and
        reputation.
      </p>
    </>
  )
}

function Config() {
  return (
    <Card>
      <header className="medium text-secondary">body</header>

      <Fieldset label="Background">
        <ColorPicker
          onChange={(value) => {
            setStyle('body.background', value)
          }}
          value={getStyle('body.background')}
        />
      </Fieldset>

      <Fieldset label="Foreground">
        <ColorPicker
          onChange={(value) => {
            setStyle('body.color', value)
          }}
          value={getStyle('body.color')}
        />
      </Fieldset>

      <Fieldset label="Font family">
        <TextInput
          onChange={(e) =>
            setStyle('body.fontFamily', (e.target as HTMLInputElement).value)
          }
          value={getStyle('body.fontFamily')}
        />
      </Fieldset>

      <small className="text-secondary">
        Every element gets this font. You can override fonts for specific
        components
      </small>

      <Fieldset label="Font size">
        <UnitInput
          onChange={(e) =>
            setStyle('body.fontSize', (e.target as HTMLInputElement).value)
          }
          value={getStyle('body.fontSize')}
        />
      </Fieldset>
    </Card>
  )
}

export default Body
