import React from 'preact/compat'
import getCss from '../css'

function useStylesInject() {

  const styleRef = React.useRef<HTMLStyleElement>()
  const css = getCss()

  React.useEffect(() => {
    // Maybe only change the style content instead of destroying
    // and recreating style node

    const style = document.createElement('style')
    style.setAttribute('type', 'text/css')
    document.getElementsByTagName('head')[0].appendChild(style)

    style.appendChild(document.createTextNode(css))

    styleRef.current = style

    return () => {
      const head = document.getElementsByTagName('head')[0]
      head.removeChild(styleRef.current!)
    }
  }, [css])
}

export default useStylesInject
