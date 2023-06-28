import { getStyle as s } from './config'

function getCss() {
  return [
    body()
  ].join('\n')
}

function body() {
  const base = `.root {
  font-family: ${s('body.fontFamily')};
  background-color: ${s('body.background')};
  font-size: ${s('body.fontSize')};
  color: ${s('body.color')};
}

`

  let dark = `[data-theme=dark] .root {
background-color: ${s('body.background', 'dark')};
color: ${s('body.color', 'dark')};
    `

  dark += '\n}'

  return base + dark
}

export default getCss
