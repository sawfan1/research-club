import { piu, skiff, instrument } from "@/lib/ufl";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import Member from "@/components/v3/Member";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";

export default function Faculty() {
  return (
    <section className="pb-20 min-h-[700px] relative text-white px-0 md:px-20 lg:px-40 py-10 bg-gradient-to-t from-gray-900 to-slate-800 pt-35">
      <SmoothCursor />
      <div className="h-[100%] w-[100%] absolute z-10 top-0 left-0"></div>
      <h2
        className={`text-[40px] md:text-[44px] ${instrument.className} text-center tracking-tight`}
      >
        Club Faculty
      </h2>
      <h3
        className={`text-[30px] md:text-[38px] ${skiff.className} text-center tracking-tight`}
      >
        Core Members
      </h3>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-6 ">
        <div className="w-[300px] h-[367px] bg-gray-900 rounded-[12px] relative border-1 border-white glow overflow-hidden">
          <Image
            src={"/faculty/rayan.jpg"}
            fill
            alt="President"
            className="rounded-[12px] object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6 text-center">
            <h2
              className={`text-white text-xl font-semibold mb-1 ${piu.className}`}
            >
              Rayan Faruk
            </h2>
            <p
              className={`text-white/80 text-sm font-semibold ${piu.className}`}
            >
              Club President
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[367px] bg-gray-900 rounded-[12px] relative border-1 border-white glow overflow-hidden">
          <Image
            src={"/faculty/ahnaf.jpg"}
            fill
            alt="Vice President"
            className="rounded-[12px] object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6 text-center">
            <h2
              className={`text-white text-xl font-semibold mb-1 ${piu.className}`}
            >
              Ahnaf Zaman
            </h2>
            <p
              className={`text-white/80 text-sm font-semibold ${piu.className}`}
            >
              Vice President
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[367px] bg-gray-900 rounded-[12px] relative border-1 border-white glow overflow-hidden">
          <Image
            src={"/faculty/sumehra.png"}
            fill
            alt="President"
            className="rounded-[12px] object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6 text-center">
            <h2
              className={`text-white text-xl font-semibold mb-1 ${piu.className}`}
            >
              Sumehra Zafreen
            </h2>
            <p
              className={`text-white/80 text-sm font-semibold ${piu.className}`}
            >
              General Secretary
            </p>
          </div>
        </div>
      </div>
      <h3
        className={`text-[30px] md:text-[38px] ${skiff.className} text-center tracking-tight mb-6 mt-10`}
      >
        Academic & Research Wing
      </h3>
      <div className="mt-2 px-8">
        <Marquee pauseOnHover className="[--duration:20s]">
          <Member
            name="Rashmin Zarah Ahmed"
            designation="Head of Science"
            imageUrl="/faculty/rashmin.jpg"
          />
          <Member
            name="Saadman Muntasir"
            designation="Director of Math"
            imageUrl="/faculty/saadman.png"
          />

          <Member
            name="Odrita Ahmed"
            designation="Head of Academics"
            imageUrl="/faculty/odrita.jpg"
          />
          <Member
            name="Nameera Tasnim"
            designation="Director of Social Science"
            imageUrl="/faculty/nameera.png"
          />
        </Marquee>
        <Marquee pauseOnHover reverse className="[--duration:20s] mt-4">
          <Member
            name="Taneel Ahmed"
            designation="Head of Survey"
            imageUrl="/faculty/taneel.png"
          />
          <Member
            name="Nehla Zohaira Khandoker"
            designation="Director of Tech"
            imageUrl="/faculty/nehla.png"
          />
          <Member
            name="Isaam Wafidur Rahman"
            designation="Research Director"
            imageUrl="/faculty/isaam.png"
          />
        </Marquee>
      </div>
      <h3
        className={`text-[30px] md:text-[38px] ${skiff.className} text-center tracking-tight mb-6 mt-10`}
      >
        Design & Media Team
      </h3>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-6 ">
        <Member
          name="Intisar Arham Ahmed"
          designation="Head Photographer"
          imageUrl="/faculty/intisar.jpg"
        />
        <Member
          name="Khandoker Sayan Ahmed"
          designation="Head of Graphics"
          imageUrl="/faculty/shayan.png"
        />
      </div>
      <h3
        className={`text-[30px] md:text-[38px] ${skiff.className} text-center tracking-tight mb-6 mt-10`}
      >
        Logistics
      </h3>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-6 ">
        <Member
          name="Atef Hassan"
          designation="Treasurer"
          imageUrl="/faculty/atef.jpg"
        />
        <Member
          name="Wasi Chowdhury"
          designation="Admin"
          imageUrl="/faculty/wasi.jpg"
        />
      </div>
    </section>
  );
}
