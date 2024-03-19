import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Assests/animations/load.gif";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <img src={animationData} width={100} height={100} />
    </div>
  );
};

export default Loader;
