import { memo, useEffect, useState } from 'react'
import { Keys } from './utils'
import { useBoundStore } from '@/app/stores'

const Lamp: React.FC<{ letter: Keys }> = ({ letter }) => {
  const keyPress = useBoundStore((state) => state.key) === letter
  const [active, setActive] = useState(keyPress)
  useEffect(() => {
    if (keyPress) setActive(true)
    else {
      const timeout = setTimeout(() => setActive(false), 50)
      return () => clearTimeout(timeout)
    }
  }, [keyPress])
  return (
    <div
      className={`flex flex-col justify-center items-center border-2
      border-primary select-none transition-colors cursor-pointer
      ${active ? 'text-secondary bg-primary' : 'text-primary bg-secondary'}
      w-12 h-12 text-2xl rounded-full
`}
      // tablet:w-12 tablet:h-12 tablet:text-2xl
      // desktop:w-14 desktop:h-14
    >
      <div>{letter}</div>
    </div>
  )
}

export default Lamp

export const LampSpace = () => {
  const keyPress = useBoundStore((state) => state.key) === ' '
  const [active, setActive] = useState(keyPress)
  useEffect(() => {
    if (keyPress) setActive(true)
    else {
      const timeout = setTimeout(() => setActive(false), 50)
      return () => clearTimeout(timeout)
    }
  }, [keyPress])
  return (
    <div
      className={`flex flex-col justify-end items-center 
    p-3 border-2 text-3xl border-primary
    select-none transition-colors cursor-pointer
    ${active ? 'text-secondary bg-primary' : 'text-primary bg-secondary'}
    w-80 h-10
`}
      // tablet:w-80 tablet:h-10
      // desktop: desktop:h-12
      style={{ borderRadius: '100vh' }}
    >
      <div
        className={`w-3/4 h-0.5 ${active ? 'bg-secondary' : 'bg-primary'}`}
        style={{ transform: 'translateY(2px)' }}
      />
    </div>
  )
}
