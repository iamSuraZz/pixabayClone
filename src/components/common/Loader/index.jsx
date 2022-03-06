import React from "react";
import LottieAnimation from "./LottieAnimation";
import { lottieLoader } from "./LottieAnimation/lottieData";

const Loader = () => {
  return (
    <div>
      <LottieAnimation file={lottieLoader} width="300px" height="300px" />
    </div>
  );
};

export default Loader;
