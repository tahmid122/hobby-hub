import React, { use } from "react";
import { Tooltip } from "react-tooltip";
import { Link, NavLink } from "react-router";
import { FaUserCircle } from "react-icons/fa";
// import darkLogo from "../../assets/images/logo-Dark.png";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import logo from "/logo1.png";
const NavBar = () => {
  const { user, logOutUser, loading } = use(AuthContext);
  if (loading) {
    return <LoadingSpinner />;
  }
  const handleLogOut = () => {
    logOutUser()
      .then(() => toast.success("Signout successful"))
      .catch((error) => toast.error(error.message));
  };
  const links = (
    <>
      <li>
        <NavLink className={"rounded-none"} to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"rounded-none"} to={"/groups"}>
          All Groups
        </NavLink>
      </li>
      <li>
        <NavLink className={"rounded-none"} to={"/about"}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink className={"rounded-none"} to={"/contact"}>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-none md:hidden block" to={"/dashboard"}>
          Dashboard
        </NavLink>
      </li>
    </>
  );
  //myGroups, create groups
  return (
    <div className="shadow-xs shadow-slate-400 dark:bg-slate-900 dark:text-white sticky top-0 left-0 bg-white z-20 lg:z-50">
      <div className="navbar md:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow nav-bar dark:text-white dark:bg-slate-900"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="hidden sm:flex items-center gap-2">
            <span className="text-5xl">
              <img className="w-14" src={logo} alt="" />
            </span>
            <span className="text-3xl font-semibold text-secondary dark:text-white">
              HobbyHub
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 nav-bar dark:text-white dark:bg-slate-900 text-base">
            {links}
          </ul>
        </div>
        <div className="navbar-end grow">
          <div className="flex gap-4 items-center">
            {user ? (
              <div>
                <span
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName}
                >
                  <div className="tooltip tooltip-bottom flex items-center justify-center">
                    {user?.photoURL ? (
                      <Link to={"/dashboard"}>
                        <img
                          referrerPolicy="no-referrer"
                          className="w-10 h-10  rounded-full border-orange-600 border-2"
                          src={user.photoURL}
                          alt="image"
                        />
                      </Link>
                    ) : (
                      <FaUserCircle size={40} />
                    )}
                  </div>
                </span>
              </div>
            ) : (
              ""
            )}
            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  to={"/dashboard"}
                  className="btn hidden md:flex btn-outline hover:bg-secondary hover:text-white transition-all duration-500 dark:border-slate-500 hover:shadow-none"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogOut}
                  className="btn bg-orange-600 text-white border-none outline-none shadow-none"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to={"/login"} className="btn btn-secondary">
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="btn bg-orange-600 text-white border-none shadow-none"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" className="z-20" arrowColor="orange" />
    </div>
  );
};

export default NavBar;
