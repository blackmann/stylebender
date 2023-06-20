import ColorPicker from './ColorPicker'
import UnitInput from './UnitInput'
import styles from './BorderInput.module.css'

interface Props {
  id: string
}

function BorderInput({ id }: Props) {
  return (
    <div className={styles.input}>
      <div className="me-1">
        <ColorPicker />
      </div>

      <UnitInput id={id} />
    </div>
  )
}

export default BorderInput
