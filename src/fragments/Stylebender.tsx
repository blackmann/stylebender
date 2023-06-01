import Navbar from '../app/components/Navbar'
import styles from './Stylebender.module.css'
import { StylebenderProvider } from './StylebenderContext'

function Stylebender() {
  return (
    <StylebenderProvider>
      <Navbar />
    </StylebenderProvider>
  )
}

export default Stylebender
