import Editor from './components/Editor'
import Navbar from './components/Navbar'
import React from 'preact/compat'
import useStylesInject from './hooks/use-styles-inject'
interface Props {
  name: string
}
const Demo = React.forwardRef(
  ({ name }: Props, ref: React.ForwardedRef<number>) => {
    setRef(ref, 8)
    return <div>Hello {name}, </div>
  }
)

function setRef<T>(ref: React.ForwardedRef<T>, value: T) {
  if (ref) {
    if (typeof ref === 'function') {
      ref(value)
    } else if (typeof ref === 'object') {
      ref.current = value
    }
  }
}

export function App() {
  useStylesInject()
  const ref = React.useRef(4)

  return (
    <>
      <Navbar />
      <Editor />
    </>
  )
}
