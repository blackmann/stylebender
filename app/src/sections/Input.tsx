import Card from '../components/Card'
import ColorPicker from '../components/ColorPicker'
import ComponentHeader from '../components/ComponentHeader'
import Fieldset from '../components/Fieldset'
import Section from '../components/Section'
import TextInput from '../components/TextInput'
import UnitInput from '../components/UnitInput'
import clsx from 'clsx'
import cs from './Common.module.css'

function Input() {
  return (
    <Section
      config={<Config />}
      id="input"
      name={
        <>
          <span className="material-symbols-outlined me-1">keyboard</span>
          Input
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
      <header class={clsx('medium app-text-secondary', cs.configHeader)}>
        <div>input</div>
      </header>

      <Fieldset label="Font Family" inputId="input-font-family">
        <TextInput id="input-font-family" />
      </Fieldset>

      <Fieldset label="Font Size" inputId="input-font-size">
        <UnitInput id="input-font-size" />
      </Fieldset>

      <Fieldset label="Font Weight" inputId="input-font-weight">
        <UnitInput id="input-font-weight" />
      </Fieldset>

      <Fieldset label="Padding" inputId="input-padding">
        <TextInput id="input-padding" />
      </Fieldset>

      <Fieldset label="Border Radius" inputId="input-border-radius">
        <UnitInput id="input-border-radius" />
      </Fieldset>

      <Fieldset label="Color">
        <ColorPicker />
      </Fieldset>

      <Fieldset label="Background">
        <ColorPicker />
      </Fieldset>

      <Fieldset label="Border Color">
        <ColorPicker />
      </Fieldset>
    </Card>
  )
}

function Preview() {
  return (
    <>
      <ComponentHeader>Text input</ComponentHeader>
      <input
        className="me-1"
        type="text"
        name="input"
        placeholder="Enter some text"
      />
      <input type="date" name="input" placeholder="Select DOB" />

      <ComponentHeader className="mt-2">Text area</ComponentHeader>
      <textarea class="input" />

      <ComponentHeader className="mt-2">Select</ComponentHeader>
      <select value="-">
        <option value="-" disabled>
          Choose your favorite styling workflow
        </option>
        <option value="Tailwind">Tailwind</option>
        <option value="CSSLibs">CSS Libraries (Bootstrap, bulma, etc.)</option>
        <option value="Stylebender">Stylebender</option>
      </select>
    </>
  )
}

export default Input
