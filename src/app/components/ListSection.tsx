import Section from './Section'

function Config() {
  return null
}

function Preview() {
  return null
}

function ListSection() {
  return (
    <Section
      config={<Config />}
      id="list"
      name={
        <>
          <span className="material-symbols-outlined me-1">
            ballot
          </span>
          List
        </>
      }
    >
      <Preview />
    </Section>
  )
}

export default ListSection
