import React from "react"

import Image from "next/image"

import GitarAcoustic from "../assets/img/accoustic.png"

const MainSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-center text-xl font-bold italic">
        Setiap senar yang dipetik adalah cerita yang tak terucapkan <br /> dan
        kami di sini untuk mendengarkan kisah itu
      </p>
      <p className="text-center text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio.
      </p>
      <div className="flex justify-center">
        <button className="w-fit cursor-pointer rounded-xl bg-primary px-8 py-2 text-white hover:font-semibold">
          Mulai
        </button>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-12 ">
        <div className="flex h-72 w-3/4 items-center justify-center rounded-xl border bg-[#ffabde]">
          <Image
            className="max-h-full max-w-full object-contain"
            src={GitarAcoustic}
            alt="Gitar Acoustic"
          />
        </div>

        <div className="h-56 w-full rounded-xl border bg-[#d7c6ff]"></div>
        <div className="h-72 w-3/4 rounded-xl border bg-[#fae180]"></div>
      </div>
    </div>
  )
}

export default MainSection
