import styles from './GlobalGroup.module.css'
import ColorSection from './ColorSection'
import BodySection from './BodySection'
import TypographySection from './TypographySection'

function GlobalGroup() {
  return (
    <section id="globals">
      <header className={styles.title}>Globals</header>

      <ColorSection />
      <BodySection />
      <TypographySection />
    </section>
  )
}

export default GlobalGroup
