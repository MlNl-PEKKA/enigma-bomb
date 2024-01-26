import { create, StateCreator } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type TextSlice = {
  text: string
}

const textSlice: StateCreator<TextSlice> = (set) => ({
  text: '',
})

export const setText = (text: TextSlice['text']) =>
  useBoundStore.setState({ text })

export const useBoundStore = create<TextSlice>()(
  immer((...a) => ({
    ...textSlice(...a),
  }))
)
