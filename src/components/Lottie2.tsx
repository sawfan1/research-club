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
    <BlurFade className="h-full flex items-center justify-center w-1/2">
      {View}
    </BlurFade>
  );
};

export default Lotti2;
