import Section from '../components/Section'

function Body() {
  return (
    <Section config={<Config />} id="body" name={<>Body</>}>
      <Preview />
    </Section>
  )
}

function Preview() {
  return (
    <>
      <header>body</header>

      <p>
        Everyone has the right to rest and leisure, including reasonable
        limitation of working hours and periodic holidays with pay.
      </p>

      <header>secondary text</header>

      <p>
        No one shall be subjected to arbitrary interference with his privacy,
        family, home or correspondence, nor to attacks upon his honour and
        reputation.
      </p>
    </>
  )
}

function Config() {
  return null
}

export default Body
