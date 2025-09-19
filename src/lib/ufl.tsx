import {
  Anonymous_Pro,
  Montserrat,
  Plus_Jakarta_Sans,
  Readex_Pro,
  Instrument_Sans,
} from "next/font/google";
import localFont from "next/font/local";

export const readex_pro = Readex_Pro({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const instrument = Instrument_Sans({
  subsets: ["latin"],
});

export const piu = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const anon = Anonymous_Pro({
  subsets: ["latin"],
  weight: "400",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
});

export const reckless = localFont({
  src: [
    {
      path: "../../public/fonts/Reckless.ttf",
      style: "normal",
    },
  ],
});

export const skiff = localFont({
  src: [
    {
      path: "../../public/fonts/Skiff-ThinItalic.ttf",
      style: "normal",
    },
  ],
});
