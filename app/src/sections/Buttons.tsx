import clsx from 'clsx'
import Card from '../components/Card'
import Fieldset from '../components/Fieldset'
import Section from '../components/Section'
import TextInput from '../components/TextInput'
import UnitInput from '../components/UnitInput'
import { getStyle as s, setStyle } from '../config'
import styles from './Buttons.module.css'
import cs from './Common.module.css'

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
      <header className={clsx(cs.configHeader, 'app-text-secondary medium')}>
        buttons
      </header>

      <Fieldset label="Font family" inputId="buttons-font-family">
        <TextInput
          id="buttons-font-family"
          onChange={(e) =>
            setStyle(
              'buttons.base.fontFamily',
              (e.target as HTMLInputElement).value
            )
          }
          value={s('buttons.base.fontFamily') || s('body.fontFamily')}
        />
      </Fieldset>

      <Fieldset label="Font size" inputId="buttons-font-size">
        <UnitInput
          id="buttons-font-size"
          onChange={(e) =>
            setStyle(
              'buttons.base.fontSize',
              (e.target as HTMLInputElement).value
            )
          }
          value={s('buttons.base.fontSize') || s('body.fontSize')}
        />
      </Fieldset>

      <Fieldset label="Font weight" inputId="buttons-font-weight">
        <UnitInput
          id="buttons-font-weight"
          onChange={(e) =>
            setStyle(
              'buttons.base.fontWeight',
              (e.target as HTMLInputElement).value
            )
          }
          value={s('buttons.base.fontWeight')}
        />
      </Fieldset>

      <Fieldset label="Padding" inputId="buttons-padding">
        <TextInput
          id="buttons-padding"
          onChange={(e) =>
            setStyle(
              'buttons.base.padding',
              (e.target as HTMLInputElement).value
            )
          }
          value={s('buttons.base.padding')}
        />
      </Fieldset>

      <Fieldset label="Border radius" inputId="buttons-border-radius">
        <UnitInput
          id="buttons-border-radius"
          onChange={(e) =>
            setStyle(
              'buttons.base.borderRadius',
              (e.target as HTMLInputElement).value
            )
          }
          value={s('buttons.base.borderRadius')}
        />
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
        <button disabled>Disabled Base/Default</button>

        <button className="primary" disabled>
          Disabled primary
        </button>
        <button className="accent" disabled>
          Accent
        </button>
      </div>
    </div>
  )
}

export default Buttons
