import ColorPicker from './ColorPicker'
import UnitInput from './UnitInput'
import styles from './BorderInput.module.css'

interface Props extends React.ComponentProps<'input'> {}

function BorderInput(props: Props) {
  return (
    <div className={styles.input}>
      <div className="me-1">
        <ColorPicker />
      </div>

      <UnitInput {...props}/>
    </div>
  )
}

export default BorderInput
