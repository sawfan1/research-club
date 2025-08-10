import { BlurFade } from "@/components/magicui/blur-fade";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { TextScroll } from "@/components/ui/text-scroll";
import Vento from "@/components/Vento";
import { Cabin } from "next/font/google";
import { Award, Microscope, Telescope, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import Image from "next/image";

const buggle = Cabin({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute top-20 left-10 w-8 h-8 bg-blue-200/40 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-200/40 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-indigo-200/40 rounded-full animate-ping delay-700"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-800 text-sm font-medium">
                What's new
              </span>
              <span className="text-gray-600 text-sm">
                Featuring submissions
              </span>
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Sunnydale
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-600">
                  Research Club
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Our club is dedicated to research, learning, and sharing
                knowledge on a wide range of topics, from science to technology,
                and beyond.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Button className="bg-blue-700 hover:bg-blue-800">
                Get Started
              </Button>
              <button className="cursor-pointer ml-2 text-gray-700 hover:text-blue-600 font-medium flex items-center space-x-2 group transition-colors duration-200">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative hidden lg:block">
            <div className="bg-gray-200 relative rounded-2xl shadow-xl border border-gray-200 overflow-hidden aspect-[4/3]">
              <Image
                src="/abstract1.jpg"
                alt="Research Club Image"
                fill // Makes the image fill the parent element [^1][^2]
                sizes="100vw" // Important for optimizing srcset when using 'fill' [^1]
                style={{ objectFit: "cover" }} // Controls how the image fits within its container [^1]
                className="shadow-sm z-10" // Applies the shadow from your original image tag
              />
              {/* Overlay for better contrast */}
              <div className="absolute top-0 left-0 w-full h-[100%] bg-gray-200 animate-pulse"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-3xl blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
      <TextScroll
        className="font-display font-semibold text-center text-2xl tracking-tighter  text-black dark:text-white md:text-5xl md:leading-[5rem]"
        text="Sunnydale Research Club is now accepting submissions for the upcoming research conference. Join us in exploring the latest advancements in science and technology!"
        default_velocity={1}
      />

      <Vento />
      <section className="w-full p-10">
        <BlurFade className="w-full h-[500px] bg-amber-300 rounded-2xl p-8 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full">
            {/* Image Column */}
            <div className="flex items-center justify-center">
              <Microscope size={164} />
            </div>

            {/* Text Column */}
            <div className="flex items-center justify-center md:justify-start">
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Get your papers published and find accreditation!
                </h1>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
      <section
        className={`w-full bg-blue-800 py-24 px-8 md:py-32 ${buggle.className}`}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-18 items-center px-20">
            {/* Left side - Visual */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <div className="rounded-full p-16 backdrop-blur-sm">
                  <Telescope className="h-36 w-36 text-white" />
                </div>
                <div className="absolute -top-6 -right-6 bg-yellow-400 rounded-full p-4">
                  <Award className="h-8 w-8 text-blue-800" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-green-400 rounded-full p-4">
                  <Trophy className="h-8 w-8 text-blue-800" />
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mt-12 text-center">
                Why Join?
              </h2>
            </div>

            {/* Right side - Content */}
            <div className="space-y-16">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Users className="h-10 w-10 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Like-Minded Community
                  </h3>

                  <TextAnimate
                    animation="blurIn"
                    className="text-blue-100 text-lg leading-relaxed text-left"
                  >
                    Get to surround yourself with a hive of like minded friends
                    in a world of research.
                  </TextAnimate>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Award className="h-10 w-10 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Expert Mentorship
                  </h3>
                  <TextAnimate
                    animation="blurIn"
                    className="text-blue-100 text-lg leading-relaxed text-left"
                  >
                    Get mentorship from experienced experts in their respective
                    fields.
                  </TextAnimate>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Trophy className="h-10 w-10 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Competition Opportunities
                  </h3>
                  <TextAnimate className="text-blue-100 text-lg leading-relaxed">
                    Get elected for external olympiads and research
                    competitions.
                  </TextAnimate>
                </div>
              </div>

              {/* The button div has been removed from here */}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <BlurFade className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Want <span className="text-blue-700">club</span> news and
                updates?
              </h2>
              <p className="text-xl md:text-2xl">
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
                We care about your data. Read our{" "}
                <Link href="#" className="underline hover:text-gray-800">
                  privacy policy
                </Link>
                .
              </p>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  );
}
