import Body from '../sections/Body'
import Buttons from '../sections/Buttons'
import Colors from '../sections/Colors'
import Input from '../sections/Input'
import Typography from '../sections/Typography'

function Editor() {

  return (
    <div id="editor">
      <Colors />
      <Body />
      <Typography />
      <Buttons />
      <Input />
    </div>
  )
}

export default Editor
