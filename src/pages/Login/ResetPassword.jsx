import React, { use, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { getFormData } from "../../utils/GetFormData";
import reset from "../../../public/reset.json";
import Lottie from "lottie-react";
import BackToPrev from "../../BackToPrev/BackToPrev";
const ResetPassword = () => {
  const { passwordReset } = use(AuthContext);
  const [isTrue, setIsTrue] = useState(false);
  const navigate = useNavigate();
  const handleReset = (e) => {
    e.preventDefault();
    const { email } = getFormData(e.target);
    passwordReset(email)
      .then(() => {
        toast.success("A reset link has been sent your email");
        setIsTrue(true);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="w-11/12 mx-auto py-10 flex flex-col md:flex-row items-center justify-center gap-5 min-h-[80vh]">
      <div className="w-full md:w-[400px]">
        <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
          Reset Your Password
        </h2>
        <div className="px-5 py-5 shadow mt-10 dark:shadow dark:shadow-slate-50">
          <form onSubmit={handleReset} className="space-y-4">
            <BackToPrev />
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
              <button type="submit" className="btn btn-secondary w-full">
                Reset
              </button>
            </div>
            {isTrue && (
              <p className="text-sm text-secondary font-semibold dark:text-white">
                Password reset link has been sent. Please check your email.
              </p>
            )}
          </form>
        </div>
      </div>
      <div className="w-[400px] p-10">
        <Lottie animationData={reset} loop={true} />
      </div>
    </div>
  );
};

export default ResetPassword;
