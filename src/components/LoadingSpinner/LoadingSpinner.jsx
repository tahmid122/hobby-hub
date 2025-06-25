import React from "react";
import { cardio } from "ldrs";
const LoadingSpinner = () => {
  cardio.register();
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-white z-20 flex items-center justify-center dark:bg-slate-900">
      <l-cardio size="100" stroke="4" speed="2" color="#392467"></l-cardio>
    </div>
  );
};

export default LoadingSpinner;
