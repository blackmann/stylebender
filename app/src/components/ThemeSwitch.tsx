import useTheme, { theme } from '../hooks/use-theme'
import Button from './Button'

function ThemeSwitch() {
  const { switchTheme } = useTheme()

  return (
    <Button className="plain" onClick={switchTheme}>
      <span className="material-symbols-outlined me-1">
        {theme.value === 'light' ? 'dark_mode' : 'light_mode'}
      </span>
      {theme.value === 'light' ? 'Dark mode' : 'Light mode'}
    </Button>
  )
}

export default ThemeSwitch
