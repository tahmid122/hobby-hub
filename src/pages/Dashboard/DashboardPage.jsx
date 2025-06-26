import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useLoaderData } from "react-router";
import { FiLayers, FiPlusCircle, FiUsers, FiCalendar } from "react-icons/fi";
import Profile from "./Profile/Profile";
import Recharts from "./Recharts/Recharts";

const DashboardPage = () => {
  const { user } = use(AuthContext);
  const groupsData = useLoaderData();
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    try {
      // setIsLoading(true);
      fetch(
        `https://m10-assignment10-server.vercel.app/user-groups/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setGroups(data));
    } catch (error) {
      console.log(error);
    } finally {
      // setIsLoading(false);
    }
  }, [user]);
  const cardData = [
    {
      title: "All Groups",
      value: groupsData.length,
      icon: <FiLayers className="text-3xl text-blue-500" />,
      bg: "bg-blue-100",
    },
    {
      title: "My Created Groups",
      value: groups.length,
      icon: <FiPlusCircle className="text-3xl text-green-500" />,
      bg: "bg-green-100",
    },
    {
      title: "Joined Groups",
      value: "00",
      icon: <FiUsers className="text-3xl text-purple-500" />,
      bg: "bg-purple-100",
    },
    {
      title: "Upcoming Meetups",
      value: "00",
      icon: <FiCalendar className="text-3xl text-orange-500" />,
      bg: "bg-orange-100",
    },
  ];
  return (
    <div className="md:my-5 mb-5 px-5 dark:bg-slate-900">
      <div className="w-full mx-auto space-y-10 flex gap-4 md:flex-row-reverse flex-col-reverse">
        <div className="grow md:flex-1/2 flex-1">
          <Profile user={user} />
        </div>
        <div className="space-y-10">
          <div className="rounded shadow-md p-4 md:p-10 space-y-5 dark:text-white dark:shadow dark:shadow-slate-500">
            <h3 className="text-3xl font-bold dark">
              Welcome {user.displayName} 🎉
            </h3>
            <p>
              Start your own Meetup group and create events that inspire,
              connect, and grow your community. Whether it’s a hobby, a cause,
              or a professional network, you have the power to make it happen.
            </p>
            <Link to={"/dashboard/createGroup"}>
              <button className="btn btn-secondary">Crate a group</button>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  gap-4 md:gap-6 mb-10">
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl shadow-md flex items-center justify-between ${card.bg}`}
              >
                <div>
                  <h3 className="text-sm text-gray-600 font-medium">
                    {card.title}
                  </h3>
                  <p className="text-2xl font-bold">{card.value}</p>
                </div>
                <div>{card.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Recharts />
    </div>
  );
};

export default DashboardPage;
