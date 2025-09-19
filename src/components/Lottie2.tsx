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
    <div className="inline-flex items-center justify-center min-w-[390px] max-w-[600px]">
      {View}
    </div>
  );
};

export default Lotti2;
