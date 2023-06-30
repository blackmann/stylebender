import Button from './Button'
import Card from './Card'
import Checkbox from './Checkbox'
import Fieldset from './Fieldset'
import React from 'preact/compat'
import TextInput from './TextInput'
import currentModal from '../current-modal'
import getCss from '../css'
import layoutCss from '../layout'

function DownloadModal() {
  const [filename, setFilename] = React.useState('style.css')
  const [includeLayoutCss, setIncludeLayoutCss] = React.useState(true)

  function download() {
    let css = getCss(false)

    if (includeLayoutCss) {
      css += layoutCss
    }

    const blob = new Blob([css], { type: 'text/css' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.download = filename
    a.href = url
    a.style.display = 'none'

    document.body.appendChild(a)

    a.click()
    URL.revokeObjectURL(url)

    document.body.removeChild(a)
    hideModal()
  }

  function hideModal() {
    currentModal.value = null
  }

  return (
    <Card>
      <header class="medium app-text-secondary">Configure download</header>
      <Fieldset className="mt-1" inputId="filename" label="File name">
        <TextInput
          id="filename"
          onChange={(e) => setFilename((e.target as HTMLInputElement).value)}
          value={filename}
        />
      </Fieldset>

      <Fieldset inputId="include-layout" label="Include layout utilities">
        <Checkbox
          id="include-layout"
          type="checkbox"
          checked={includeLayoutCss}
          onChange={(e) =>
            setIncludeLayoutCss((e.target as HTMLInputElement).checked)
          }
        />
      </Fieldset>

      <footer className="mt-1">
        <Button onClick={download}>Download</Button>
        <Button onClick={hideModal} className="plain">
          Cancel
        </Button>
      </footer>
    </Card>
  )
}

export default DownloadModal
