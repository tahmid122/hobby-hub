import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import GroupCard from "../AllGroups/GroupCard";
import { IoIosPeople } from "react-icons/io";

const Category = () => {
  const categories = useLoaderData();
  const [category, setCategory] = useState(null);
  const { cat } = useParams();
  useEffect(() => {
    const filteredData = categories.filter((cate) => cate.category == cat); //its not
    setCategory(filteredData);
  }, [categories, cat]);
  return (
    <div className="w-11/12 mx-auto p-2 my-10 min-h-[80vh]">
      {category?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {category?.map((group) => (
            <div
              key={group?._id}
              className="flex flex-col md:items-center  gap-6  rounded pr-2 dark:shadow-sm dark:shadow-slate-400 dark:text-white dark:p-2"
            >
              <img
                className="h-[250px] w-full md:h-[210px] object-cover  rounded-lg bg-black"
                src={group?.imageUrl}
                alt=""
              />
              <div className=" w-full">
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
                  <Link
                    to={`/group/${group?._id}`}
                    className="btn btn-secondary"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center flex-col justify-center h-[80vh]">
          <h1 className="text-3xl font-semibold mb-5">No Data Found</h1>
          <Link to={"/"} className="btn btn-secondary">
            Go Back To Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Category;
