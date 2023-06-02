import Card from './Card'
import Chip from './Chip'
import ColorPicker from './ColorPicker'
import Fieldset from './Fieldset'
import Section from './Section'
import Select from './Select'
import TextInput from './TextInput'
import UnitInput from './UnitInput'
import cs from './Common.module.css'
import styles from './ButtonsSection.module.css'
import BorderInput from './BorderInput'

const options = ['primary', 'secondary', 'tertiary', 'plain']
const states = ['normal', 'hover', 'checked', 'active', 'disabled']

function Config() {
  return (
    <Card>
      <header className={cs.configHeader}>
        <div className="text-secondary medium">buttons</div>

        <Select>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </header>

      <div className={styles.states}>
        {states.map((state) => (
          <Chip>:{state}</Chip>
        ))}
      </div>

      <Fieldset label="Background">
        <ColorPicker value="black" />
      </Fieldset>

      <Fieldset label="Color">
        <ColorPicker />
      </Fieldset>

      <Fieldset label="Font family">
        <TextInput />
      </Fieldset>

      <Fieldset label="Font size">
        <UnitInput />
      </Fieldset>

      <Fieldset label="Font weight">
        <UnitInput />
      </Fieldset>

      <Fieldset label="Border">
        <BorderInput />
      </Fieldset>

      <Fieldset label="Radius">
        <UnitInput />
      </Fieldset>

      <Fieldset label="Padding">
        <UnitInput />
      </Fieldset>
    </Card>
  )
}

function Preview() {
  return (
    <div>
      <button className="button primary">Primary</button>
      <button className="button secondary">Secondary</button>
      <button className="button tertiary">Tertiary</button>
      <button className="button plain">Plain</button>
    </div>
  )
}

function ButtonsSection() {
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

export default ButtonsSection
