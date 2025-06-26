import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { getFormData } from "../../utils/GetFormData";
import login from "../../../public/register.json";
import Lottie from "lottie-react";
const Login = () => {
  const { signInWithGoogle, signInUser, setLoading } = use(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = getFormData(form);
    signInUser(data.email, data.password)
      .then(() => {
        toast.success("Login Successful");
        navigate(state || "/");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Login Successful");
        navigate(state || "/");
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
          Login to your account
        </h2>
        <div className="px-5 py-5 shadow mt-10 dark:shadow dark:shadow-slate-50">
          <form onSubmit={handleLogin} className="space-y-4">
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-secondary hover:text-[#de2aa8]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-slate-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-slate-500 sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="btn btn-secondary w-full">
                Login
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don't have an account?
            <Link
              to={"/register"}
              className="font-semibold text-secondary hover:hover:text-[#de2aa8]"
            >
              Register
            </Link>
          </p>
          <div className="divider dark:text-white">OR</div>
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5] w-full dark:bg-slate-900 dark:text-white dark:border-none dark:shadow-sm dark:shadow-slate-300"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </div>
      <div className="w-[400px]">
        <Lottie animationData={login} loop={true} />
      </div>
    </div>
  );
};

export default Login;
