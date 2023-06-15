import '../../styles/list.css'

import Card from './Card'
import Section from './Section'
import cs from './Common.module.css'

function Config() {
  return (
    <Card>
      <header className={cs.configHeader}>
        <div className="text-secondary medium">list</div>
      </header>
    </Card>
  )
}

function Preview() {
  return (
    <>
      <header className="text-secondary medium">content list</header>
      <ul className="list">
        <li>Specifying Locations in 3D</li>
        <li>Left/right Handedness</li>
        <li>Summation and Product Notation</li>
        <li>Interval Notation</li>
        <li>Trigonometric Functions</li>
      </ul>

      <header className="text-secondary medium mt-2">interactive list</header>
      <ul className="list interactive">
        <li className="flex-center-vertical">
          <span className="material-symbols-outlined me-1">menu</span>
          Collections
        </li>
        <li className="flex-center-vertical">
          <span className="material-symbols-outlined me-1">settings</span>
          Settings
        </li>
        <li className="flex-center-vertical">
          <span className="material-symbols-outlined me-1">database</span> Logs
        </li>
        <li className="flex-center-vertical">
          <span className="material-symbols-outlined me-1">description</span>
          Documentation
        </li>
        <li className="flex-center-vertical">
          <span className="material-symbols-outlined me-1">terminal</span>
          Libraries
        </li>
      </ul>
    </>
  )
}

function ListSection() {
  return (
    <Section
      config={<Config />}
      id="list"
      name={
        <>
          <span className="material-symbols-outlined me-1">ballot</span>
          List
        </>
      }
    >
      <Preview />
    </Section>
  )
}

export default ListSection
