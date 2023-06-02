import ButtonsSection from './ButtonsSection'
import styles from './GlobalGroup.module.css'

function ComponentsGroup() {
  return (
    <section id="components">
      <header className={styles.title}>Components</header>

      <ButtonsSection />
    </section>
  )
}

export default ComponentsGroup
