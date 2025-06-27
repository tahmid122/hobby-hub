import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router";

const BackToPrev = () => {
  return (
    <Link
      to={-1}
      className="items-center gap-1 font-semibold hover:text-orange-600 text-secondary inline-flex dark:text-white"
    >
      <FaLongArrowAltLeft size={30} />
      Back
    </Link>
  );
};

export default BackToPrev;
