"use client";

import animationData from "./Chemistry Lab.json";
import { useLottie } from "lottie-react";
import { BlurFade } from "./magicui/blur-fade";

const Lotti1 = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <BlurFade className="inline-flex items-center justify-center min-w-[390px] max-w-[600px]">
      {View}
    </BlurFade>
  );
};

export default Lotti1;
