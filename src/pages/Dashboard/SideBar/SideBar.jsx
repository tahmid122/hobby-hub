import { Link, NavLink } from "react-router";
import { FiHome, FiUsers, FiPlusCircle, FiX } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`min-h-full w-64 p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg z-20 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:static md:block`}
    >
      {/* Close button (only on mobile) */}
      <div className="lg:hidden flex justify-end mb-4">
        <button onClick={onClose}>
          <FiX className="text-2xl" />
        </button>
      </div>

      <div className="mb-10 text-2xl font-bold flex items-center gap-2">
        <MdSpaceDashboard className="text-secondary dark:text-white" />{" "}
        <span>Dashboard</span>
      </div>

      <ul className="space-y-2 text-base font-medium dBoard">
        <li>
          <NavLink
            to="/dashboard"
            end
            onClick={onClose}
            className="flex items-center gap-3 duration-300 hover:text-white rounded p-2 hover:bg-orange-600 transition"
          >
            <FiHome />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/myGroups"
            end
            onClick={onClose}
            className="flex items-center gap-3 duration-300 hover:text-white rounded p-2 hover:bg-orange-600 transition"
          >
            <FiUsers />
            My Groups
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/createGroup"
            end
            onClick={onClose}
            className="flex items-center gap-3 duration-300 hover:text-white rounded p-2 hover:bg-orange-600 transition"
          >
            <FiPlusCircle />
            Create Group
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
