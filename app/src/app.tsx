import Editor from './components/Editor'
import Navbar from './components/Navbar'
import useStylesInject from './hooks/use-styles-inject'

export function App() {
  useStylesInject()

  return (
    <>
      <Navbar />
      <Editor/>
    </>
  )
}
