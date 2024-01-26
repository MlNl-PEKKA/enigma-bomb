'use client'
import useKeyPress from '@/app/hooks/keyDetect'
import { Lamp, LampSpace } from './lamps'
import { TLetters, keys } from './utils'

const LampBoard = () => {
  const keyPress = useKeyPress()
  return (
    <div className="flex flex-col items-center gap-1 tablet:gap-2">
      <LampRows row={keys[0]} keyPress={keyPress} />
      <LampRows row={keys[1]} keyPress={keyPress} />
      <LampRows row={keys[2]} keyPress={keyPress} />
      <LampSpace keyPress={keyPress === ' '} />
    </div>
  )
}

const LampRows: React.FC<{ row: TLetters[]; keyPress: string | null }> = ({
  row,
  keyPress,
}) => {
  return (
    <div className="flex flex-row gap-1 tablet:gap-2">
      {row.map((letter, i) => (
        <Lamp key={i} letter={letter} keyPress={letter === keyPress} />
      ))}
    </div>
  )
}

export default LampBoard
