import Card from './Card'
import ColorPicker from './ColorPicker'
import Fieldset from './Fieldset'
import Section from './Section'
import TextInput from './TextInput'
import UnitInput from './UnitInput'

function Preview() {
  return (
    <>
      <header className="text-secondary medium">h1</header>

      <h1>The quick brown fox jumps over the lazy dog.</h1>

      <header className="text-secondary medium">h2</header>

      <h2>The quick brown fox jumps over the lazy dog.</h2>

      <header className="text-secondary medium">h3</header>

      <h3>The quick brown fox jumps over the lazy dog.</h3>

      <header className="text-secondary medium">h4</header>

      <h4>The quick brown fox jumps over the lazy dog.</h4>

      <header className="text-secondary medium">h5</header>

      <h5>The quick brown fox jumps over the lazy dog.</h5>

      <header className="text-secondary medium">h6</header>

      <h6>The quick brown fox jumps over the lazy dog.</h6>
    </>
  )
}

function Config() {
  return (
    <Card>
      <header className="medium text-secondary">typography</header>

      <Fieldset label="Font family">
        <TextInput value="DM Sans, sans-serif" />
      </Fieldset>

      <Fieldset label="Font weight">
        <TextInput />
      </Fieldset>

      <Fieldset label="Font size">
        <UnitInput />
      </Fieldset>

      <Fieldset label="Color">
        <ColorPicker onChange={() => {}} value="#484848" />
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
