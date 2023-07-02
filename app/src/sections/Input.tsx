import { getStyle, setStyle } from '../config'
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
        <TextInput
          id="input-font-family"
          onChange={(e) =>
            setStyle(
              'input.fontFamily',
              (e.target as HTMLInputElement).value,
              true
            )
          }
          value={getStyle('input.fontFamily')}
        />
      </Fieldset>

      <Fieldset label="Font Size" inputId="input-font-size">
        <UnitInput
          id="input-font-size"
          onChange={(e) =>
            setStyle(
              'input.fontSize',
              (e.target as HTMLInputElement).value,
              true
            )
          }
          value={getStyle('input.fontSize')}
        />
      </Fieldset>

      <Fieldset label="Font Weight" inputId="input-font-weight">
        <UnitInput
          id="input-font-weight"
          onChange={(e) =>
            setStyle(
              'input.fontWeight',
              (e.target as HTMLInputElement).value,
              true
            )
          }
          value={getStyle('input.fontWeight')}
        />
      </Fieldset>

      <Fieldset label="Padding" inputId="input-padding">
        <TextInput
          id="input-padding"
          onChange={(e) =>
            setStyle(
              'input.padding',
              (e.target as HTMLInputElement).value,
              true
            )
          }
          value={getStyle('input.padding')}
        />
      </Fieldset>

      <Fieldset label="Border Radius" inputId="input-border-radius">
        <UnitInput
          id="input-border-radius"
          onChange={(e) =>
            setStyle(
              'input.border-radius',
              (e.target as HTMLInputElement).value,
              true
            )
          }
          value={getStyle('input.border-radius')}
        />
      </Fieldset>

      <Fieldset label="Color">
        <ColorPicker
          onChange={(value) => {
            setStyle('input.color', value)
          }}
          value={getStyle('input.color')}
        />
      </Fieldset>

      <Fieldset label="Background">
        <ColorPicker
          onChange={(value) => {
            setStyle('input.background', value)
          }}
          value={getStyle('input.background')}
        />
      </Fieldset>

      <Fieldset label="Border Color">
        <ColorPicker
          onChange={(value) => {
            setStyle('input.border', value)
          }}
          value={getStyle('input.border')}
        />
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
          Choose your favorite art type
        </option>
        <option value="music">Music</option>
        <option value="visual-arts">
          Visual arts (drawing, painting, etc.)
        </option>
        <option value="literature">Literature</option>
      </select>
    </>
  )
}

export default Input
