import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import { FiMenu } from "react-icons/fi"; //
import Sidebar from "../pages/Dashboard/SideBar/SideBar";
import ThemeChanger, { ChangeTheme } from "../utils/ThemeChanger";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    ChangeTheme();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="fixed flex flex-col mt-4 top-32 right-0 z-50 bg-gray-50">
        <button
          onClick={() => {
            ThemeChanger("light");
          }}
          className="text-sm text-white py-1 px-2 flex items-center justify-center bg-secondary dark:bg-white dark:text-black"
        >
          <IoMdSunny size={20} />
        </button>
        <button
          onClick={() => {
            ThemeChanger("dark");
          }}
          className="text-sm py-1 px-2 dark:bg-secondary dark:text-white bg-transparent"
        >
          <IoMdMoon size={20} />
        </button>
      </div>
      <div className="min-h-screen relative flex gap-4 flex-col md:flex-row dark:bg-slate-900">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-2xl mb-4 text-gray-700 dark:text-white md:hidden m-2"
        >
          <FiMenu />
        </button>
        <div
          className={`py-5 bg-white dark:bg-slate-900 z-10 border-r border-r-slate-200 dark:border-r-slate-700 ${
            sidebarOpen ? "-translate-x-0" : "-translate-x-full"
          } lg:-translate-x-0 absolute lg:relative h-full lg:h-auto transition-all duration-500`}
        >
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
