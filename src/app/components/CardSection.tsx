import Section from './Section'

function Config() {
  return null
}

function Preview() {
  return null
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
