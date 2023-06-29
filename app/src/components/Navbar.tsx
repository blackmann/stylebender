import Button from './Button'
import Logo from './Logo'
import ThemeSwitch from './ThemeSwitch'
import getCss from '../css'
import styles from './Navbar.module.css'

function Navbar() {
  function download() {
    const css = getCss(false)
    const blob = new Blob([css], { type: 'text/css' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.download = 'style.css'
    a.href = url
    a.style.display = 'none'

    document.body.appendChild(a)

    a.click()
    URL.revokeObjectURL(url)

    document.body.removeChild(a)
  }

  return (
    <header className={styles.header}>
      <div>
        <Logo />
      </div>

      <div>
        <ThemeSwitch />
        <Button className="plain" onClick={download}>
          <span className="material-symbols-outlined me-1">download</span>{' '}
          Download stylesheet
        </Button>
      </div>
    </header>
  )
}

export default Navbar
