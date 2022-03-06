import React from "react";
import LottieAnimation from "../LottieAnimation";
import { lottieNotFound } from "../LottieAnimation/lottieData";

const EmptyListComp = () => {
  return (
    <div>
      <LottieAnimation file={lottieNotFound} width="200px" height="200px" />
    </div>
  );
};

export default EmptyListComp;
