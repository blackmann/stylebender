import Section from './Section'

function Preview() {
  return (
    <>
      <header className="text-secondary medium">h1</header>

      <h1>The quick brown fox jumps over the lazy dog.</h1>

      <header className="text-secondary medium">h2</header>

      <h2>The quick brown fox jumps over the lazy dog.</h2>

      <header className="text-secondary medium">h3</header>

      <h3>The quick brown fox jumps over the lazy dog.</h3>

      <header className="text-secondary medium">h4</header>

      <h4>The quick brown fox jumps over the lazy dog.</h4>

      <header className="text-secondary medium">h5</header>

      <h5>The quick brown fox jumps over the lazy dog.</h5>

      <header className="text-secondary medium">h6</header>

      <h6>The quick brown fox jumps over the lazy dog.</h6>
    </>
  )
}

function TypographySection() {
  return (
    <Section
      config={null}
      id="typography"
      name={
        <>
          <span className="material-symbols-outlined me-1">text_fields</span>{' '}
          Typography
        </>
      }
    >
      <Preview />
    </Section>
  )
}

export default TypographySection
