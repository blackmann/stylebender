import { useAtom, useAtomValue } from 'jotai'
import { dark, light } from '../styles-config'
import theme from '../theme'

function useStyleConfig() {
  const base = useAtomValue(light)
  const [currentTheme] = useAtom(theme)
  return [...useAtom(currentTheme === 'light' ? light : dark), base] as const
}

export default useStyleConfig
