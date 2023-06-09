import React from 'react'
import Button from './Button'
import { useAtom } from 'jotai'
import { theme } from '../styles-config'

function ThemeSwitch() {
  const [currentTheme, setTheme] = useAtom(theme)

  function handleThemeSwitch() {
    const currentTheme =
      document.querySelector('html')?.getAttribute('data-theme') ?? 'light'
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'

    setTheme(newTheme)
  }


  React.useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  return (
    <Button className="plain" onClick={handleThemeSwitch}>
      <span className="material-symbols-outlined me-1">dark_mode</span>
      {currentTheme === 'light' ? 'Dark mode' : 'Light mode'}
    </Button>
  )
}

export default ThemeSwitch
