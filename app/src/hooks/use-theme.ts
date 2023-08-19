import { dark, light } from '../config'
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
    // or force switch to light mode
    // Explore!
    const savedTheme = localStorage.getItem('theme') as Theme | undefined
    theme.value = savedTheme || 'light'

    const savedLight = localStorage.getItem('savedLight')
    const savedDark = localStorage.getItem('savedDark')
    
    window.addEventListener('load', () => {
      if(!savedLight) return
      if(!savedDark) return

      const parsedLight = JSON.parse(savedLight)
      const parsedDark = JSON.parse(savedDark)

      light.value = parsedLight
      dark.value = parsedDark
    })

    console.log(light.value)

    theme.subscribe((value) => {
      document.querySelector('html')?.setAttribute('data-theme', value)

      localStorage.setItem('theme', value)
    })

    light.subscribe((value) => {
      localStorage.setItem('savedLight', JSON.stringify(value))
    })
    
    dark.subscribe((value) => {
      localStorage.setItem('savedDark', JSON.stringify(value))
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
