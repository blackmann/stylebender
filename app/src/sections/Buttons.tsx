import Section from '../components/Section'

function Buttons() {
  return (
    <Section
      config={null}
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

function Preview() {
  return (
    <>
      <div>
        <button>Base/Default</button>
        <button className="primary">Primary</button>
        <button className="accent">Accent</button>
      </div>
    </>
  )
}

export default Buttons
