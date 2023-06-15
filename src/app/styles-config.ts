import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const buttonStates = {
  normal: {},
  active: {},
  disabled: {},
  checked: {},
  hover: {}
}

const light = atom({
  colors: {
    primary: '#3B8BFF',
    secondary: '#68818D',
    tertiary: '#C19049',
    primaryShades: [],
    secondaryShades: [],
    tertiaryShades: []
  },
  body: {
    background: '#f6f8fa',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    foreground: '#38393c',
    secondaryColor: '#2e4965b3'
  },
  buttons: {
    primary: { ...structuredClone(buttonStates) },
    secondary: { ...structuredClone(buttonStates) },
    tertiary: { ...structuredClone(buttonStates) },
    plain: { ...structuredClone(buttonStates) }
  },
  typography: {
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
  },
})

const dark = atom({
  body: {
    background: '#1A1A1A',
    foreground: '#F5F4F4',
    secondaryColor: '#A0A1AA',
  },
})

export { light, dark }
