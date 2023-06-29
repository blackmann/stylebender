import { getStyle } from './config'

function getCss() {
  return [utils(), body(), typography(), buttons()].join('\n')
}

class Style {
  private properties = ''
  selector: string

  constructor(selector: string) {
    this.selector = selector
  }

  add(key: string, value: string | undefined) {
    if (!value) {
      return
    }

    this.properties += `${key}: ${value};\n`
  }

  get css() {
    if (!this.properties) {
      return ''
    }

    return `${this.selector} {\n${this.properties}}`
  }

  valueOf() {
    return this.css
  }
}

function l<T>(key: string) {
  return getStyle<T>(key, 'light')
}

function d<T>(key: string) {
  return getStyle<T>(key, 'dark', false)
}

function body() {
  const base = new Style('.root')

  base.add('color', l('body.color'))
  base.add('font-family', l('body.fontFamily'))
  base.add('font-size', l('body.fontSize'))
  base.add('background-color', l('body.background'))

  const dark = new Style('[data-theme="dark"] .root')
  dark.add('background-color', d('body.background'))
  dark.add('color', d('body.color'))

  return [base.css, dark.css].join('\n')
}

const colors = ['primary', 'accent', 'secondary']

function utils() {
  const baseVariables = new Style('.root /* :root */')
  baseVariables.add('--primary-color', l('colors.primary'))
  baseVariables.add('--accent-color', l('colors.accent'))
  baseVariables.add('--secondary-color', l('colors.secondary'))

  for (const color of colors) {
    const shades = (l(`colors.${color}Shades`) || []) as string[]
    let i = 1
    for (const shade of shades) {
      baseVariables.add(`--${color}-${i * 100}`, shade)
      i++
    }
  }

  const darkVariables = new Style('[data-theme=dark] .root /* :root */')
  darkVariables.add('--primary-color', d('colors.primary'))
  darkVariables.add('--accent-color', d('colors.accent'))
  darkVariables.add('--secondary-color', d('colors.secondary'))

  for (const color of colors) {
    const shades = (d(`colors.${color}Shades`) || []) as string[]
    let i = 1
    for (const shade of shades) {
      darkVariables.add(`--${color}-${i * 100}`, shade)
      i++
    }
  }

  const textSecondary = new Style('.text-secondary')
  textSecondary.add('color', 'var(--secondary-color)')

  return [baseVariables.css, darkVariables.css, textSecondary.css].join('\n')
}

function typography() {
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    .map(createTypographyStyle)
    .join('\n')
    .trim()
}

function buttons() {
  const spaced = new Style(':is(button, .button) + :is(button, .button)')
  spaced.add('margin-left', '0.75em')

  return [
    ...createButtonStyle('primary'),
    ...createButtonStyle('accent'),
    createPlainButtonStyle(),
    spaced.css,
  ].join('\n')
}

function createPlainButtonStyle() {
  const base = new Style('.root :is(.button, button)')

  base.add('background', 'var(--secondary-100)')
  base.add('color', l('buttons.base.color') || l('body.color'))
  base.add('border-style', 'solid')
  base.add('border-width', '0')
  base.add('font-family', l('buttons.base.fontFamily') || l('body.fontFamily'))
  base.add('font-weight', l('buttons.base.fontWeight'))
  base.add('cursor', 'pointer')
  base.add('padding', l('buttons.base.padding'))
  base.add('border-radius', l('buttons.base.borderRadius'))
  base.add('transition', 'filter 240ms ease-out')

  const dark = new Style('[data-theme=dark] .root :is(.button, button)')
  dark.add('color', d('buttons.plain.color') || d('body.color'))
  dark.add('background', 'var(--secondary-700)')

  const hover = new Style('.root :is(.button, button):hover')
  hover.add('filter', 'brightness(92%)')

  return [dark.css, base.css, hover.css].join('\n')
}

function createButtonStyle(name: string) {
  const selector = `button.${name}, .button.${name}`

  const base = new Style(`.root :is(${selector})`)

  base.add('background-color', l(`colors.${name}`))
  base.add('color', l(`buttons.${name}.color`))
  base.add('border-width', l(`buttons.${name}.borderWidth`))
  base.add('border-radius', l(`buttons.${name}.borderRadius`))
  base.add('font-weight', l(`buttons.${name}.fontWeight`))

  const dark = new Style(`[data-theme=dark] .root :is(${selector})`)
  dark.add('background-color', getStyle(`colors.${name}`, 'dark'))
  dark.add('color', d(`buttons.${name}.color`))

  return [dark.css, base.css]
}

function createTypographyStyle(level: string) {
  const selector = `${level}, .${level}`
  const base = new Style(selector) // h1, .h1

  const config = l<Record<string, any>>(`typography.${level}`)!
  base.add('font-family', config.fontFamily)
  base.add('font-size', config.fontSize)
  base.add('font-weight', config.fontWeight)
  base.add('color', config.color)

  const darkConfig = d<Record<string, any>>(`typography.${level}`) || {}
  const dark = new Style(`[data-theme=dark] :is(${selector})`)
  dark.add('font-family', darkConfig.fontFamily)
  dark.add('font-size', darkConfig.fontSize)
  dark.add('font-weight', darkConfig.fontWeight)
  dark.add('color', darkConfig.color)

  return [base.css, dark.css].join('\n')
}

export default getCss
