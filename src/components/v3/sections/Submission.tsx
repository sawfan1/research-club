// import Lotti1 from "@/components/Lottie1";
import Image from "next/image";
import { Hower } from "@/components/v3/Hower";
import { readex_pro, reckless } from "@/lib/ufl";
import { BookOpenCheck, SearchCheck, MonitorX } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Submission() {
  return (
    <section
      className="w-full max-h-[550px] h-screen flex border-1 border-b-black"
      id="submission"
    >
      <div className="w-full md:w-1/2 h-full hidden md:flex flex-col items-center justify-center p-15">
        {/*<Lotti1 />*/}
        <Image src="/chaka/medals.png" height={473} width={507} alt="image" />
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center px-6">
        <TextAnimate
          animation="fadeIn"
          className={`text-[40px] md:text-[46px] ${reckless.className} mt-4`}
        >
          Submission
        </TextAnimate>
        <TextAnimate
          className={`text-center max-w-[55ch] ${readex_pro.className} text-[14px]`}
        >
          Head down the following link and complete the form. After completion,
          check your email for further instructions.
        </TextAnimate>
        <BlurFade className="flex h-[150px] max-w-100 min-w-80 bg-blue0-50 mt-4 rounded-xl overflow-hidden outline-1 outline-black">
          <div
            className={`${readex_pro.className} border-r-black border-1 text-center gap-3 p-6 w-1/3 h-full bg-indigo-200 inline-flex flex-col items-center justify-center text-sm`}
          >
            <BookOpenCheck size={30} />
            Read the guidelines
          </div>
          <div
            className={`${readex_pro.className} border-r-black border-1 text-center gap-3 p-6 w-1/3 h-full bg-indigo-200 inline-flex flex-col items-center justify-center text-sm`}
          >
            <SearchCheck size={30} />
            Verify information
          </div>
          <div
            className={`${readex_pro.className} text-center gap-3 p-6 w-1/3 h-full bg-indigo-200 inline-flex flex-col items-center justify-center text-sm`}
          >
            <MonitorX size={30} />
            Maintain honesty
          </div>
        </BlurFade>
        <Hower>Proceed to Submission</Hower>
      </div>
    </section>
  );
}
