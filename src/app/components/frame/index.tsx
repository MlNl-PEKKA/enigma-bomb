import LampBoard from '../lampBoard'

const Frame = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <TopDeck />
      <BottomDeck />
    </div>
  )
}

const TopDeck = () => {
  return (
    <section className="flex flex-row h-2/5 gap-4 ">
      <WiringFrame />
      <OutputFrame />
    </section>
  )
}

const BottomDeck = () => {
  return (
    <section className="flex flex-row h-3/5 gap-4">
      <PlugBoardFrame />
      <LampBoardFrame />
    </section>
  )
}

const WiringFrame = () => {
  return (
    <div className="flex flex-row w-2/4 gap-4">
      <ReflectorFrame />
      <RotorFrame />
    </div>
  )
}

const ReflectorFrame = () => {
  return (
    <section className="flex items-center flex-grow justify-center border-2 border-primary">
      Reflector
    </section>
  )
}

const RotorFrame = () => {
  return (
    <>
      <section className="flex flex-grow items-center justify-center border-2 border-primary">
        III
      </section>
      <section className="flex flex-grow items-center justify-center  border-2 border-primary">
        II
      </section>
      <section className="flex flex-grow items-center justify-center border-2 border-primary">
        I
      </section>
    </>
  )
}

const OutputFrame = () => {
  return (
    <section className="flex items-center w-2/4 justify-center border-2 border-primary">
      Output
    </section>
  )
}

const PlugBoardFrame = () => {
  return (
    <section className="flex flex-row w-2/4 items-center justify-center border-2 border-primary">
      Plugboard
    </section>
  )
}

const LampBoardFrame = () => {
  return (
    <section className="flex flex-row w-2/4 items-center justify-center border-2 border-primary">
      <LampBoard />
    </section>
  )
}

export default Frame
