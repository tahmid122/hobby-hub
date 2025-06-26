import React, { useEffect } from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import animation from "../../../public/error.json";
import { ChangeTheme } from "../../utils/ThemeChanger";

const Error = () => {
  useEffect(() => {
    ChangeTheme();
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-white flex-col dark:bg-slate-900">
      <div className="md:w-[600px]">
        <Lottie animationData={animation} loop={true} />
      </div>
      <div className="flex items-center justify-center gap-x-6">
        <Link
          to={"/"}
          className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default Error;
