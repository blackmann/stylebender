import Card from '../components/Card'
import Fieldset from '../components/Fieldset'
import Section from '../components/Section'
import TextInput from '../components/TextInput'
import UnitInput from '../components/UnitInput'
import cs from './Common.module.css'
import styles from './Buttons.module.css'

function Buttons() {
  return (
    <Section
      config={<Config />}
      id="button"
      name={
        <>
          <span className="material-symbols-outlined me-1">gamepad</span>{' '}
          Buttons
        </>
      }
    >
      <Preview />
    </Section>
  )
}

function Config() {
  return (
    <Card>
      <header className={cs.configHeader}>buttons</header>

      <Fieldset label="Font family" inputId="buttons-font-family">
        <UnitInput id="buttons-font-family" />
      </Fieldset>

      <Fieldset label="Font size" inputId="buttons-font-size">
        <UnitInput id="buttons-font-size" />
      </Fieldset>

      <Fieldset label="Padding" inputId="buttons-padding">
        <TextInput id="buttons-padding" />
      </Fieldset>

      <Fieldset label="Border radius" inputId="buttons-border-radius">
        <UnitInput id="buttons-border-radius" />
      </Fieldset>
    </Card>
  )
}

function Preview() {
  return (
    <div class={styles.preview}>
      <div>
        <button>Base/Default</button>
        <button className="primary">Primary</button>
        <button className="accent">Accent</button>
      </div>
    </div>
  )
}

export default Buttons
