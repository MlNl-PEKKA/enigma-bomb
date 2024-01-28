'use client'
import { useBoundStore } from '@/app/stores'

const OutputBoard = () => {
  const inputText = useBoundStore((state) => state.text)
  return (
    <div className="flex flex-col gap-2 p-5 w-full h-full text-wrap text-justify">
      <LabeledSection label="Input" text={inputText} />
      <LabeledSection label="Output" text={inputText} />
    </div>
  )
}

const LabeledSection: React.FC<{
  label: 'Output' | 'Input'
  text: string
}> = ({ label, text }) => {
  return (
    <div className="flex flex-row gap-2 h-2/4">
      <section className="text-secondary bg-primary h-fit w-16 text-center">
        {label}
      </section>
      :{text}
    </div>
  )
}

export default OutputBoard
