import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";
import { Link } from "react-router";
const GroupRow = ({ group, index, handleDelete }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img
          className="h-14 w-14 object-cover rounded"
          src={group?.imageUrl}
          alt=""
        />
      </td>
      <td>
        {group?.groupName.slice(0, 25)}
        {group?.groupName.length > 25 ? "..." : ""}
      </td>
      <td>{group?.category}</td>
      <td>
        {group?.description.slice(0, 20)}
        <Link className="text-secondary" to={`/group/${group?._id}`}>
          ...more
        </Link>
      </td>

      <td>
        {group?.location.slice(0, 20)}
        {group?.location.length > 20 ? "..." : ""}
      </td>
      <td>
        {group?.maxMembers.slice(0, 3)}
        {group?.maxMembers.length > 3 ? "..." : ""} members
      </td>
      <td>{group?.date}</td>
      <td>{group?.userName}</td>
      <td className="flex items-center gap-3 justify-center">
        <Link
          to={`/updateGroup/${group?._id}`}
          className="p-2 hover:bg-secondary hover:text-white  rounded shadow-sm border border-slate-100 cursor-pointer dark:border-none dark:shadow-sm dark:shadow-slate-300"
          title="Update"
        >
          <FaPenClip size={18} />
        </Link>
        <span
          onClick={() => handleDelete(group?._id)}
          className="p-2  rounded hover:bg-red-500 hover:text-white shadow-sm border border-slate-100 cursor-pointer dark:border-none dark:shadow-sm dark:shadow-slate-300"
          title="Delete"
        >
          <FaTrash size={18} />
        </span>
      </td>
    </tr>
  );
};

export default GroupRow;
