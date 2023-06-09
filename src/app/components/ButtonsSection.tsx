import { AnimatePresence, motion } from 'framer-motion'
import BorderInput from './BorderInput'
import Button from './Button'
import Card from './Card'
import Chip from './Chip'
import ColorPicker from './ColorPicker'
import Fieldset from './Fieldset'
import React from 'react'
import Section from './Section'
import Select from './Select'
import TextInput from './TextInput'
import UnitInput from './UnitInput'
import clsx from 'clsx'
import cs from './Common.module.css'
import styles from './ButtonsSection.module.css'
import useStyleConfig from '../hooks/use-style-config'
import '../../styles/button.css'

const options = ['primary', 'secondary', 'tertiary', 'plain'] as const
const states = ['normal', 'hover', 'checked', 'active', 'disabled'] as const

type Variant = (typeof options)[number]
type State = (typeof states)[number]
type Mode = 'preview' | 'edit'

function Config({
  mode,
  state: selectedState,
  setMode,
  setState,
}: {
  mode: Mode
  state: State
  setMode: React.Dispatch<React.SetStateAction<Mode>>
  setState: React.Dispatch<React.SetStateAction<State>>
}) {
  const [variant, setVariant] = React.useState<Variant>('primary')
  const [{ buttons, colors }, setStyle] = useStyleConfig()

  function handleChange(property: string, value: string) {
    setStyle((style) => ({
      ...style,
      buttons: {
        ...style.buttons,
        [variant]: {
          ...style.buttons[variant],
          [selectedState]: {
            ...style.buttons[variant][selectedState],
            [property]: value,
          },
        },
      },
    }))
  }

  function toggleModes() {
    setMode((mode) => (mode === 'preview' ? 'edit' : 'preview'))
  }

  const previewMode = mode === 'preview'

  return (
    <Card>
      <header className={cs.configHeader}>
        <div className="text-secondary medium">buttons</div>

        <div>
          <Select
            onChange={(e) => setVariant(e.target.value as Variant)}
            value={variant}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>
      </header>

      <div>
        <Button className="plain small" onClick={toggleModes}>
          <span className="material-symbols-outlined me-1">
            {previewMode ? 'edit' : 'play_arrow'}
          </span>
          {previewMode ? 'Enter edit mode' : 'Preview'}
        </Button>
      </div>

      <div className={clsx(styles.states, 'mt-1')}>
        {states.map((state) => (
          <Chip
            checked={state === selectedState}
            key={state}
            onClick={() => setState(state)}
          >
            :{state}
          </Chip>
        ))}
      </div>

      <Fieldset label="Background">
        <ColorPicker
          onChange={(value) => handleChange('background', value)}
          value="black"
        />
      </Fieldset>

      <Fieldset label="Color">
        <ColorPicker value="black" />
      </Fieldset>

      <Fieldset label="Font family">
        <TextInput />
      </Fieldset>

      <Fieldset label="Font size">
        <UnitInput />
      </Fieldset>

      <Fieldset label="Font weight">
        <UnitInput />
      </Fieldset>

      <Fieldset label="Border">
        <BorderInput />
      </Fieldset>

      <Fieldset label="Radius">
        <UnitInput />
      </Fieldset>

      <Fieldset label="Padding">
        <UnitInput />
      </Fieldset>
    </Card>
  )
}

function Preview({ mode, state }: { mode: Mode; state: State }) {
  const [{ buttons }] = useStyleConfig()

  function getVariables(variant: Variant) {
    const config = buttons[variant][state]

    return {
      '--button-background': config.background,
      '--button-border-radius': config.borderRadius,
      '--button-foreground-color': config.color,
      '--button-font-size': config.fontSize,
      '--button-font-weight': config.fontWeight,
      '--button-vertical-padding': config.verticalPadding,
      '--button-horizontal-padding': config.horizontalPadding,
    } as React.CSSProperties
  }

  const previewMode = mode === 'preview'

  return (
    <>
      <div>
        <button className="button primary" style={getVariables('primary')}>
          Primary
        </button>
        <button className="button secondary" style={getVariables('secondary')}>
          Secondary
        </button>
        <button className="button tertiary" style={getVariables('tertiary')}>
          Tertiary
        </button>
        <button className="button plain" style={getVariables('plain')}>
          Plain
        </button>
      </div>

      <footer className={clsx('app text-secondary mt-3', styles.footer)}>
        {previewMode && (
          <AnimatePresence mode="wait">
            <motion.small
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className={styles.notice}
              key={'edit'}
            >
              <span className="material-symbols-outlined small me-1">edit</span>
              <span>
                Enter edit mode to be able to configure the buttons in their
                respective states.
              </span>
            </motion.small>
          </AnimatePresence>
        )}
        {!previewMode && (
          <AnimatePresence>
            <motion.small
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className={styles.notice}
              key={'preview'}
            >
              <span className="material-symbols-outlined small me-1">
                play_arrow
              </span>
              <span>Toggle Preview mode to see and try results.</span>
            </motion.small>
          </AnimatePresence>
        )}
      </footer>
    </>
  )
}

function ButtonsSection() {
  const [state, setState] = React.useState<State>('normal')
  const [mode, setMode] = React.useState<Mode>('preview')

  return (
    <Section
      config={<Config {...{ mode, state, setMode, setState }} />}
      id="button"
      name={
        <>
          <span className="material-symbols-outlined me-1">gamepad</span>{' '}
          Buttons
        </>
      }
    >
      <Preview mode={mode} state={state} />
    </Section>
  )
}

export default ButtonsSection
