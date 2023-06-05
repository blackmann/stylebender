import { atom } from 'jotai'

const light = atom({
  colors: {
    primary: '#3B8BFF',
    secondary: '#FFC632',
    tertiary: '#34E74C',
    primaryShades: [],
    secondaryShades: [],
    tertiaryShades: [],
  },
  body: {
    background: '#f6f8fa',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    foreground: '#38393c',
    secondaryColor: '#2e4965b3',
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

const dark = atom({})

export { light, dark }
