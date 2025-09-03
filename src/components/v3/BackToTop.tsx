"use client";

import { useState, useEffect } from "react";
import { Space_Grotesk } from "next/font/google";
import { ChevronUp } from "lucide-react";

const space = Space_Grotesk({
  subsets: ["latin"],
});

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`${space.className} fixed px-5 cursor-pointer bottom-4 right-4 bg-black text-white p-3 rounded-full text-[14px] shadow-lg transition-all duration-300 hover:shadow-xl z-50`}
          aria-label="back to top"
        >
          <ChevronUp className="inline mr-1" size={14} /> back to top
        </button>
      )}
    </>
  );
}
