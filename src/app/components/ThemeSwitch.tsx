import React from 'react'
import Button from './Button'

function ThemeSwitch() {
  const [theme, setTheme] = React.useState('light')

  function handleThemeSwitch() {
    const currentTheme =
      document.querySelector('html')?.getAttribute('data-theme') ?? 'light'
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'

    setTheme(newTheme)
  }

  React.useEffect(() => {
    const theme = localStorage.getItem('theme') ?? 'light'
    setTheme(theme)
  }, [])

  React.useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Button className="plain" onClick={handleThemeSwitch}>
      <span className="material-symbols-outlined me-1">dark_mode</span>
      Dark mode
    </Button>
  )
}

export default ThemeSwitch
