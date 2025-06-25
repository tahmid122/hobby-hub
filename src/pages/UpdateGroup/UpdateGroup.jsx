import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { getFormData } from "../../utils/GetFormData";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const UpdateGroup = () => {
  const groupDetails = useLoaderData();
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = getFormData(form);
    fetch(
      `https://m10-assignment10-server.vercel.app/groups/${groupDetails?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Your group information is updated successfully!");
          navigate("/myGroups");
        } else {
          toast.error("You haven't updated anything");
        }
      });
  };
  return (
    <div className="my-5 w-11/12 mx-auto min-h-[75vh] flex items-center justify-center">
      <div className="flex min-h-full flex-col justify-center px-6  lg:px-8 w-full lg:w-6/12 mx-auto py-10 rounded shadow-sm shadow-slate-400">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            Update your existing group
          </h2>
        </div>

        <div className="mt-10">
          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full grow ">
                <label
                  htmlFor="userName"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  User Name
                </label>
                <div className="mt-2">
                  <input
                    name="userName"
                    type="text"
                    readOnly
                    defaultValue={groupDetails?.userName}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="w-full grow">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    name="email"
                    type="email"
                    readOnly
                    defaultValue={groupDetails?.email}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full grow ">
                <label
                  htmlFor="groupName"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Group Name
                </label>
                <div className="mt-2">
                  <input
                    name="groupName"
                    type="text"
                    defaultValue={groupDetails?.groupName}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="w-full grow">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Hobby Category
                </label>
                <div className="mt-2">
                  <select
                    name="category"
                    defaultValue={groupDetails?.category}
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  >
                    <option value="Not Specified">Select One</option>
                    <option value="Drawing & Painting">
                      Drawing & Painting
                    </option>
                    <option value="Photography">Photography</option>
                    <option value="Video Gaming">Video Gaming</option>
                    <option value="Fishing">Fishing</option>
                    <option value="Running">Running</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Reading">Reading</option>
                    <option value="Writing">Writing</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full grow ">
                <label
                  htmlFor="description"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    name="description"
                    defaultValue={groupDetails?.description}
                    type="text"
                    className="min-h-40 resize-none block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full grow ">
                <label
                  htmlFor="location"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Meeting Location
                </label>
                <div className="mt-2">
                  <input
                    name="location"
                    type="text"
                    defaultValue={groupDetails?.location}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full grow ">
                <label
                  htmlFor="maxMembers"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Max Members
                </label>
                <div className="mt-2">
                  <input
                    name="maxMembers"
                    type="number"
                    defaultValue={groupDetails?.maxMembers}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="w-full grow">
                <label
                  htmlFor="date"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Start Date
                </label>
                <div className="mt-2">
                  <input
                    name="date"
                    type="date"
                    defaultValue={groupDetails?.date}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full grow ">
                <label
                  htmlFor="imageUrl"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Image URL
                </label>
                <div className="mt-2">
                  <input
                    name="imageUrl"
                    type="text"
                    defaultValue={groupDetails?.imageUrl}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-secondary w-full">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateGroup;
