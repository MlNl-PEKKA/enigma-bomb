import Lamp from './lamp'
import { TLamp, keys } from './utils'

const LampBoard = () => {
  return (
    <div className="flex flex-col gap-2">
      <LampRows row={keys[0]} />
      <LampRows row={keys[1]} />
      <LampRows row={keys[2]} />
    </div>
  )
}

const LampRows: React.FC<{ row: TLamp[] }> = ({ row }) => {
  return (
    <div className="flex flex-row gap-2 justify-center">
      {row.map((letter, i) => (
        <Lamp key={i} letter={letter} />
      ))}
    </div>
  )
}

export default LampBoard
