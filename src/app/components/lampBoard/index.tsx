import { Lamp, LampSpace } from './lamps'
import { TLetters, keys } from './utils'

const LampBoard = () => {
  return (
    <div className="flex flex-col items-center gap-1 tablet:gap-2">
      <LampRows row={keys[0]} />
      <LampRows row={keys[1]} />
      <LampRows row={keys[2]} />
      <LampSpace />
    </div>
  )
}

const LampRows: React.FC<{ row: TLetters[] }> = ({ row }) => {
  return (
    <div className="flex flex-row gap-1 tablet:gap-2">
      {row.map((letter, i) => (
        <Lamp key={i} letter={letter} />
      ))}
    </div>
  )
}

export default LampBoard
