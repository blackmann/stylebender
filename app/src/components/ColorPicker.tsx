import '@simonwep/pickr/dist/themes/nano.min.css'
import Pickr from '@simonwep/pickr'
import React from 'preact/compat'

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

function ColorPicker({ clear, onChange, value = 'black' }: Props) {
  const pickrElRef = React.useRef<HTMLDivElement>(null)
  const pickrRef = React.useRef<Pickr>()

  React.useEffect(() => {
    // voilating react hook rules here, `value` should be a dependency
    // .setColor should work, but that's not the case.
    const pickr = initializePickr(pickrElRef.current!, { clear, value })
    pickrRef.current = pickr

    return () => {
      pickr.destroy()
      pickrRef.current = undefined
    }
  }, [clear])

  React.useEffect(() => {
    if (!pickrRef.current) return
    pickrRef.current.setColor(value)
  }, [value])

  React.useEffect(() => {
    if (!pickrRef.current) return
    const pickr = pickrRef.current

    const handleChange = (hsv: any) => {
      const newColor = hsv.toHEXA().toString()
      pickr.applyColor()
      onChange?.(newColor)
    }

    pickr.on('change', handleChange)

    return () => {
      pickrRef.current?.off('change', handleChange)
    }
  }, [onChange])

  return <div style={{ marginLeft: '10rem' }} ref={pickrElRef} />
}

export default ColorPicker
