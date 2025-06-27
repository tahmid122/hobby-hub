import React, { use, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { getFormData } from "../../utils/GetFormData";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { getImgURL } from "../../utils/getImgURL";
import BackToPrev from "../../BackToPrev/BackToPrev";

const CreateGroup = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [imgPreview, setImgPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    const data = getFormData(e.target);
    data.imageUrl = await getImgURL(data.imageUrl);
    fetch("https://hobby-hub-server-ruby.vercel.app/groups", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You successfully created a new group.",
            icon: "success",
          });
        }
        setIsUploading(false);
        navigate("/dashboard/myGroups");
      });
  };
  return (
    <div className="md:my-5 w-11/12 mx-auto min-h-[75vh] flex items-center justify-center mb-10 md:mb-5">
      <div className="flex min-h-full flex-col justify-center px-6  lg:px-8 w-full lg:w-6/12 mx-auto py-10 rounded shadow-sm shadow-slate-400">
        <BackToPrev />
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            Create a new group
          </h2>
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                    defaultValue={user?.displayName}
                    readOnly
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
                    defaultValue={user?.email}
                    readOnly
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
                    required
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
                    required
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  >
                    <option value="Not Specified" defaultChecked>
                      Select One
                    </option>
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
                    type="text"
                    required
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
                    required
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
                    required
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
                    required
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
                  Image
                </label>
                <div className="mt-2">
                  <input
                    name="imageUrl"
                    type="file"
                    onChange={(e) => {
                      const img = e.target.files[0];
                      const url = URL.createObjectURL(img);
                      setImgPreview(url);
                    }}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  />
                </div>
                {imgPreview && (
                  <img
                    className="h-[200px] w-full mt-5 mx-auto object-cover  rounded"
                    src={imgPreview}
                    alt=""
                  />
                )}
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-secondary w-full">
                {isUploading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Create"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
