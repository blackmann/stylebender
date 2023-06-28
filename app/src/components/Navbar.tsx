import Button from './Button'
import Logo from './Logo'
import ThemeSwitch from './ThemeSwitch'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.header}>
      <div>
        <Logo />
      </div>

      <div>
        <ThemeSwitch />
        <Button className="plain">
          <span className="material-symbols-outlined me-1">download</span>{' '}
          Download stylesheet
        </Button>
      </div>
    </header>
  )
}

export default Navbar
