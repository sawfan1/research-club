"use client";

import { Particles } from "@/components/magicui/particles";
import { Binoculars, Building2 } from "lucide-react";

export function ParticlesDemo() {
  return (
    <div className="bg-gradient-to-b from-black to-blue-800 h-screen w-full relative flex flex-col items-center ">
      <h1 className="text-5xl lg:text-7xl font-serif text-white mt-44">
        About Us
      </h1>
      <p className="text-md lg:text-lg text-white max-w-100 lg:max-w-128 text-center mt-4">
        Our research club empowers high school students to explore scientific
        inquiry, collaborate on innovative projects, and develop critical
        thinking skills.
      </p>
      <div className="flex mt-6 gap-2">
        <button
          type="button"
          className="cursor-pointer py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <Building2 className="inline mr-1" /> Organising Committee
        </button>
        <button
          type="button"
          className="cursor-pointer py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <Binoculars className="inline mr-1"></Binoculars> Vision
        </button>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        vx={0.2}
        color={"#fff"}
        size={2.2}
        refresh
      />
    </div>
  );
}
