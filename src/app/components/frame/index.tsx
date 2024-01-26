const Frame = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <section className="flex flex-row grow-2 gap-4 ">
        <div className="flex flex-row w-2/4 gap-4">
          <section className="flex items-center flex-grow justify-center border-2 border-primary">
            Reflector
          </section>
          <section className="flex flex-grow items-center justify-center border-2 border-primary">
            III
          </section>
          <section className="flex flex-grow items-center justify-center  border-2 border-primary">
            II
          </section>
          <section className="flex flex-grow items-center justify-center border-2 border-primary">
            I
          </section>
        </div>
        <section className="flex items-center w-2/4 justify-center border-2 border-primary">
          Output
        </section>
      </section>
      <section className="flex flex-row grow-3 gap-4">
        <section className="flex flex-row w-2/4 items-center justify-center border-2 border-primary">
          Plugboard
        </section>
        <section className="flex flex-row w-2/4 items-center justify-center border-2 border-primary">
          Input
        </section>
      </section>
    </div>
  )
}

export default Frame
