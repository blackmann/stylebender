import ColorPicker from './ColorPicker'
import UnitInput from './UnitInput'
import styles from './BorderInput.module.css'

function BorderInput() {
  return (
    <div className={styles.input}>
      <div className="me-1">
        <ColorPicker />
      </div>

      <UnitInput id="border-input" />
    </div>
  )
}

export default BorderInput
