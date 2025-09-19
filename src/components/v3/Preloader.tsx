"use client";

import { TextAnimate } from "../magicui/text-animate";
import { montserrat } from "@/lib/ufl";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideOut(true);
      setTimeout(() => setVisible(false), 600); // slide out duration
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 w-screen h-screen flex items-center justify-center bg-black text-white z-[9999] transition-transform duration-700 ${
        slideOut ? "translate-y-[-100vh]" : ""
      }`}
    >
      <TextAnimate
        animation="slideUp"
        duration={2.8}
        className={`text-2xl ${montserrat.className} leading-tight`}
      >
        Propose, Prove, Publish
      </TextAnimate>
    </div>
  );
}
