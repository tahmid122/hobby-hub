import React, { useEffect, useState } from "react";
import { FaExclamation, FaUser } from "react-icons/fa";
import { FaLocationDot, FaUserGroup } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdCategory, MdEmail } from "react-icons/md";
import { Link, useLoaderData } from "react-router";
import { formatDateToYYYYMMDD } from "../../utils/FormatDate";
import toast from "react-hot-toast";
import BackToPrev from "../../BackToPrev/BackToPrev";

const GroupDetails = () => {
  const [today, setToday] = useState("");
  const [join, setJoin] = useState(false);
  const group = useLoaderData();
  useEffect(() => {
    const date = new Date();
    const formatedDate = formatDateToYYYYMMDD(date);
    setToday(formatedDate);
  }, []);
  return (
    <div className="w-11/12 mx-auto p-2">
      <span className="mb-1 block">
        <BackToPrev />
      </span>
      <img
        className="w-full h-[250px] md:h-[400px] object-cover rounded bg-black"
        src={group?.imageUrl}
        alt=""
      />
      <div className="my-5">
        <div>
          <small className="font-bold text-xl text-secondary dark:text-slate-300">
            Start Date: {group?.date}
          </small>
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
            {group?.groupName}
          </h2>
        </div>
        {/* name of each tab group should be unique */}
        <div className="flex lg:flex-row flex-col-reverse items-start gap-6 justify-between mt-5">
          <div className="tabs tabs-border w-full dark:text-white">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab font-bold text-secondary dark:text-white"
              aria-label="About"
              defaultChecked
            />
            <div className="tab-content border-slate-200 rounded md:px-10 px-5 pb-10 pt-5">
              <div className="mt-5 about">
                <div className="space-y-3">
                  <h3 className="font-bold text-2xl">Details</h3>
                  <div className="space-y-2">
                    <span className="flex items-center  gap-2 md:text-base text-sm">
                      <IoIosPeople size={25} />
                      <span>
                        <span className="font-semibold">Max Member's:</span>{" "}
                        {group?.maxMembers}
                      </span>
                    </span>
                    <span className="flex items-center  gap-2 md:text-base text-sm">
                      <MdCategory size={20} />
                      <span>
                        <span className="font-semibold">Hobby Category: </span>
                        {group?.category}
                      </span>
                    </span>
                    <span className="flex items-center  gap-2 md:text-base text-sm">
                      <FaLocationDot size={20} />
                      <span>
                        <span className="font-semibold">
                          Meeting Location:{" "}
                        </span>
                        {group?.location}
                      </span>
                    </span>
                    <span className="flex items-center  gap-2 md:text-base text-sm">
                      <FaUser size={20} />
                      <span>
                        <span className="font-semibold">Event By:</span>{" "}
                        {group?.userName}
                      </span>
                    </span>
                    <span className="flex items-center  gap-2 md:text-base text-sm">
                      <MdEmail size={20} />
                      <span>
                        <span className="font-semibold">Contact: </span>
                        <a href={`mailto:${group?.email}`}>{group?.email}</a>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="font-bold text-2xl mb-3">What we’re about</h3>
                  <p className="text-sm md:text-base">{group?.description}</p>
                </div>
              </div>
            </div>
            <input
              type="radio"
              name="my_tabs_2"
              className="tab font-bold text-secondary dark:text-white"
              aria-label="Discussion"
            />
            <div className="tab-content border-slate-200 rounded md:px-10 px-5 pb-10 pt-5">
              <div className="discussion mt-5 w-full lg:w-6/12">
                <h3 className="font-bold text-2xl mb-3">Discussions</h3>
                <div className="space-y-6">
                  <div className="card">
                    <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://i.ibb.co/LDj6W9FJ/download.webp"
                        alt=""
                      />
                      <div>
                        <div className="space-y-0 flex  items-center  gap-2">
                          <span className="font-bold">Genelia D'souza</span>

                          <span className="font-bold text-xs text-gray-500">
                            2 days ago
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-normal">
                            This is really good. I am very excited.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
                      <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://i.ibb.co/RVhCrpk/download-1.webp"
                        alt=""
                      />
                      <div>
                        <div className="space-y-0 flex  items-center  gap-2">
                          <span className="font-bold">Nora Fatehi</span>

                          <span className="font-bold text-xs text-gray-500">
                            6 days ago
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-normal">
                            This event is incredible. I will sure join. People
                            should join to this type of events. I will invite my
                            some of friends to attend this event.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[300px] text-center">
            {today > group?.date ? (
              <span className="text-base text-center text-red-500 font-bold flex items-center justify-center">
                <FaExclamation /> Group Is No Longer Active
              </span>
            ) : (
              <>
                {join ? (
                  <button
                    onClick={() => {
                      toast.success("Leaved");
                      setJoin(false);
                    }}
                    className="btn bg-red-500 text-white"
                  >
                    <FaUserGroup />
                    Leave Group
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      toast.success("Joined");
                      setJoin(true);
                    }}
                    className="btn btn-secondary"
                  >
                    <FaUserGroup />
                    Join Group
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
