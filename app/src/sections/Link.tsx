import { getStyle, setStyle } from '../config'
import Card from '../components/Card'
import ColorPicker from '../components/ColorPicker'
import ComponentHeader from '../components/ComponentHeader'
import Fieldset from '../components/Fieldset'
import Section from '../components/Section'
import Select from '../components/Select'
import UnitInput from '../components/UnitInput'

function Body() {
  return (
    <Section
      config={<Config />}
      id="link"
      name={
        <>
          <span className="material-symbols-outlined me-1">link</span> Link
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
      <ComponentHeader>link</ComponentHeader>
      <a>Click me to go to your destination</a>
    </>
  )
}

function Config() {
  return (
    <Card>
      <header className="medium app-text-secondary">link</header>

      <Fieldset label="Text Decoration">
        <Select
            id="text-decoration"
            onChange={(e) => {
                setStyle('link.textDecoration', (e.target as HTMLInputElement).value)
            }}
            value={getStyle('link.textDecoration')}
            >
            <option value="none">None</option>
            <option value="underline">Underline</option>
            </Select>
      </Fieldset>
      
      <Fieldset label="link color">
        <ColorPicker
          onChange={(value) => {
            setStyle('link.defaultColor', value)
          }}
          value={getStyle('link.defaultColor') || getStyle('body.color')}
        />
      </Fieldset>

      <Fieldset label="Font weight" inputId="link-font-weight">
        <UnitInput
          id="link-font-weight"
          onChange={(e) =>
            setStyle(
              'link.fontWeight',
              (e.target as HTMLInputElement).value
            )
          }
          value={getStyle('link.fontWeight')}
        />
      </Fieldset>
    </Card>
  )
}

export default Body
