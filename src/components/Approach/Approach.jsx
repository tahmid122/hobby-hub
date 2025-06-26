import React from "react";
import { FaArrowRight } from "react-icons/fa";
import group from "/images/group.svg";
const Approach = () => {
  return (
    <div className="my-10 rounded shadow min-h-[250px] p-4 md:p-10 bg-white dark:text-white dark:bg-slate-900 dark:shadow-slate-400 flex flex-col-reverse md:flex-row">
      <div>
        <h3 className="text-3xl font-bold mb-5">
          Turn your passion into a community
        </h3>
        <p className="text-base mb-5 md:w-2/4">
          Start your own Meetup group and create events that inspire, connect,
          and grow your community. Whether it’s a hobby, a cause, or a
          professional network, you have the power to make it happen.
        </p>
        <button className="btn btn-secondary">
          Create your group <FaArrowRight />
        </button>
      </div>
      <img className="w-[250px] mx-auto" src={group} alt="" />
    </div>
  );
};

export default Approach;
