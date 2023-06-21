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
import { motion } from 'framer-motion'
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
  const [, setStyle] = useStyleConfig()

  function handleChange(property: string, value: string) {
    if (mode === 'preview') {
      return
    }

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
            id="button-variant"
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

      <div style={{ marginTop: '-1rem' }}>
        <Button className="plain small" onClick={toggleModes}>
          <span className="material-symbols-outlined me-1">
            {previewMode ? 'edit' : 'visibility'}
          </span>
          {previewMode ? 'Enter edit mode' : 'Enter preview mode'}
        </Button>
      </div>

      <Fieldset label="Font family" inputId="buttons-font-family">
        <TextInput id="buttons-font-family" />
      </Fieldset>

      <Fieldset label="Font size" inputId="buttons-font-size">
        <UnitInput id="buttons-font-size" />
      </Fieldset>

      <Fieldset label="Font weight" inputId="buttons-font-weight">
        <UnitInput id="buttons-font-weight" />
      </Fieldset>

      <Fieldset label="Radius" inputId="buttons-radius">
        <UnitInput id="buttons-radius" />
      </Fieldset>

      <Fieldset label="Padding" inputId="buttons-padding">
        <UnitInput id="buttons-padding" />
      </Fieldset>

      <div className="text-secondary medium mt-1">State overrides</div>

      <div
        className={clsx(
          previewMode ? styles.statesDisabled : styles.states,
          'mt-1'
        )}
      >
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

      <Fieldset disabled={previewMode} label="Background">
        <ColorPicker
          onChange={(value) => handleChange('background', value)}
          value="black"
        />
      </Fieldset>

      <Fieldset disabled={previewMode} label="Color">
        <ColorPicker value="black" />
      </Fieldset>

      <Fieldset label="Border" inputId="buttons-border">
        <BorderInput id="buttons-border" />
      </Fieldset>
    </Card>
  )
}

function Preview({ mode, state }: { mode: Mode; state: State }) {
  const [, , , _s] = useStyleConfig()

  function getVariables(variant: Variant) {
    const normalConfig = _s(`buttons.${variant}.normal`)

    // these values don't change between states
    const base = {
      '--button-font-family': normalConfig.fontFamily || _s('body.fontFamily'),
      '--button-font-size': normalConfig.fontSize,
      '--button-font-weight': normalConfig.fontWeight,
      '--button-vertical-padding': normalConfig.verticalPadding,
      '--button-horizontal-padding': normalConfig.horizontalPadding,
      '--button-border-radius': normalConfig.borderRadius,
    }

    const config = _s(`buttons.${variant}.${state}`)

    if (mode === 'edit') {
      const isHover = state === 'hover'
      // by default :hover uses the 500 shade for hover, `:<state>` uses
      // the base color (by default)

      const hoverBackground = (() => {
        if (config.background) return config.background

        if (variant === 'plain') {
          return isHover ? _s('colors').primaryShades[0] : 'transparent'
        }

        return isHover
          ? _s(`colors.${variant}Shades`)[4]
          : _s(`colors.${variant}`)
      })()

      return {
        ...base,
        '--button-background': isHover ? hoverBackground : config.background,
        '--button-foreground-color': config.color,
        '--button-hover-background': hoverBackground,
      } as React.CSSProperties
    }

    const variantConfig = _s(`buttons.${variant}`)
    return {
      ...base,
      '--button-background': variantConfig.normal.background,
      '--button-foreground-color': variantConfig.normal.color,
      '--button-hover-background': variantConfig.hover.background,
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
        <div className={clsx('mb-1 text-secondary app', styles.notice)}>
          <span className="material-symbols-outlined small me-1">code</span>
          <span>
            Use <code>.primary</code>, <code>.secondary</code>,{' '}
            <code>.tertiary</code> or
            <code>.plain</code> to achieve the respective styling.
          </span>
        </div>

        {previewMode && (
          <motion.div
            animate={{
              y: [-10, 0],
              opacity: [0, 1],
              transition: { duration: 0.25 },
            }}
            className={clsx('text-secondary mb-1', styles.notice)}
          >
            <span className="material-symbols-outlined small me-1">
              visibility
            </span>

            <span>Preview mode</span>
          </motion.div>
        )}

        {previewMode ? (
          <motion.div
            animate={{
              y: [-10, 0],
              opacity: [0, 1],
              transition: { duration: 0.25 },
            }}
            className={styles.notice}
            key={'edit'}
          >
            <span className="material-symbols-outlined small me-1">edit</span>
            <span>
              Enter edit mode to be able to configure the buttons in their
              respective states.
            </span>
          </motion.div>
        ) : (
          <motion.div
            animate={{
              y: [-10, 0],
              opacity: [0, 1],
              transition: { duration: 0.25 },
            }}
            className={styles.notice}
            key={'preview'}
          >
            <span className="material-symbols-outlined small me-1">
              visibility
            </span>
            <span>Toggle Preview mode to see and try results.</span>
          </motion.div>
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

interface StyledButtonProps extends React.PropsWithChildren {
  variant?: Variant
}

function StyledButton({ children, variant = 'primary' }: StyledButtonProps) {
  const [, , , _s] = useStyleConfig()

  function getVariables(variant: Variant) {
    const normalConfig = _s(`buttons.${variant}.normal`)

    const base = {
      '--button-font-family': normalConfig.fontFamily || _s('body.fontFamily'),
      '--button-font-size': normalConfig.fontSize,
      '--button-font-weight': normalConfig.fontWeight,
      '--button-vertical-padding': normalConfig.verticalPadding,
      '--button-horizontal-padding': normalConfig.horizontalPadding,
      '--button-border-radius': normalConfig.borderRadius,
    }

    const variantConfig = _s(`buttons.${variant}`)
    return {
      ...base,
      '--button-background': variantConfig.normal.background,
      '--button-foreground-color': variantConfig.normal.color,
      '--button-hover-background': variantConfig.hover.background,
    } as React.CSSProperties
  }

  return (
    <button className={clsx('button', variant)} style={getVariables(variant)}>
      {children}
    </button>
  )
}

export default ButtonsSection
export { StyledButton }
