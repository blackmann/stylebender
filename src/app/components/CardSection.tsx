import '../../styles/card.css'
import Card from './Card'
import Section from './Section'
import cs from './Common.module.css'
import Avatar from 'boring-avatars'
import { StyledButton } from './ButtonsSection'
import Fieldset from './Fieldset'
import BorderInput from './BorderInput'
import ColorPicker from './ColorPicker'
import UnitInput from './UnitInput'
import useStyleConfig from '../hooks/use-style-config'

function Config() {
  return (
    <Card>
      <header className={cs.configHeader}>
        <div className="text-secondary medium">card</div>
      </header>

      <Fieldset label="Background">
        <ColorPicker />
      </Fieldset>

      <Fieldset label="Border" inputId="border-input">
        <BorderInput />
      </Fieldset>

      <Fieldset label="Border radius" inputId="border-radius">
        <UnitInput id="border-radius" />
      </Fieldset>

      <Fieldset label="Padding" inputId="padding">
        <UnitInput id="padding" />
      </Fieldset>
    </Card>
  )
}

function Preview() {
  const [,,,_s] = useStyleConfig()

  return (
    <div style={{ '--font-family': _s('body.fontFamily') }} className="card">
      <div className="card-header">
        <div className="avatar me-1">
          <Avatar
            size={40}
            colors={[_s('colors.primary'), _s('colors.secondary'), _s('colors.tertiary')]}
            variant="beam"
            name="N"
          />
        </div>
        <div>
          <div className="medium">@stimulus</div>
          <div style={{ color: _s('body.secondaryColor') }}>Posted 23rd May</div>
        </div>
      </div>

      <div className="mt-1">
        Everyone has the right to rest and leisure, including reasonable
        limitation of working hours and periodic holidays with pay.
      </div>

      <div className="mt-1">
        No one shall be subjected to arbitrary interference with his privacy…
      </div>

      <div className="mt-2">
        <StyledButton>Continue</StyledButton>
        <StyledButton variant="plain">Share…</StyledButton>
      </div>
    </div>
  )
}

function CardSection() {
  return (
    <Section
      config={<Config />}
      id="card"
      name={
        <>
          <span className="material-symbols-outlined me-1">
            indeterminate_check_box
          </span>
          Card
        </>
      }
    >
      <Preview />
    </Section>
  )
}

export default CardSection
