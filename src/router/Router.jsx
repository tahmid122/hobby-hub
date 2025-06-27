import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../pages/Error/Error";
import AllGroups from "../pages/AllGroups/AllGroups";
import CreateGroup from "../pages/CreateGroup/CreateGroup";
import MyGroups from "../pages/MyGroups/MyGroups";
import UpdateGroup from "../pages/UpdateGroup/UpdateGroup";
import GroupDetails from "../pages/GroupDetails/GroupDetails";
import ProtectedRoute from "./ProtectedRoute";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import BlogDetails from "../components/Blog/BlogDetails";
import Dashboard from "../layouts/Dashboard";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import Category from "../pages/Category/Category";
import ResetPassword from "../pages/Login/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/bannerData.json"),
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "resetPassword",
        Component: ResetPassword,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "blog/:id",
        Component: BlogDetails,
        loader: () => fetch("/blog.json"),
      },
      {
        path: "/category/:cat",
        Component: Category,
        loader: () => fetch("https://hobby-hub-server-ruby.vercel.app/groups"),
      },
      {
        path: "groups",
        Component: AllGroups,
        loader: () => fetch("https://hobby-hub-server-ruby.vercel.app/groups"),
        hydrateFallbackElement: <LoadingSpinner />,
      },

      {
        path: "updateGroup/:id",
        element: (
          <ProtectedRoute>
            <UpdateGroup />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://hobby-hub-server-ruby.vercel.app/groups/${params.id}`),
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "group/:id",
        element: (
          <ProtectedRoute>
            <GroupDetails />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://hobby-hub-server-ruby.vercel.app/groups/${params.id}`),
        hydrateFallbackElement: <LoadingSpinner />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        Component: DashboardPage,
        loader: () => fetch("https://hobby-hub-server-ruby.vercel.app/groups"),
      },
      {
        path: "myGroups",
        Component: MyGroups,
      },
      {
        path: "createGroup",
        Component: CreateGroup,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);
