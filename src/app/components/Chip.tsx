import React from 'react'
interface ChipProps {
    text: string;
  }

function Chip({ text }: ChipProps) {
  return (
    <span
    className="mb-2 mr-2 text-base  px-3 my-1 font-medium  leading-none border border-zinc-600 text-black rounded-full py-1.5"
  >
    {text}
  </span>  )
}

export default Chip