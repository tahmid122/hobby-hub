import React from "react";
import { Link, useLoaderData } from "react-router";
import GroupCard from "./GroupCard";

const AllGroups = () => {
  const groups = useLoaderData();
  return (
    <div className="w-11/12 mx-auto p-2 my-10 min-h-[80vh]">
      <h1 className="text-4xl font-bold text-center mb-10 dark:text-white">
        All Groups ({groups.length})
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups?.map((group) => (
          <GroupCard key={group._id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
