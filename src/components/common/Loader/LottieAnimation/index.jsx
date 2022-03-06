import React from "react";
import Lottie from "react-lottie";

const LottieAnimation = ({ file, width, height }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: file,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};
export default LottieAnimation;
