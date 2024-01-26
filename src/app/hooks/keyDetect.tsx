import { useCallback, useEffect, useState } from 'react'
import { setText, useBoundStore } from '../stores'

const useKeyPress = () => {
  const [keyPress, setKeyPress] = useState('')
  const text = useBoundStore((state) => state.text)
  const keyValidation = useCallback((key: string) => {
    return /^[a-z\s]$/i.test(key)
  }, [])
  const listenerUpFunction = useCallback(() => {
    setKeyPress('')
  }, [])
  const listenerDownFunction = useCallback(
    (e: KeyboardEvent) => {
      if (keyValidation(e.key)) setText(`${text}${e.key.toLowerCase()}`)
      else if (e.key === 'Backspace')
        setText(
          `${text?.length === 0 ? text : text?.slice(0, text.length - 1)}`
        )
      setKeyPress(e.key.toLowerCase())
    },
    [keyValidation, text]
  )
  useEffect(() => {
    document.addEventListener('keydown', listenerDownFunction)
    return () => {
      document.removeEventListener('keydown', listenerDownFunction)
    }
  }, [listenerDownFunction])

  useEffect(() => {
    document.addEventListener('keyup', listenerUpFunction)
    return () => {
      document.removeEventListener('keyup', listenerUpFunction)
    }
  }, [listenerUpFunction])

  return keyPress
}

export default useKeyPress
