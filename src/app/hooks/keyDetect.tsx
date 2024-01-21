import { useCallback, useEffect, useState } from 'react'

const useKeyPress = (key: string) => {
  const [keyPress, setKeyPress] = useState(false)
  const listenerUpFunction = useCallback(
    (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === key.toLowerCase()) setKeyPress(false)
    },
    [key]
  )
  const listenerDownFunction = useCallback(
    (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === key.toLowerCase()) setKeyPress(true)
    },
    [key]
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
