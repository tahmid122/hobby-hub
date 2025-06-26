import React, { useEffect, useState } from "react";
import GroupCard from "./GroupCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { formatDateToYYYYMMDD } from "../../utils/FormatDate";
const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const today = formatDateToYYYYMMDD(new Date());
  useEffect(() => {
    try {
      setIsLoading(true);
      fetch("https://m10-assignment10-server.vercel.app/groups")
        .then((res) => res.json())
        .then((data) => {
          const filterdGroups = data.filter((group) => today <= group.date);
          setGroups(filterdGroups);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [today]);

  return (
    <div className="my-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 dark:text-white">
        Featured Groups
      </h1>
      {isLoading ? <LoadingSpinner /> : ""}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups?.slice(0, 6)?.map((group) => (
          <GroupCard key={group?._id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default Groups;
