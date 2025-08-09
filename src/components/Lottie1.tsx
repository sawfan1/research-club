"use client";

import animationData from "./Chemistry Lab.json";
import { useLottie } from "lottie-react";

const Lotti1 = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <div className="w-128 absolute top-[100px] right-[70%] hidden md:block">
      {View}
    </div>
  );
};

export default Lotti1;
