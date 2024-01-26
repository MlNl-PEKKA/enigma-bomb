'use client'
import useKeyPress from '@/app/hooks/keyDetect'
import { MemoLamp, LampSpace } from './lamps'
import { TLetters, keys } from './utils'

const LampBoard = () => {
  const keyPress = useKeyPress()
  return (
    <div className="flex flex-col items-center gap-1 tablet:gap-2">
      <div className="flex flex-row gap-1 tablet:gap-2">
        {keys[0].map((letter, i) => (
          <MemoLamp key={i} letter={letter} keyPress={letter === keyPress} />
        ))}
      </div>
      <div className="flex flex-row gap-1 tablet:gap-2">
        {keys[1].map((letter, i) => (
          <MemoLamp key={i} letter={letter} keyPress={letter === keyPress} />
        ))}
      </div>
      <div className="flex flex-row gap-1 tablet:gap-2">
        {keys[2].map((letter, i) => (
          <MemoLamp key={i} letter={letter} keyPress={letter === keyPress} />
        ))}
      </div>
      <LampSpace keyPress={keyPress === ' '} />
    </div>
  )
}

// const LampRows: React.FC<{ row: TLetters[]; keyPress: string | null }> = ({
//   row,
//   keyPress,
// }) => {
//   return (
//     <div className="flex flex-row gap-1 tablet:gap-2">
//       {row.map((letter, i) => (
//         <MemoLamp key={i} letter={letter} keyPress={letter === keyPress} />
//       ))}
//     </div>
//   )
// }

export default LampBoard
