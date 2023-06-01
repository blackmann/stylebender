import Navbar from './components/Navbar'
import styles from './Stylebender.module.css'
import { StylebenderProvider } from './contexts/StylebenderContext'

function Stylebender() {
  return (
    <StylebenderProvider>
      <Navbar />
    </StylebenderProvider>
  )
}

export default Stylebender
