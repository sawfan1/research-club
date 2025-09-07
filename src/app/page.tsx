import { WordRotate } from "@/components/v3/WordRotate";
import localFont from "next/font/local";
import {
  Readex_Pro,
  Montserrat,
  Anonymous_Pro,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { AnimatedGridPattern } from "@/components/v3/Griddler";
import { cn } from "@/lib/utils";
import { Highlighter } from "@/components/v3/Highlighter";
import Microscope from "@/components/v3/3D1";
import {
  BookOpenCheck,
  Calendar,
  Hand,
  Instagram,
  Mail,
  MapPin,
  MonitorX,
  PencilLine,
  Phone,
  SearchCheck,
} from "lucide-react";
import { SparklesText } from "@/components/v3/SparklesText";
import BackToTopButton from "@/components/v3/BackToTop";
import Issue from "@/components/v3/Issue";
import { DotPattern } from "@/components/v3/Dot";
import Image from "next/image";
import { TextScroll } from "@/components/ui/text-scroll";
import { Hower } from "@/components/v3/Hower";
import Lotti1 from "@/components/Lottie1";
import Lotti2 from "@/components/Lottie2";
import FAQ01 from "@/components/v3/FAQ";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { anon, montserrat, piu, readex_pro, reckless } from "@/lib/ufl";
import Submission from "@/components/v3/sections/Submission";
import Workshops from "@/components/v3/sections/Workshops";

export default function Landing() {
  return (
    <main>
      <BackToTopButton />
      <section className="bg-[radial-gradient(circle_at_center,white_20%,transparent)] border-1 border-b-black h-screen relative flex flex-col justify-center items-center overflow-hidden">
        <AnimatedGridPattern
          numSquares={25}
          maxOpacity={0.4}
          duration={0.9}
          repeatDelay={2.4}
          color="black"
          className={cn("inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 z-[-1]")}
        />

        <div
          className={`rounded-[30px] mb-2 ${readex_pro.className} bg-black text-white h-[30px] w-[240px] flex items-center justify-center text-[12px]`}
        >
          Now accepting submissions
        </div>
        <h1
          className={`text-center text-[50px] md:text-[60px] ${reckless.className} leading-[1.1]`}
        >
          Sunnydale <br /> Research Club
        </h1>
        <div
          className={`text-[16px] mt-2 ${readex_pro.className} flex items-center`}
          suppressHydrationWarning
        >
          <div className="mr-1">Incubating curiousity, harboring </div>{" "}
          <WordRotate
            duration={1500}
            words={["excellence", "dedication", "innovation"]}
          />
        </div>
        <div className="mt-[20px] gap-[10px] flex items-center">
          <button
            className={`${readex_pro.className} border-1 border-black cursor-pointer bg-black p-4 text-white rounded-[10px] w-[148px]`}
          >
            Subscribe
          </button>
          <button
            className={`${readex_pro.className} cursor-pointer bg-white p-4 text-black rounded-[10px] w-[148px] border-black border-1`}
          >
            Learn More
          </button>
        </div>
      </section>
      <section
        className="relative flex min-h-screen border-1 bg-white border-b-black"
        id="about"
      >
        <div className="min-h-screen w-full p-8 flex flex-col items-center xl:block">
          <h1 className={`text-[50px] ${reckless.className}`}>
            <Highlighter action="highlight" color="#fff7bd">
              About Us
            </Highlighter>
          </h1>
          <div className="mt-[20px]">
            <h2
              className={`${readex_pro.className} font-black max-w-[60ch] text-[20px]`}
            >
              <Highlighter action="underline" color="#87CEFA">
                ABSTRACT
              </Highlighter>
            </h2>
            <p className={`${montserrat.className} max-w-[60ch] text-[16px]`}>
              Members explore scientific topics, conduct experiments, and share
              discoveries, fostering a supportive environment for learning and
              personal growth.
            </p>
            <h2
              className={`${readex_pro.className} font-black max-w-[60ch] text-[20px] mt-[20px]`}
            >
              <Highlighter action="underline" color="#87CEFA">
                ASPIRATIONS
              </Highlighter>
            </h2>
            <p className={`${montserrat.className} max-w-[60ch] text-[16px]`}>
              To encourage members to present and publish their findings and to
              build a supportive community that nurtures future innovators and
              leaders in science.
            </p>
            <h2
              className={`${readex_pro.className} font-black max-w-[60ch] text-[20px] mt-[20px]`}
            >
              <Highlighter action="underline" color="#87CEFA">
                EVENTS
              </Highlighter>
            </h2>
            <p className={`${montserrat.className} max-w-[60ch] text-[16px]`}>
              We host a wide variety of events including weekly seminars,
              hands-on workshops, guest lectures from scientists, collaborative
              research projects, and science fairs to showcase member
              achievements.
            </p>
            <h2
              className={`${readex_pro.className} font-black max-w-[60ch] text-[20px] mt-[20px]`}
            >
              <Highlighter action="underline" color="#87CEFA">
                SPECIALITY
              </Highlighter>
            </h2>
            <p className={`${montserrat.className} max-w-[60ch] text-[16px]`}>
              Our club is the first of its kind in South Asia, paving the way
              forward for future generations to bask in the light of research.
            </p>
          </div>
        </div>
        <div className="h-screen w-full p-8 hidden xl:block">
          <div className="relative h-full w-full  rounded-3xl cursor-grab bg-center bg-fixed bg-[url('/matrix.png')] outline-1 outline-black">
            <Hand className="absolute text-black inset-[20px]" size={30} />
            <Microscope />
          </div>
        </div>
      </section>
      <section
        className="relative border-1 min-h-screen border-b-black w-full flex flex-col items-center"
        id="issues"
      >
        <Image
          src={"/boostract.png"}
          width={300}
          height={200}
          alt=""
          className="absolute left-[-80px] top-[-70px] z-[-1]"
          style={{ animation: "float-subtle 3s ease-in-out infinite" }}
        />
        <DotPattern className="z-[-2]" />
        <h1 className={`text-[50px] ${reckless.className} mt-4`}>
          <SparklesText className="font-light">Issues</SparklesText>
        </h1>
        <p className={`${readex_pro.className} mt-[6px] text-[14px]`}>
          Issues are rolled out every{" "}
          <Highlighter action="underline" color="#2832eb">
            month
          </Highlighter>
          , usually the first Sunday. Don't miss out!
        </p>
        <div className="mt-6 flex gap-[20px]">
          <Issue
            date="September, 2025"
            title="HYPERBOLIC TIME DILATION"
            numberOfAuthors={95}
            numberOfPapers={65}
            backgroundImageUrl="/issues/space.png"
            paddle="#FFD4C2"
          />
          <Issue
            date="October, 2025"
            title="BIOGENETICS & CRISPR7"
            numberOfAuthors={141}
            numberOfPapers={78}
            backgroundImageUrl="/issues/dna.png"
            paddle="#D3FFDC"
          />
          <Issue
            date="November, 2025"
            title="PARTICLE DUALITY"
            numberOfAuthors={95}
            numberOfPapers={65}
            backgroundImageUrl="/issues/code.png"
            paddle="#C2E1FF"
          />
        </div>
        <Hower>See All Past Issues</Hower>
      </section>
      <section
        className="relative flex min-h-screen border-1 bg-[#A2D8FF] border-b-black p-[20px]"
        id="peer"
      >
        <div className="outline-black outline-1 rounded-[20px] bg-white w-full flex overflow-x-hidden">
          <div className="w-full flex flex-col border-r border-black items-center">
            <Image
              src="/checker.png"
              width={447}
              height={225}
              alt=""
              className="mt-[40px]"
            />
            <div className="w-full pl-[80px] h-full">
              <h2
                className={`text-[50px] ${reckless.className} flex items-center gap-3`}
              >
                <PencilLine size={40} className="translate-y-1" />
                Peer Review
              </h2>
              <p
                className={`text-[22px] ${readex_pro.className} antialiased font-regular leading-10`}
              >
                We offer one (1x){" "}
                <span className="mx-1 bg-[#AAB9FF] px-4 h-[28px] inline-flex items-center outline-1 outline-black rounded-[30px] text-[16px]">
                  FREE
                </span>
                <span className="mx-1 bg-[#FFE0C5] px-4 h-[28px] inline-flex items-center outline-1 outline-black rounded-[30px] text-[16px]">
                  STANDARD
                </span>
                <span className="mx-1 bg-[#5EFFDA] px-4 h-[28px] inline-flex items-center outline-1 outline-black rounded-[30px] text-[16px]">
                  20 PAGE
                </span>
                <br></br>peer review devoid of charge.
              </p>

              <button
                className={`${readex_pro.className} mt-8 border-1 border-black cursor-pointer bg-black p-4 text-white rounded-[10px] w-[148px]`}
              >
                Avail Now!
              </button>
              <p className={`${anon.className} mt-4`}>
                <u>Terms and conditions</u> apply, of course!
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center p-8 gap-[25px] dashed-bg">
            <div className="outline-1 outline-black bg-white rounded-[20px] p-8 w-full">
              <h3
                className={`text-[35px] ${reckless.className} mb-4 text-center`}
              >
                Review Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#A2D8FF] outline-1 outline-black rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <span className={`${readex_pro.className} text-[16px] ml-2`}>
                    Submit your research paper
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#ffd7a2] outline-1 outline-black rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <span className={`${readex_pro.className} text-[16px] ml-2`}>
                    Expert reviewers assess quality, format and citations
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#ffa5a2] outline-1 outline-black rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <span className={`${readex_pro.className} text-[16px] ml-2`}>
                    Receive detailed feedback, suggestions and corrections
                  </span>
                </div>
              </div>
            </div>

            <div className="outline-1 bg-white outline-black rounded-[20px] p-8 w-full relative overflow-hidden">
              <Image
                src={"/anchorr.png"}
                width={250}
                height={240}
                alt=""
                className="absolute right-[-55px] top-[-150px] z-1"
              />
              <h3
                className={`text-[35px] ${reckless.className} mb-4 text-center z-2`}
              >
                Benefits
              </h3>
              <div className="space-y-4 z-2">
                <div className="flex items-center gap-3">
                  <div
                    className={`bg-black text-white w-8 h-8 outline-1 outline-black rounded-full flex items-center justify-center text-sm ${anon.className} `}
                  >
                    I
                  </div>
                  <span className={`${readex_pro.className} text-[16px] ml-2`}>
                    Papers checked within 7-10 days
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`bg-black text-white w-8 h-8 outline-1 outline-black rounded-full flex items-center justify-center text-sm ${anon.className} `}
                  >
                    II
                  </div>
                  <span className={`${readex_pro.className} text-[16px] ml-2`}>
                    Assess your skills and get a competitive edge
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`bg-black text-white w-8 h-8 outline-1 outline-black rounded-full flex items-center justify-center text-sm ${anon.className} `}
                  >
                    III
                  </div>
                  <span className={`${readex_pro.className} text-[16px] ml-2`}>
                    Avoid mistakes before publication
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TextScroll
        text="  EVENTS  "
        className={`${readex_pro.className} text-[70px] font-bold border-b border-black`}
      />
      <section
        id="events"
        className="relative border-1 border-b-black w-full barbed"
      >
        <div className="w-full flex items-center justify-around p-8">
          <div className="w-[450px] h-[450px] bg-black flex flex-col items-center justify-baseline p-1">
            <div className="w-full h-5/10 bg-gray-200 "></div>
            <div className="w-full p-4">
              <h2
                className={`text-[24px] ${readex_pro.className} text-white tracking-[1%]`}
              >
                SUNNYDALE RESEARCH FEST
              </h2>
              <div
                className={`w-full text-white relative ${readex_pro.className}`}
              >
                <p className="inline-flex items-center gap-2 mt-1">
                  <Calendar className="inline" size={18} /> 15th September 2025{" "}
                  <br />
                </p>
                <p className="my-1">
                  Sunnydale Bashundhara Campus, 9:00AM to 6:00PM
                </p>
                <p className="absolute right-2 top-1">Offline</p>
              </div>
            </div>
            <div className="flex gap-2 justify-baseline items-end w-full px-4 mt-8">
              <button
                className={`cursor-pointer w-[150px] h-[46px] bg-[#D9D9D9] ${readex_pro.className}`}
              >
                More Details
              </button>
              <button
                className={`cursor-pointer w-[150px] h-[46px] bg-[#AAB9FF] ${readex_pro.className}`}
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </section>
      <Submission />
      <Workshops />
      <section className="relative min-h-100 border-1 border-b-black p-8 flex flex-col">
        <h2 className={`${piu.className} text-[30px] font-black tracking-wide`}>
          RUNNING NOW
        </h2>
        <div className="min-h-70 flex mt-4 gap-6"></div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-black border-1 border-b-black">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <BlurFade className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Want <span className="text-blue-700">club</span> news and
                updates?
              </h2>
              <p className={`text-xl md:text-2xl ${readex_pro.className}`}>
                Sign up for our{" "}
                <span className="text-blue-700">newsletter</span>.
              </p>
            </BlurFade>
            <BlurFade className="w-full max-w-md space-y-4">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 bg-gray-100 border-gray-300 text-black placeholder:text-gray-500 focus:ring-black"
                />
                <Button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 ml-2 text-white"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-gray-600">
                We care about your data. Read our <u>privacy policy</u>.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>
      <section className="bg-[#1e1e1e] text-white relative flex justify-center items-center min-h-screen border-1 border-b-black">
        <FAQ01 />
      </section>

      <section
        className={`bg-background p-8 py-12 border-1 border-b-black ${readex_pro.className} boxes`}
      >
        <div className="max-w-6xl mx-auto">
          <h1
            className={`mx-auto text-[50px] max-w-lg text-center bg-white outline-1 outline-black mb-6 text-balance ${reckless.className}`}
          >
            Contact Us
          </h1>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <Card className="p-6 hover:shadow-lg transition-shadow outline-black outline-1 rounded-none">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      Email
                    </h3>
                    <p className="text-foreground font-medium">
                      sdresearchclub@gmail.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow outline-black outline-1 rounded-none">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      Instagram
                    </h3>
                    <p className="text-foreground font-medium">
                      @sdresearchclub
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow outline-black outline-1 rounded-none">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      Phone
                    </h3>
                    <p className="text-foreground font-medium">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow outline-black outline-1 rounded-none">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      Address
                    </h3>
                    <p className="text-foreground font-medium text-sm">
                      Sunnydale Bashundhara, Dhaka
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
