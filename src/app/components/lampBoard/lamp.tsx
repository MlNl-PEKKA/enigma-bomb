'use client'
import useKeyPress from '@/app/hooks/keyDetect'
import { TLamp } from './utils'
import { useState } from 'react'

const Lamp: React.FC<{ letter: TLamp }> = ({ letter }) => {
  const keyPress = useKeyPress(letter)
  const [touch, setTouch] = useState(false)
  const active = keyPress || touch
  return (
    <div
      className={`flex flex-col justify-end items-end 
      w-16 h-20 p-3 border-2 rounded-xl text-3xl 
      border-primary select-none
      ${active ? 'text-secondary bg-primary' : 'text-primary bg-secondary'}
`}
      onMouseDown={() => setTouch(true)}
      onTouchStart={() => setTouch(true)}
      onMouseLeave={() => setTouch(false)}
      onMouseUp={() => setTouch(false)}
      onTouchEnd={() => setTouch(false)}
    >
      <div>{letter}</div>
    </div>
  )
}

export default Lamp
