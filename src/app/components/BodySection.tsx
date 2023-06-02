import Section from './Section'

function Preview() {
  return (
    <>
      <header className="text-secondary medium">body</header>
      <p>
        Everyone has the right to rest and leisure, including reasonable
        limitation of working hours and periodic holidays with pay.
      </p>
    </>
  )
}

function BodySection() {
  return (
    <Section
      config={<></>}
      id="body"
      name={
        <>
          <span className="material-symbols-outlined me-1">segment</span> Body
        </>
      }
    >
      <Preview />
    </Section>
  )
}

export default BodySection
