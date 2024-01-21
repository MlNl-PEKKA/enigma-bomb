'use client'
import useKeyPress from '@/app/hooks/keyDetect'
import { TLamp } from './utils'

const Lamp: React.FC<{ letter: TLamp }> = ({ letter }) => {
  const keyPress = useKeyPress(letter)
  if (letter === 'q') console.log(keyPress)
  return (
    <div
      className={`flex flex-col justify-end items-end 
      w-16 h-20 p-3 border-2 rounded-xl text-3xl 
      border-primary
      ${keyPress ? 'text-secondary bg-primary' : 'text-primary bg-secondary'}
`}
    >
      <div>{letter}</div>
    </div>
  )
}

export default Lamp
