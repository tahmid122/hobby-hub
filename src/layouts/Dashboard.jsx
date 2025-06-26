import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Link, Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import { FiHome, FiUsers, FiPlusCircle, FiMenu } from "react-icons/fi"; // You can change these as needed
import SideBar from "../pages/Dashboard/SideBar/SideBar";
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
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1  p-4 bg-white dark:bg-slate-900 min-h-screen">
          {/* Toggle Button (only on small devices) */}
          <div className="md:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-2xl mb-4 text-gray-700 dark:text-white"
            >
              <FiMenu />
            </button>
          </div>

          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
