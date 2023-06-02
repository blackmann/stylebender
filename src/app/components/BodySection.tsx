import Card from './Card'
import ColorPicker from './ColorPicker'
import Fieldset from './Fieldset'
import Section from './Section'
import TextInput from './TextInput'
import UnitInput from './UnitInput'

function Preview() {
  return (
    <>
      <header className="text-secondary medium">body</header>
      <p>
        Everyone has the right to rest and leisure, including reasonable
        limitation of working hours and periodic holidays with pay.
      </p>

      <header className="text-secondary medium mt-2">secondary text</header>
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
        <ColorPicker onChange={() => {}} value="#f6f8fa" />
      </Fieldset>

      <Fieldset label="Foreground">
        <ColorPicker onChange={() => {}} value="#181818" />
      </Fieldset>

      <Fieldset label="Font family">
        <TextInput />
      </Fieldset>

      <small className="text-secondary">
        Every element gets this font. You can override fonts for specific
        components
      </small>

      <Fieldset label="Font size">
        <UnitInput />
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
