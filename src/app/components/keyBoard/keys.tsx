'use client'
import useKeyPress from '@/app/hooks/keyDetect'
import { TLetters } from './utils'
import { useState } from 'react'

export const Key: React.FC<{ letter: TLetters }> = ({ letter }) => {
  const keyPress = useKeyPress(letter)
  const [touch, setTouch] = useState(false)
  const active = keyPress || touch
  return (
    <div
      className={`flex flex-col justify-end items-end p-2 border-2
      border-primary select-none transition-colors cursor-pointer
      ${
        active
          ? 'text-secondary bg-tertiary border-tertiary'
          : 'text-primary bg-secondary border-primary'
      }
      w-8 h-10 text-sm rounded-lg
      tablet:w-12 tablet:h-14 tablet:text-2xl tablet:rounded-xl
      desktop:w-14 desktop:h-16 desktop:text-3xl 
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

export const KeySpace = () => {
  const keyPress = useKeyPress(' ')
  const [touch, setTouch] = useState(false)
  const active = keyPress || touch
  return (
    <div
      className={`flex flex-col justify-end items-center 
    p-3 border-2 text-3xl 
    select-none transition-colors cursor-pointer
    ${
      active
        ? 'text-secondary bg-tertiary border-tertiary'
        : 'text-primary bg-secondary border-primary'
    }
    w-40 h-10 rounded-lg
    tablet:w-70 tablet:h-14 tablet:rounded-xl
    desktop:w-80 desktop:h-16 
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
