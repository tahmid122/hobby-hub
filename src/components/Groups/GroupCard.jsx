import React from "react";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router";

const GroupCard = ({ group }) => {
  return (
    <div
      key={group?._id}
      className="flex flex-col md:items-center  gap-6  rounded pr-2 dark:shadow-sm dark:shadow-slate-300 dark:text-white dark:p-2"
    >
      <img
        className="h-[250px] w-full md:h-[210px] object-cover  rounded-lg bg-black"
        src={group?.imageUrl}
        alt=""
      />
      <div className="w-full">
        <div className="space-y-2">
          <small className="font-bold text-base text-slate-600 dark:text-slate-300 block">
            {group?.location.slice(0, 20)}
            {group?.location.length > 20 ? "..." : ""}
          </small>
          <h3 className="text-xl font-bold">
            {group?.groupName.slice(0, 25)}
            {group?.groupName.length > 25 ? "..." : ""}
          </h3>
          <p className="text-sm font-light">
            {group?.description.slice(0, 100)}...
          </p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-sm text-slate-600 dark:text-slate-300 flex items-center gap-1">
            <IoIosPeople size={20} /> {group?.maxMembers.slice(0, 3)}
            {group?.maxMembers.length > 3 ? "..." : ""} members
          </span>
          <Link to={`/group/${group?._id}`} className="btn btn-secondary">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
