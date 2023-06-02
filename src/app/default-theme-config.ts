import { atom } from 'jotai'

const lightTheme = atom({
  colors: {
    primary: '#ff89aa',
    secondary: '#ababab',
    tertiary: 'green',
    primaryShades: [],
    secondaryShades: [],
    tertiaryShades: []
  },
})

const darkTheme = atom({})

export { lightTheme, darkTheme }
