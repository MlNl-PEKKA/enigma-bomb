import useKeyPress from '@/app/hooks/keyDetect'
import { TLetters } from './utils'

export const Lamp: React.FC<{ letter: TLetters; keyPress: boolean }> = ({
  letter,
  keyPress,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center border-2
      border-primary select-none transition-colors cursor-pointer
      ${keyPress ? 'text-secondary bg-primary' : 'text-primary bg-secondary'}
      w-8 h-8 text-sm rounded-full
      tablet:w-12 tablet:h-12 tablet:text-2xl 
      desktop:w-14 desktop:h-14 
`}
    >
      <div>{letter}</div>
    </div>
  )
}

export const LampSpace: React.FC<{ keyPress: boolean }> = ({ keyPress }) => {
  return (
    <div
      className={`flex flex-col justify-end items-center 
    p-3 border-2 text-3xl border-primary
    select-none transition-colors cursor-pointer
    ${keyPress ? 'text-secondary bg-primary' : 'text-primary bg-secondary'}
    w-40 h-8
    tablet:w-80 tablet:h-10
    desktop: desktop:h-12 
`}
      style={{ borderRadius: '100vh' }}
    >
      <div
        className={`w-3/4 h-0.5 ${keyPress ? 'bg-secondary' : 'bg-primary'}`}
        style={{ transform: 'translateY(2px)' }}
      />
    </div>
  )
}
