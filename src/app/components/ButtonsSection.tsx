import Section from './Section'

function Config() {
  return null
}

function Preview() {
  return <div></div>
}

function ButtonsSection() {
  return (
    <Section
      config={<Config />}
      id="button"
      name={
        <>
          <span className="material-symbols-outlined me-1">gamepad</span> Buttons
        </>
      }
    >
      <Preview />
    </Section>
  )
}

export default ButtonsSection
