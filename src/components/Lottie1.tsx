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
    <BlurFade className="w-128 absolute top-[100px] right-[70%] hidden md:block">
      {View}
    </BlurFade>
  );
};

export default Lotti1;
