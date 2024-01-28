import { create, StateCreator } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Keys } from '../components/lampBoard/utils'

type TextSlice = {
  text: string
}

type KeySlice = {
  key: Keys
}

const textSlice: StateCreator<TextSlice> = () => ({
  text: '',
})

const keySlice: StateCreator<KeySlice> = () => ({
  key: null,
})

export const setText = (key: KeySlice['key']) => {
  const { text: prevText } = useBoundStore.getState()
  switch (key) {
    case 'backspace':
      {
        const text = prevText.slice(0, prevText.length - 1)
        useBoundStore.setState({ text })
      }
      break
    case null:
      break
    default:
      {
        const text = prevText + key
        useBoundStore.setState({ text })
      }
      break
  }
}

export const setKey = (key: KeySlice['key']) => {
  useBoundStore.setState({ key })
  const handleSetText = (key: Keys) => {}
}

export const useBoundStore = create<TextSlice & KeySlice>()(
  immer((...a) => ({
    ...textSlice(...a),
    ...keySlice(...a),
  }))
)
