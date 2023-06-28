import Button from './Button'
import useTheme from '../hooks/useTheme'

function ThemeSwitch() {
  const { theme, switchTheme } = useTheme()

  return (
    <Button className="plain" onClick={switchTheme}>
      <span className="material-symbols-outlined me-1">
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
      </span>
      {theme === 'light' ? 'Dark mode' : 'Light mode'}
    </Button>
  )
}

export default ThemeSwitch
