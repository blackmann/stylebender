import Pickr from '@simonwep/pickr'
import React from 'react'

interface Props {
  clear?: boolean
  onChange?: (value: string) => void
  value?: string
}

function initializePickr(el: HTMLElement, { clear, value }: Props) {
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

  return pickr
}

function ColorPicker({ clear, onChange, value }: Props) {
  const pickrElRef = React.useRef<HTMLDivElement>(null)
  const pickrRef = React.useRef<Pickr>()

  React.useEffect(() => {
    // voilating react hook rules here, `value` should be a dependency
    const pickr = initializePickr(pickrElRef.current!, { clear, value })
    pickrRef.current = pickr

    return () => {
      pickr.destroy()
      pickrRef.current = undefined
    }
  }, [clear])

  React.useEffect(() => {
    if (!pickrRef.current) return
    const pickr = pickrRef.current

    const handleChange = (hsv: any) => {
      onChange?.(hsv.toHEXA().toString())
      pickr.applyColor()
    }

    pickr.on('change', handleChange)

    return () =>  {
      pickrRef.current?.off('change', handleChange)
    }
  }, [onChange])

  return <div style={{ marginLeft: '10rem' }} ref={pickrElRef}></div>
}

export default ColorPicker
