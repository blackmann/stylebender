import ButtonsSection from './ButtonsSection'
import CardSection from './CardSection'
import styles from './GlobalGroup.module.css'
import ListSection from './ListSection'

function ComponentsGroup() {
  return (
    <section id="components">
      <header className={styles.title}>Components</header>

      <ButtonsSection />
      <CardSection />
      <ListSection />
    </section>
  )
}

export default ComponentsGroup
