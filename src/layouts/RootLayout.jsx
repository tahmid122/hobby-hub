import React, { useEffect } from "react";
import { Outlet, useNavigation } from "react-router";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ThemeChanger, { ChangeTheme } from "../utils/ThemeChanger";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const RootLayout = () => {
  const navigation = useNavigation();
  useEffect(() => {
    ChangeTheme();
  }, []);
  return (
    <>
      {navigation.state === "loading" && <LoadingSpinner />}
      <div className="dark:bg-slate-900 relative">
        <div className="fixed flex flex-col mt-4 top-32 left-0 z-10 bg-gray-50">
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
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
