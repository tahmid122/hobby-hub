import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { formatDateToYYYYMMDD } from "../../utils/FormatDate";
import Title from "../Title/Title";
import GroupCard from "../../pages/AllGroups/GroupCard";
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
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="my-10">
      <Title title={"Featured Groups"} />
      {isLoading ? <LoadingSpinner /> : ""}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups?.map((group) => (
          <GroupCard key={group._id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default Groups;
