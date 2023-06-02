import Pickr from '@simonwep/pickr'
import React from 'react'

interface Props {
  clear?: boolean
  onChange?: (value: string) => void
  value?: string
}

function initializePickr(el: HTMLElement, { clear, value, onChange }: Props) {
  const pickr = Pickr.create({
    el,
    position: 'bottom-middle',
    theme: 'nano',
    default: value,
    defaultRepresentation: 'HEXA',
    components: {
      hue: true,
      opacity: true,
      palette: true,
      preview: true,
      interaction: {
        clear,
        hex: true,
        input: true,
      },
    },
  })

  pickr.on('change', (hsv: any) => {
    onChange?.(hsv.toHEXA().toString())
    pickr.applyColor()
  })
}

function ColorPicker(props: Props) {
  const pickrRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    initializePickr(pickrRef.current!, props)
  }, [])

  return <div style={{ marginLeft: '10rem' }} ref={pickrRef}></div>
}

export default ColorPicker
