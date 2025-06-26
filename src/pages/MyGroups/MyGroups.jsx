import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import GroupRow from "./GroupRow";
import Swal from "sweetalert2";
import { Link } from "react-router";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const MyGroups = () => {
  const { user } = use(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState([]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://m10-assignment10-server.vercel.app/groups/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your group has been deleted.",
                icon: "success",
              });
              const filteredGroup = groups.filter((group) => group._id !== id);
              setGroups(filteredGroup);
            }
          });
      }
    });
  };
  useEffect(() => {
    try {
      setIsLoading(true);
      fetch(
        `https://m10-assignment10-server.vercel.app/user-groups/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setGroups(data));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [user]);
  return (
    <>
      {isLoading ? <LoadingSpinner /> : ""}
      <div className="w-11/12 mx-auto md:pr-5 my-5 min-h-[80vh] overflow-hidden">
        <div>
          {groups.length > 0 ? (
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 dark:border-none dark:shadow-sm dark:shadow-slate-400">
              <table className="table dark:bg-slate-900 dark:text-white">
                {/* head */}
                <thead className="dark:text-white">
                  <tr>
                    <th>Serial</th>
                    <th>Group Photo</th>
                    <th>Group Name</th>
                    <th>Hobby Category</th>
                    <th>Description</th>
                    <th>Meeting Location</th>
                    <th>Max Members</th>
                    <th>Start Date</th>
                    <th>Host</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {groups.map((group, index) => (
                    <GroupRow
                      key={group._id}
                      group={group}
                      index={index}
                      handleDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="space-y-2">
              <h3 className="text-xl font-semibold dark:text-white">
                You haven't create any group yet
              </h3>
              <Link to={"/dashboard/createGroup"} className="btn btn-secondary">
                Create a group
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyGroups;
