import {
  Bricolage_Grotesque,
  Hanken_Grotesk,
  Inter,
  Open_Sans,
  Roboto_Mono,
  Rock_Salt,
  Syne,
} from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-rock-salt",
})

const fonts = {
  inter: inter.variable,
  rockSalt: rockSalt.variable,
}

export default fonts
