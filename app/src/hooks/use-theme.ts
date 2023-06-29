import React from 'preact/compat'
import { signal } from '@preact/signals'

type Theme = 'light' | 'dark'

const theme = signal<Theme>('light')

function useTheme() {

  React.useEffect(() => {
    // TODO: This is causing issues around base config generation
    // That is, some values are created/prefilled in light mode
    // But when the app reloads but from dark mode, the values are not
    // prefilled (eg. color shades)
    // A possible solution is to hardcode the generated values in the config file
    // Explore!
    const savedTheme = localStorage.getItem('theme') as Theme | undefined
    theme.value = savedTheme || 'light'

    theme.subscribe((value) => {
      document.querySelector('html')?.setAttribute('data-theme', value)

      localStorage.setItem('theme', value)
    })
  }, [])

  const switchTheme = React.useCallback(() => {
    const currentTheme =
      document.querySelector('html')?.getAttribute('data-theme') ?? 'light'
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'

    theme.value = newTheme
  }, [])

  return { theme, switchTheme }
}

export default useTheme
export { theme }
export type { Theme }
