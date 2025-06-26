import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Recharts = () => {
  const participationData = [
    { month: "Jan", created: 1, joined: 2 },
    { month: "Feb", created: 0, joined: 3 },
    { month: "Mar", created: 2, joined: 1 },
    { month: "Apr", created: 2, joined: 0 },
    { month: "May", created: 2, joined: 6 },
    { month: "Jun", created: 2, joined: 3 },
    { month: "Jul", created: 2, joined: 7 },
    // ...
  ];

  return (
    <div>
      <div className="col-span-2 bg-white p-4 md:p-6 rounded shadow-sm w-full dark:bg-slate-900 dark:shadow dark:shadow-slate-400">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">
          Participation Overview
        </h3>
        {/* Chart component goes here */}

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={participationData}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="month" />
            {/* <YAxis allowDecimals={false} /> */}
            <Tooltip />
            <Legend />
            <Bar dataKey="created" fill="orange" name="Groups Created" />
            <Bar dataKey="joined" fill="#5e439a" name="Groups Joined" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Recharts;
