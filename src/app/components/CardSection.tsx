import Card from './Card'
import Section from './Section'
import cs from './Common.module.css'
import '../../styles/card.css'
import Avatar from 'boring-avatars'
import useStyleConfig from '../hooks/use-style-config'

function Config() {
  return (
    <Card>
      <header className={cs.configHeader}>
        <div className="text-secondary medium">card</div>
      </header>
    </Card>
  )
}

function Preview() {
  const [{ body, colors }] = useStyleConfig()

  return (
    <div style={{ '--font-family': body.fontFamily }} className="card">
      <div className="card-header">
        <div className="avatar me-1">
          <Avatar
            size={40}
            colors={[colors.primary, colors.secondary, colors.tertiary]}
            variant="beam"
            name="N"
          />
        </div>
        <div>
          <div>@stimulus</div>
          <div style={{ color: body.secondaryColor }}>Posted 23rd May</div>
        </div>
      </div>

      <div className="mt-1">
        Everyone has the right to rest and leisure, including reasonable
        limitation of working hours and periodic holidays with pay.
      </div>

      <div className="mt-1">
        No one shall be subjected to arbitrary interference with his privacy…
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
