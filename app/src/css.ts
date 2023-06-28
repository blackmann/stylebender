import { getStyle } from './config'

function getCss() {
  return [body(), typography()].join('\n')
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
  return getStyle<T>(key, 'dark')
}

function body() {
  const base = new Style('.root')

  base.add('color', l('body.color'))
  base.add('font-family', l('body.fontFamily'))
  base.add('font-size', l('body.fontSize'))
  base.add('background-color', l('body.background'))

  const dark = new Style('[data-theme=dark] .root')
  dark.add('background-color', d('body.background'))
  dark.add('color', d('body.color'))

  return [base.css, dark.css].join('\n')
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
  base.add('color', config.color)

  return [base.css, dark.css].join('\n')
}

function typography() {
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    .map(createTypographyStyle)
    .join('\n')
}

export default getCss
