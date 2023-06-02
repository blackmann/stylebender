import Section from './Section'
import styles from './GlobalGroup.module.css'
import ColorSection from './ColorSection'

function GlobalGroup() {
  return (
    <section id="globals">
      <header className={styles.title}>Globals</header>

      <ColorSection />
    </section>
  )
}

export default GlobalGroup
