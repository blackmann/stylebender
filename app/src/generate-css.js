import fs from 'fs'
import path from 'path'
import url from 'url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const NAME_REGEX = /\/\* (.+) \*\/ .+;$/gm

function _([filename]) {
  return path.join(__dirname, filename)
}

const fileOpts = { encoding: 'utf-8' }
const baseStyle = fs.readFileSync(_`./style-base.css`, fileOpts)
const darkStyle = fs.readFileSync(_`./style-dark.css`, fileOpts)

const baseReplaced = baseStyle.replace(NAME_REGEX, '${getStyle(\'$1\')};')
const darkReplaced = darkStyle.replace(NAME_REGEX, '${getStyle(\'$1\', \'dark\')};')

const template =
`/**
 * Generated with 'node generate-css.js'. Do not edit!
 */

import { getStyle } from './config'

function getCss() {
  return \`
${baseReplaced}
${darkReplaced}
\`
}

export default getCss
`

fs.writeFileSync(_`css.ts`, template, fileOpts)
