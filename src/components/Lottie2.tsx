"use client";

import animationData from "./Analytics Chart.json";
import { useLottie } from "lottie-react";

const Lotti2 = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <div className="min-w-60 max-w-128 absolute top-[100px] left-[69%] hidden md:block">
      {View}
    </div>
  );
};

export default Lotti2;
