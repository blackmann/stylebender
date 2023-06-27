import { signal } from '@preact/signals'

type Theme = 'light' | 'dark'

const light = signal({
  body: {
    fontFamily: 'Iosevka, monospace',
    fontSize: '14px',
    background: 'canvas',
    color: '#222'
  },
})

const dark = signal({
  body: {},
})

function getStyle<T = string>(
  key: string,
  theme: Theme = 'light'
): T | undefined {
  if (theme === 'light') {
    return getValue(light.value, key)
  }

  // fallback to light when dark has no value
  return getValue(dark.value, key) || getStyle(key, 'light')
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

function setStyle(key: string, value: string, theme: Theme = 'light') {
  const target = theme === 'light' ? light : dark
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

  target.value = {...valueRef} as any
}

export { getStyle, light, setStyle }
