import Body from '../sections/Body'
import Buttons from '../sections/Buttons'
import Colors from '../sections/Colors'
import Input from '../sections/Input'
import Typography from '../sections/Typography'
import Link from '../sections/Link'

function Editor() {

  return (
    <div id="editor">
      <Colors />
      <Body />
      <Typography />
      <Buttons />
      <Input />
      <Link />
    </div>
  )
}

export default Editor
