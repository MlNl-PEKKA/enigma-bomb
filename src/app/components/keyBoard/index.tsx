import { Key, KeySpace } from './keys'
import { TLetters, keys } from './utils'

const LampBoard = () => {
  return (
    <div className="flex flex-col items-center gap-1 tablet:gap-2">
      <KeyRows row={keys[0]} />
      <KeyRows row={keys[1]} />
      <KeyRows row={keys[2]} />
      <KeySpace />
    </div>
  )
}

const KeyRows: React.FC<{ row: TLetters[] }> = ({ row }) => {
  return (
    <div className="flex flex-row gap-1 tablet:gap-2">
      {row.map((letter, i) => (
        <Key key={i} letter={letter} />
      ))}
    </div>
  )
}

export default LampBoard
