import styles from './GlobalGroup.module.css'
import ColorSection from './ColorSection'
import BodySection from './BodySection'
import TypographySection from './TypographySection'

function GlobalGroup() {
  return (
    <div id="globals">
      <header className={styles.title}>Globals</header>

      <ColorSection />
      <BodySection />
      <TypographySection />
    </div>
  )
}

export default GlobalGroup
