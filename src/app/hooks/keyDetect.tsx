import { useCallback, useEffect, useState } from 'react'

const useKeyPress = () => {
  const [key, setKey] = useState<string | null>(null)
  const listenerUpFunction = useCallback(() => {
    setKey(null)
  }, [])
  const listenerDownFunction = useCallback((e: KeyboardEvent) => {
    setKey(e.key.toLowerCase())
  }, [])
  useEffect(() => {
    document.addEventListener('keypress', listenerDownFunction)
    return () => {
      document.removeEventListener('keypress', listenerDownFunction)
    }
  }, [listenerDownFunction])

  useEffect(() => {
    document.addEventListener('keyup', listenerUpFunction)
    return () => {
      document.removeEventListener('keyup', listenerUpFunction)
    }
  }, [listenerUpFunction])

  return key
}

export default useKeyPress
