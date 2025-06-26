import React, { use, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { getFormData } from "../../utils/GetFormData";
import Lottie from "lottie-react";
import register from "../../../public/login.json";

const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { createUser, updateUser, setLoading, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = getFormData(form);
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(data.password)) {
      toast.error(
        "Password must be at least one uppercase, one lowercase letter and 6 character."
      );
      return;
    }
    createUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          updateUser(data.name, data.photoURL)
            .then(() => {
              setUser({
                ...result.user,
                displayName: data.name,
                photoURL: data.photoURL,
              });
              toast.success("Profile Updated");
            })
            .catch((error) => toast.error(error.message));
        }
        toast.success("Registration successful");
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <div className="w-11/12 mx-auto py-10 flex flex-col md:flex-row items-center justify-center gap-5 min-h-[80vh]">
      <div className="w-full md:w-[400px]">
        <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
          Create a new account
        </h2>
        <div className="px-5 py-5 shadow mt-10 dark:shadow dark:shadow-slate-50">
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label
                htmlFor="Name"
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-slate-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-500 sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="photoURL"
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                Photo URL
              </label>
              <div className="mt-2">
                <input
                  name="photoURL"
                  type="text"
                  required
                  className="block w-full rounded bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-slate-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-500 sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-slate-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-500 sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={show ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-slate-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-500 sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-2 top-2 cursor-pointer dark:text-white"
                >
                  {show ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                </span>
              </div>
            </div>

            <div>
              <button type="submit" className="btn btn-secondary w-full">
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?
            <Link to={"/login"} className="font-semibold text-orange-600">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="w-[400px]">
        <Lottie animationData={register} loop={true} />
      </div>
    </div>
  );
};

export default Register;
