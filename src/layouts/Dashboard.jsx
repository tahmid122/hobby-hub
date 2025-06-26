import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Link, Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import { FiHome, FiUsers, FiPlusCircle, FiMenu } from "react-icons/fi"; // You can change these as needed
import SideBar from "../pages/Dashboard/SideBar/SideBar";
import Sidebar from "../pages/Dashboard/SideBar/SideBar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <NavBar />
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
