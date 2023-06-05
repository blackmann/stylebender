import { atom } from 'jotai'

const light = atom({
  colors: {
    primary: '#ff89aa',
    secondary: '#ababab',
    tertiary: 'green',
    primaryShades: [],
    secondaryShades: [],
    tertiaryShades: []
  },
  body: {
    background: '#f6f8fa',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '14px',
    foreground: '#38393c',
    secondaryColor: '#2e4965b3'
  }
})

const dark = atom({})

export { light, dark }
