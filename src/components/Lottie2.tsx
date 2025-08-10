"use client";

import animationData from "./Analytics Chart.json";
import { useLottie } from "lottie-react";
import { BlurFade } from "./magicui/blur-fade";

const Lotti2 = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <BlurFade className="w-128 absolute top-[100px] left-[70%] hidden md:block">
      {View}
    </BlurFade>
  );
};

export default Lotti2;
