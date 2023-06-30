import { signal } from '@preact/signals'

type Modal = 'download'
const currentModal = signal<Modal | null>(null)

export default currentModal
