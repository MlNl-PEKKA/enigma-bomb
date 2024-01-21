'use client'
import useKeyPress from '@/app/hooks/keyDetect'
import { TLamp } from './utils'
import { useState } from 'react'

export const Lamp: React.FC<{ letter: TLamp }> = ({ letter }) => {
  const keyPress = useKeyPress(letter)
  const [touch, setTouch] = useState(false)
  const active = keyPress || touch
  return (
    <div
      className={`flex flex-col justify-end items-end 
      w-14 h-16 p-2 border-2 rounded-xl text-xl 
      border-primary select-none transition-colors cursor-pointer
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

export const LampSpace = () => {
  const keyPress = useKeyPress(' ')
  const [touch, setTouch] = useState(false)
  const active = keyPress || touch
  return (
    <div
      className={`flex flex-col justify-end items-center 
    w-80 h-16 p-3 border-2 rounded-xl text-3xl 
    border-primary select-none transition-colors cursor-pointer
    ${active ? 'text-secondary bg-primary' : 'text-primary bg-secondary'}
`}
      onMouseDown={() => setTouch(true)}
      onTouchStart={() => setTouch(true)}
      onMouseLeave={() => setTouch(false)}
      onMouseUp={() => setTouch(false)}
      onTouchEnd={() => setTouch(false)}
    >
      <div
        className={`w-3/4 h-0.5 bg-primary ${
          active ? 'bg-secondary' : 'bg-primary'
        }`}
      />
    </div>
  )
}
