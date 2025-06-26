import { Link } from "react-router";
import { FiHome, FiUsers, FiPlusCircle, FiX } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`min-h-screen w-64 p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg z-20 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:static md:block`}
    >
      {/* Close button (only on mobile) */}
      <div className="md:hidden flex justify-end mb-4">
        <button onClick={onClose}>
          <FiX className="text-2xl" />
        </button>
      </div>

      <div className="mb-10 text-2xl font-bold flex items-center gap-2">
        <MdSpaceDashboard className="text-secondary dark:text-white" />{" "}
        <span>Dashboard</span>
      </div>

      <ul className="space-y-4 text-base font-medium">
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 hover:text-blue-600 transition"
          >
            <FiHome />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/myGroups"
            className="flex items-center gap-3 hover:text-blue-600 transition"
          >
            <FiUsers />
            My Groups
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/createGroup"
            className="flex items-center gap-3 hover:text-blue-600 transition"
          >
            <FiPlusCircle />
            Create Group
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
