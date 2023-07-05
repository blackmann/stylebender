import fontIndex from './gfonts'
import { getStyle } from './config'

const MACRO = `:root {
  color-scheme: light dark;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

* { box-sizing: border-box; }

body { margin: 0; }
`

function getCss(preview = true) {
  const styles = [utils(), body(), typography(), buttons(), input(), link()]

  const generated = styles
    .flat()
    .map((style) => (preview ? style.preview() : style.export()))
    .filter(Boolean) // removes empty styles
    .join('\n\n')

  const fontImports = getFontImports(generated)

  return [preview ? '' : MACRO, fontImports, generated].join(
    '\n\n'
  )
}

function getFontImports(css: string) {
  const fontNameMatches = css.matchAll(/font-family: (.+);/g)
  const fontSet = new Set<string>()
  Array.from(fontNameMatches).forEach((match) => {
    match[1].split(',').forEach((name) => fontSet.add(name.trim()))
  })

  return Array.from(fontSet)
    .filter((font) => fontIndex[font])
    .map((name) => {
      const clean = name.replace(/ /, '+')
      return `@import url('https://fonts.googleapis.com/css2?family=${clean}:wght@400;500;700&display=swap');`
    })
    .join('\n')
}

type Mode = 'light' | 'dark'

class Style {
  private properties = ''
  selector: string
  private mode: Mode

  constructor(selector: string, mode: Mode = 'light') {
    this.selector = selector
    this.mode = mode
  }

  add(key: string, value: string | undefined) {
    if (!value) {
      return
    }

    this.properties += `  ${key}: ${value};\n`
  }

  get css() {
    if (!this.properties) {
      return ''
    }

    return `${this.selector} {\n${this.properties}}`
  }

  preview() {
    if (!this.properties) return ''

    return this.mode === 'light'
      ? `.root ${this.css}`
      : `[data-theme=dark] .root \n${this.css}\n`
  }

  export() {
    if (!this.properties) return ''

    const rootFillIn = this.selector ? '' : ':root'

    return this.mode === 'light'
      ? rootFillIn + this.css
      : `@media (prefers-color-scheme: dark) { \n${indent(
          rootFillIn + this.css
        )} \n}`
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
  const base = new Style('')

  base.add('color', l('body.color'))
  base.add('font-family', l('body.fontFamily'))
  base.add('font-size', l('body.fontSize'))
  base.add('background-color', l('body.background'))

  const dark = new Style('', 'dark')
  dark.add('background-color', d('body.background'))
  dark.add('color', d('body.color'))

  return [base, dark]
}

const colors = ['primary', 'accent', 'secondary']

function utils() {
  const baseVariables = new Style('')
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

  const darkVariables = new Style('', 'dark')
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

  return [baseVariables, darkVariables, textSecondary]
}

function typography() {
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(createTypographyStyle).flat()
}

function buttons() {
  const spaced = new Style(':is(button, .button) + :is(button, .button)')
  spaced.add('margin-left', '0.75em')

  return [
    ...createButtonStyle('primary'),
    ...createButtonStyle('accent'),
    createPlainButtonStyle(),
    spaced,
  ].flat()
}

function createPlainButtonStyle() {
  const base = new Style(':is(.button, button)')

  base.add('background', 'var(--secondary-100)')
  base.add('color', l('buttons.base.color') || l('body.color'))
  base.add('border-style', 'solid')
  base.add('border-width', '0')
  base.add('font-family', l('buttons.base.fontFamily') || l('body.fontFamily'))
  base.add('font-size', l('buttons.base.fontSize') || l('body.fontSize'))
  base.add('font-weight', l('buttons.base.fontWeight'))
  base.add('cursor', 'pointer')
  base.add('padding', l('buttons.base.padding'))
  base.add('border-radius', l('buttons.base.borderRadius'))
  base.add('transition', 'filter 240ms ease-out')

  const dark = new Style(':is(.button, button)', 'dark')
  dark.add('color', d('buttons.plain.color') || d('body.color'))
  dark.add('background', 'var(--secondary-700)')

  const hover = new Style(':is(.button, button):hover')
  hover.add('filter', 'brightness(92%)')

  return [dark, base, hover]
}

function createButtonStyle(name: string) {
  const selector = `button.${name}, .button.${name}`

  const base = new Style(selector)

  base.add('background-color', l(`colors.${name}`))
  base.add('color', l(`buttons.${name}.color`))

  const dark = new Style(selector, 'dark')
  dark.add('background-color', getStyle(`colors.${name}`, 'dark'))
  dark.add('color', d(`buttons.${name}.color`))

  return [dark, base]
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
  const dark = new Style(selector, 'dark')
  dark.add('font-family', darkConfig.fontFamily)
  dark.add('font-size', darkConfig.fontSize)
  dark.add('font-weight', darkConfig.fontWeight)
  dark.add('color', darkConfig.color)

  return [base, dark]
}

function input() {
  const base = new Style(':is(input, .input, select)')

  base.add('-webkit-appearance', 'none')
  base.add('border', l('input.border'))
  base.add('color', l('input.color') || 'inherit')
  base.add('background', l('input.background') || 'transparent')
  base.add('font-family', l('input.fontFamily') || l('body.fontFamily'))
  base.add('padding', l('input.padding'))
  base.add('font-size', l('input.fontSize'))
  base.add(
    'border-radius',
    l('input.borderRadius') || l('buttons.base.borderRadius')
  )
  base.add('font-weight', l('input.fontWeight'))

  const dark = new Style(':is(input, .input, select)', 'dark')
  dark.add('border', d('input.border'))
  dark.add('color', d('input.color') || 'inherit')
  dark.add('background', d('input.background') || 'transparent')

  const invertCalendarIcon = new Style(
    '::-webkit-calendar-picker-indicator',
    'dark'
  )
  invertCalendarIcon.add('filter', 'invert(1)')

  return [base, dark, invertCalendarIcon]
}

function link() {
  const base = new Style('a')
  base.add('color', l('link.defaultColor'));
  base.add('cursor', 'pointer');
  base.add('text-decoration', 'underline');
  base.add('font-weight', l('link.fontWeight'));

  const dark = new Style('a', 'dark')
  dark.add('color', d('link.defaultColor'))

  return [base, dark];
}

function indent(str: string, level = 1) {
  const replacement = '  '.repeat(level)
  return str.replace(/^(.)/gm, `${replacement}$1`)
}

export default getCss
