import React from 'preact/compat'
import { signal } from '@preact/signals'

type Theme = 'light' | 'dark'

const theme = signal<Theme>('light')

function useTheme() {

  React.useEffect(() => {
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
