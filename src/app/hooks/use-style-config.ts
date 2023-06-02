import { useAtom, useAtomValue } from 'jotai'
import { lightTheme } from '../default-theme-config'

function useStyleConfig() {
  const base = useAtomValue(lightTheme)
  return [...useAtom(lightTheme), base] as const
}

export default useStyleConfig
