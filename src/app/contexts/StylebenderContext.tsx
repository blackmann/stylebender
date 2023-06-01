import React from 'react'

const StylebenderContext = React.createContext(null)

interface StylebenderProviderProps extends React.PropsWithChildren {}

function useStyleBender() {
  return null
}

function StylebenderProvider({ children }: StylebenderProviderProps) {
  return (
    <StylebenderContext.Provider value={null}>
      {children}
    </StylebenderContext.Provider>
  )
}

export { StylebenderContext, StylebenderProvider, useStyleBender }
