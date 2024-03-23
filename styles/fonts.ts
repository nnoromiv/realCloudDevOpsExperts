import { ABeeZee } from "next/font/google";
import localFont from "next/font/local";

const higuen = localFont({
    src: './fonts/Higuen.otf', variable: '--font-higuen'
})

const moKoTo = localFont({
  src: './fonts/Mokoto.ttf', variable: '--font-moKoTo'
})

const aBeeZee = ABeeZee({
  weight: '400', style: "normal", subsets: ['latin']
})

export {
  higuen,
  moKoTo,
  aBeeZee
}