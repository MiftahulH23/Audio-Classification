import React from "react"

import Image from "next/image"

import Acoustic from "../assets/img/AccousticImage.jpeg"
import Bass from "../assets/img/BassImage.jpeg"
import Ukulele from "../assets/img/UkueleImage.jpeg"

const Label = () => {
  return (
    <div className="px-6">
      <p className="text-center text-2xl font-bold text-primary">Label</p>
      <div className="grid h-[500px] grid-cols-2 grid-rows-2 gap-5">
        <div className="relative size-full">
          <Image
            className="rotate- max-h-full max-w-full object-cover"
            src={Acoustic}
            alt="Gitar Acoustic"
          />
          <div className="absolute bottom-0 left-3">
            <p className="font-semibold">Acoustic</p>
          </div>
        </div>
        <div className="relative row-span-2 size-full border bg-slate-500">
          <Image
            className="rotate- max-h-full max-w-full object-scale-down"
            src={Bass}
            alt="Gitar Acoustic"
          />
          <div className="absolute bottom-0 left-3">
            <p className="font-semibold">Acoustic</p>
          </div>
        </div>
        <div className="size-full border bg-slate-500">3</div>
      </div>
    </div>
  )
}

export default Label
