import React, { useRef, useState } from "react";
import { Link, useLoaderData } from "react-router";
import GroupCard from "./GroupCard";

const AllGroups = () => {
  const groupsData = useLoaderData();
  const [groups, setGroups] = useState(groupsData || []);
  const [isFiltered, setIsFiltered] = useState(false);
  const orderSelectRef = useRef();
  const catSelectRef = useRef();
  const memSelectRef = useRef();
  console.log(groups);
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      setGroups(groupsData);
    } else {
      const data = groupsData.filter((group) => {
        return group.groupName.toLowerCase().includes(value);
      });
      setGroups(data);
    }
  };
  const handleFilter = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setIsFiltered(true);
    if (fieldName === "order") {
      if (fieldValue === "descending") {
        const sortingData = [...groups].sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });

        setGroups(sortingData);
      } else {
        const sortingData = [...groups].sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA - dateB;
        });
        setGroups(sortingData);
      }
    } else if (fieldName === "category") {
      console.log("f cat", fieldValue);
      if (fieldValue === "default") {
        setGroups(groupsData);
      } else {
        const filteredData = groupsData.filter(
          (group) => group.category === fieldValue
        );
        setGroups(filteredData);
      }
    } else {
      console.log("F mem", fieldValue);
      if (fieldValue === "minToMax") {
        const sortingData = [...groups].sort((a, b) => {
          const memA = parseInt(a.maxMembers);
          const memB = parseInt(b.maxMembers);
          return memA - memB;
        });
        setGroups(sortingData);
      } else {
        const sortingData = [...groups].sort((a, b) => {
          const memA = parseInt(a.maxMembers);
          const memB = parseInt(b.maxMembers);
          return memB - memA;
        });
        setGroups(sortingData);
      }
    }
  };
  return (
    <>
      <div className="w-11/12 mx-auto p-2 my-10 min-h-[80vh]">
        <div className="flex md:flex-row flex-col gap-5 items-center justify-between mb-10">
          <h1 className="text-3xl md:text-4xl font-bold dark:text-white">
            All Groups ({groups.length})
          </h1>
          <div className="flex items-center gap-2">
            <input
              onChange={handleSearch}
              className="border border-slate-300 rounded input outline-none text-sm focus:outline-none"
              type="search"
              placeholder="Search by name..."
            />
            <div>
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-secondary"
              >
                Filter
              </label>
              <div className="drawer drawer-end z-50">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>

                  <div className="menu bg-white text-base-content min-h-full w-80 p-4 space-y-5 dark:bg-slate-900 dark:text-white">
                    {/* Sidebar content here */}
                    <div className="flex items-center justify-between mb-5">
                      <h3 className="text-3xl font-bold ">Filter by</h3>
                      {isFiltered && (
                        <button
                          onClick={() => {
                            setIsFiltered(false);
                            setGroups(groupsData);
                            orderSelectRef.current.value = "";
                            catSelectRef.current.value = "";
                            memSelectRef.current.value = "";
                          }}
                          className="btn bg-red-500 text-white shadow-none border-none"
                        >
                          Reset
                        </button>
                      )}
                    </div>
                    <div className="w-full flex items-center justify-between gap-4">
                      <span className="text-xl font-semibold">Order:</span>
                      <select
                        onChange={handleFilter}
                        name="order"
                        ref={orderSelectRef}
                        className="p-2 border border-slate-300 rounded w-full outline-none dark:text-white dark:bg-slate-900"
                      >
                        <option value="" hidden></option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                      </select>
                    </div>
                    <div className="w-full flex items-center justify-between gap-4">
                      <span className="text-xl font-semibold">Category:</span>
                      <select
                        onChange={handleFilter}
                        ref={catSelectRef}
                        name="category"
                        className="p-2 border border-slate-300 rounded w-full outline-none dark:text-white dark:bg-slate-900"
                      >
                        {" "}
                        <option value="" hidden></option>
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
                    <div className="w-full flex items-center justify-between gap-4 dark:text-white dark:bg-slate-900">
                      <span className="text-xl font-semibold">Members:</span>
                      <select
                        onChange={handleFilter}
                        ref={memSelectRef}
                        name="members"
                        className="p-2 border border-slate-300 rounded w-full outline-none dark:text-white dark:bg-slate-900"
                      >
                        {" "}
                        <option value="" hidden></option>
                        <option value="minToMax">Min to Max</option>
                        <option value="maxToMin">Max to Min</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups?.map((group) => (
            <GroupCard key={group._id} group={group} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllGroups;
