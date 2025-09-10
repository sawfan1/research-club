"use client";

import { Red_Hat_Display } from "next/font/google";
import { ChevronRight, Menu, User, X } from "lucide-react";

import localFont from "next/font/local";
import { useState, useEffect } from "react";
import Navutton from "./Navutton";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const saans_tria = localFont({
  src: [
    {
      path: "../../../public/fonts/SaansTRIAL-Regular.ttf",
      style: "normal",
    },
    {
      path: "../../../public/fonts/SaansTRIAL-Medium.ttf",
      style: "medium",
    },
    {
      path: "../../../public/fonts/SaansTRIAL-SemiBold.ttf",
      style: "semibold",
    },
  ],
});

const navigationLinks = [
  { href: "#about", label: "About Us" },
  { href: "#issues", label: "Issues" },
  { href: "#peer", label: "Peer Review" },
  { href: "#events", label: "Events" },
  { href: "#submission", label: "Submission" },
  { href: "#workshops", label: "Workshops" },
  { href: "#faculty", label: "Faculty" },
];

const red_hat = Red_Hat_Display({
  subsets: ["latin"],
});

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [opi, setOpi] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setVisible(false); // Hide on scroll down
      } else if (window.scrollY < lastScrollY) {
        setVisible(true); // Show on scroll up
      }
      lastScrollY = window.scrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 80) setVisible(true); // Show when mouse near top
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <nav
      className={`transition-transform duration-300 fixed w-full z-100 top-0 bg-white border-b-1 border-black h-[60px] flex items-center justify-center px-[40px] ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="h-full absolute left-[40px] flex items-center text-[18px] gap-[10px]">
        <svg
          width="26"
          height="26"
          viewBox="0 0 36 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 15V31H5C5.52527 31 6.04541 31.1035 6.53076 31.3045C7.01599 31.5055 7.45703 31.8001 7.82837 32.1716C8.19983 32.543 8.49451 32.984 8.69556 33.4693C8.89648 33.9546 9 34.4747 9 35V40H21L36 25V9H31C30.4747 9 29.9546 8.89655 29.4692 8.69553C28.984 8.49451 28.543 8.19986 28.1716 7.82843C27.8002 7.457 27.5055 7.01602 27.3044 6.53073C27.1035 6.04544 27 5.5253 27 5V0H15L0 15ZM17 30H10V19L19 10H26V21L17 30Z"
            fill="#000"
          ></path>
        </svg>
        <h1 className={`${red_hat.className} font-black text-[18px]`}>
          SD RESEARCH CLUB
        </h1>
      </div>
      <div
        className={`gap-[5px] h-full items-center justify-center ${saans_tria.className} hidden xl:flex`}
      >
        <Navutton text="About Us" href="#about" />
        <Navutton text="Issues" href="#issues" />
        <Navutton text="Peer Review" href="#peer" />
        <Navutton text="Events" href="#events" />
        <Navutton text="Submission" href="#submission" />
        <Navutton text="Workshops" href="#workshops" />
        <Navutton text="Faculty" href="#faculty" />
      </div>
      <div className="absolute right-[40px] flex items-center gap-2">
        <Popover open={opi} onOpenChange={setOpi}>
          <PopoverTrigger asChild>
            <button className="h-[34px] px-3 rounded-lg hover:bg-gray-200 block lg:hidden">
              <Menu size={18} className="text-black" />
            </button>
          </PopoverTrigger>
          <PopoverContent align="center" className="w-36 p-1 z-[100]">
            <NavigationMenu className="max-w-none *:w-full">
              <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index} className="w-full">
                    <NavigationMenuLink
                      href={link.href}
                      className="py-1.5"
                      onClick={() => setOpi(false)}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </PopoverContent>
        </Popover>

        <button
          className={`hidden md:flex text-[14px] px-4 font-semibold justify-center rounded-full items-center cursor-pointer ${saans_tria.className} bg-[#0800FF] h-[34px] text-white`}
        >
          Subscribe <ChevronRight className="inline" size={14} />
        </button>
      </div>
    </nav>
  );
}
