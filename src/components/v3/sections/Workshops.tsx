import Lotti2 from "@/components/Lottie2";
import { readex_pro, reckless } from "@/lib/ufl";
import { Highlighter } from "@/components/v3/Highlighter";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Workshops() {
  return (
    <section
      className="w-full max-h-[500px] h-screen flex border-1 border-b-black"
      id="workshops"
    >
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center px-10">
        <h1 className={`text-[40px] md:text-[46px] ${reckless.className}`}>
          <BlurFade
            className={`bg-blue-600 text-white px-4 py-2 rounded-xl text-sm text-center ${readex_pro.className}`}
          >
            Latest addition
          </BlurFade>
          <Highlighter color="black" action="underline">
            Workshops
          </Highlighter>
        </h1>
        <TextAnimate
          className={`text-center max-w-[55ch] ${readex_pro.className} text-[14px] mt-3`}
        >
          Workshops are held monthly, usually offline and on school campus. They
          help you discover your passion for research topics as well as hone
          your skills.
        </TextAnimate>

        <TextAnimate
          className={`text-center max-w-[55ch] ${readex_pro.className} text-[14px] mt-6`}
        >
          Expert mentors hold classes on topics ranging from research integrity,
          formatting and referencing in 1 hour subclasses for the convenience of
          students.
        </TextAnimate>
      </div>
      <div className="w-full md:w-1/2 h-full hidden md:flex flex-col items-center justify-center p-8">
        <Lotti2 />
      </div>
    </section>
  );
}
