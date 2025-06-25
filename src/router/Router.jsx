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
        path: "groups",
        Component: AllGroups,
        loader: () =>
          fetch("https://m10-assignment10-server.vercel.app/groups"),
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "createGroup",
        element: (
          <ProtectedRoute>
            <CreateGroup />
          </ProtectedRoute>
        ),
      },
      {
        path: "updateGroup/:id",
        element: (
          <ProtectedRoute>
            <UpdateGroup />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://m10-assignment10-server.vercel.app/groups/${params.id}`
          ),
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
          fetch(
            `https://m10-assignment10-server.vercel.app/groups/${params.id}`
          ),
        hydrateFallbackElement: <LoadingSpinner />,
      },
      {
        path: "myGroups",
        element: (
          <ProtectedRoute>
            <MyGroups />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);
