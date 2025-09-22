"use client";

import Image from "next/image";
import { piu } from "@/lib/ufl";

interface MemberProps {
  name: string;
  designation: string;
  imageUrl: string;
}

export default function Member({ name, designation, imageUrl }: MemberProps) {
  return (
    <div className="h-[400px] w-[400px] bg-gray-900 rounded-lg overflow-hidden border-1 border-white">
      <div className="bg-gray-900 h-4/5 w-[full] relative border-b border-white border-1">
        <Image src={imageUrl} fill alt=" " className="object-cover" />
      </div>
      <h2
        className={`text-white text-center text-xl font-semibold mt-2 mb-1 ${piu.className}`}
      >
        {name}
      </h2>
      <p
        className={`text-center text-white/80 text-sm font-semibold ${piu.className}`}
      >
        {designation}
      </p>
    </div>
  );
}
