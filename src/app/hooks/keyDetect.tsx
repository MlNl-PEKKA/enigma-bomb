import { useCallback, useEffect } from 'react'
import { setKey, setText } from '../stores'
import { Keys } from '../components/lampBoard/utils'

const useKeyPress = () => {
  const listenerUpFunction = useCallback(() => {
    setKey(null)
  }, [])
  const listenerDownFunction = useCallback((e: KeyboardEvent) => {
    const newKey = e.key.toLowerCase() as Keys
    if (keyValidation(newKey)) {
      setKey(newKey)
      setText(newKey)
    }
  }, [])
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
}

export const keyValidation = (key: Keys) => {
  return key ? /^[a-z\s]$/i.test(key as string) || key === 'backspace' : false
}
export default useKeyPress
