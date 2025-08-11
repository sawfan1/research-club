"use client";

import animationData from "./error 404.json";
import { useLottie } from "lottie-react";
import { BlurFade } from "./magicui/blur-fade";

const Lotti3 = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return <BlurFade className="w-64">{View}</BlurFade>;
};

export default Lotti3;
