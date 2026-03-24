import { createBrowserRouter } from "react-router";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Instalation/Installation";
import ErrorPage from "../Pages/ErrorPage";
import AppsDetails from "../Components/AppsDetails";
import AppError from "../Components/AppError";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/AppsData.json"),
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
        errorElement: <AppError></AppError>,
      },

      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/app-details/:id",
        Component: AppsDetails,
        errorElement: <AppError></AppError>,
      },
      {
        path: "/apps/*",
        element: <AppError />,
      },
    ],
  },
]);

export default router;
