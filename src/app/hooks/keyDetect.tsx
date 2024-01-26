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

  return key
}

export default useKeyPress
