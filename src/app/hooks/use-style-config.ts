import { useAtom, useAtomValue } from 'jotai'
import { light } from '../styles-config'

function useStyleConfig() {
  const base = useAtomValue(light)
  return [...useAtom(light), base] as const
}

export default useStyleConfig
