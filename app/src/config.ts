import { computed, signal } from '@preact/signals'
import Values from 'values.js'
import { theme as appTheme } from './hooks/use-theme'

type Theme = 'light' | 'dark'

const tintAndShade = (color: string) => {
  const values = new Values(color)
  
  const shades = values
  .shades(20)
  .slice(0, 4)
  .map((value) => value.hexString())

  const tints = values
    .tints(20)
    .reverse()
    .slice(1)
    .map((value) => value.hexString())
  
  return tints.concat(shades)
}

const initialLight = {
  body: {
    fontFamily: import.meta.env.DEV
      ? // Sorry, I like to see Iosevka when developing
        'Iosevka, sans-serif'
      : 'Inter, sans-serif',
    fontSize: '14px',
    background: '#f6f8fa',
    color: '#222',
  },
  colors: {
    primary: '#4882F9',
    primaryShades: tintAndShade('#4882F9'),
    accent: '#DE2323',
    accentShades: tintAndShade('#DE2323'),
    secondary: '#838995',
    secondaryShades: tintAndShade('#838995'),
  },
  typography: {
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
  },
  buttons: {
    base: {
      fontSize: '0.9em',
      fontWeight: '500',
      padding: '0.5em 0.75em',
      borderRadius: '0.35rem',
    },
    primary: {
      color: '#fff',
    },
    accent: {
      color: '#fff',
    },
  },
  input: {
    border: '1px solid var(--secondary-200)',
    fontSize: '0.9em',
    padding: '0.5em 0.75em',
  },
  link: {
    fontWeight: '500',
    defaultColor: undefined,
  },
}

const initialDark = {
  body: {
    background: '#212121',
    color: '#F5F4F4',
  },
  input: {
    border: '1px solid var(--secondary-600)',
  },
  link: {
    defaultColor: undefined,
  },
}

const light = signal(structuredClone(initialLight))

const dark = signal(structuredClone(initialDark))

const savedLight = localStorage.getItem('savedLight')
const savedDark = localStorage.getItem('savedDark')

window.addEventListener('load', () => {
  light.subscribe((value) => {
    localStorage.setItem('savedLight', JSON.stringify(value))
  })

  dark.subscribe((value) => {
    localStorage.setItem('savedDark', JSON.stringify(value))
  })

  if (!savedLight) return
  if (!savedDark) return

  const parsedLight = JSON.parse(savedLight)
  const parsedDark = JSON.parse(savedDark)

  light.value = parsedLight
  dark.value = parsedDark
})

function getStyle<T = string>(
  key: string,
  theme?: Theme,
  fallback = true
): T | undefined {
  if (!theme) {
    return getStyle(key, appTheme.value)
  }

  if (theme === 'light') {
    return getValue(light.value, key)
  }
  // fallback to light when dark has no value
  return (
    getValue(dark.value, key) || (fallback ? getStyle(key, 'light') : undefined)
  )
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

function setStyle(key: string, value: string | string[], base?: true) {
  // base means, this value is only set in `light` config
  // useful in cases where values are [supposed to be] the same accross
  // themes
  const target = base || appTheme.value === 'light' ? light : dark
  const path: string[] = key.split('.')
  const assignmentKey = path.pop() as string

  let valueStep = target.value as Record<string, any>
  const valueRef = valueStep

  let i = 0
  while (i < path.length) {
    const key = path[i]

    const tmp = valueStep[key]
    if (tmp === undefined) {
      valueStep[key] = {}
    }

    valueStep = valueStep[key]

    i += 1
  }

  valueStep[assignmentKey] = value
  target.value = { ...valueRef } as any
}

const configHasChanged = computed(() => {
  return (
    JSON.stringify(initialDark) !== JSON.stringify(dark.value) ||
    JSON.stringify(initialLight) !== JSON.stringify(light.value)
  )
})

export { getStyle, light, dark, setStyle, configHasChanged }
