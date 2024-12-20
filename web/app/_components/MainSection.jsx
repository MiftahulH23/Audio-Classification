import React from "react"

import Image from "next/image"

import Acoustic from "../assets/img/image1.png"
import Bass from "../assets/img/bass.png"
import Ukulele from "../assets/img/ukelele.png"
import L1 from "../assets/element/2.png"
import L2 from "../assets/element/8.png"
import L3 from "../assets/element/9.png"


const MainSection = () => {
  return (
    <div className="flex flex-col gap-6 relative">
      {/* element */}
      <Image src={L1} className="absolute top-14 right-40 rotate-12 size-16 drop-shadow-xl" />
      <Image src={L2} className="absolute top-20 left-40 -rotate-12 size-16 drop-shadow-xl" />
      <Image src={L3} className="absolute top-28 right-72 -rotate-12 size-16 drop-shadow-xl" />
      <p className="text-center text-3xl font-bold italic font-montserrat">
        Setiap senar yang dipetik adalah cerita yang tak terucapkan <br /> dan
        kami di sini untuk mendengarkan kisah itu
      </p>
      <p className="text-center text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio.
      </p>
      <div className="flex justify-center mb-10">
        <button className="w-fit cursor-pointer flex justify-center items-center gap-3 rounded-xl bg-[#d7c6ff] px-4 py-2 font-semibold text-black">
          <p>Mulai Sekarang</p>
          <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right size-5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-12 ">
        <div className="relative flex h-72 w-60 items-center justify-center rounded-xl border bg-[#ffabde]">
          <div className="absolute bottom-2 h-80 w-auto">
            <Image
              className="max-h-full max-w-full object-contain"
              src={Acoustic}
              alt="Gitar Acoustic"
            />
          </div>
        </div>
        <div className="relative flex h-56 w-full items-center justify-center rounded-xl border bg-[#d7c6ff] pb-8">
          <div className="bottom-5 h-72 w-auto">
            <Image
              className="max-h-full max-w-full object-contain"
              src={Ukulele}
              alt="Gitar Acoustic"
            />
          </div>
        </div>
        <div className="relative flex h-72 w-3/4 items-center justify-center rounded-xl border bg-[#fae180]">
          <div className="absolute bottom-2 h-80 w-auto rotate-12">
            <Image
              className="max-h-full max-w-full object-contain"
              src={Bass}
              alt="Gitar Acoustic"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
