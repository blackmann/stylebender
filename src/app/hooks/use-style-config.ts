import { useAtom, useAtomValue } from 'jotai'
import { dark, light } from '../styles-config'
import theme from '../theme'
import React from 'react'

/**
 * This can be in the format `buttons.primary.normal`. That is, you
 * can query the config with the path to the value you're looking for.
 * This will step through the config and return the value
 *
 * @example
 * const primaryBtnHoverBackground = getStyle('buttons.primary.hover.background')
 */
type ThemeKey = string

function useStyleConfig() {
  // The light theme always contains the base values
  const base = useAtomValue(light)

  const [currentTheme] = useAtom(theme)
  const [config, setConfig] = useAtom(currentTheme === 'light' ? light : dark)

  const getStyle = React.useCallback((key: ThemeKey) => {
    return getValue(config, key) || getValue(base, key)
  }, [config, base])

  return [config, setConfig, base, getStyle] as const
}

function getValue(obj: Record<string, any>, key: string): any {
  const path = key.split('.')
  let value = obj

  let i = 0
  while (i < path.length) {
    value = value[path[i]]

    if (value === undefined) {
      return
    }

    i++
  }

  return value
}

export default useStyleConfig
