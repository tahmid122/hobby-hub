import React, { use, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { getFormData } from "../../utils/GetFormData";

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
    <div className="my-5 w-11/12 mx-auto min-h-[75vh]">
      <div className="flex min-h-full flex-col justify-center px-6  lg:px-8 md:w-6/12 mx-auto py-10 rounded shadow-sm shadow-slate-400">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleRegister} className="space-y-6">
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
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
            <Link
              to={"/login"}
              className="font-semibold text-secondary hover:hover:text-[#de2aa8]"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
