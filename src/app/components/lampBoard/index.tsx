const keys: TLamp[][] = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
]

const Lamp: React.FC<{ letter: TLamp }> = ({ letter }) => {
  return <div className="">{letter}</div>
}

const LampRows: React.FC<{ row: TLamp[] }> = ({ row }) => {
  return (
    <div className="flex flex-row">
      {row.map((letter, i) => (
        <Lamp key={i} letter={letter} />
      ))}
    </div>
  )
}

const LampBoard = () => {
  return (
    <div className="">
      <LampRows row={keys[0]} />
      <LampRows row={keys[1]} />
      <LampRows row={keys[2]} />
    </div>
  )
}

export default LampBoard

type TLamp =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'
