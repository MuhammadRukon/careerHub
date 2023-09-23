import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root.jsx";
import Home from "./components/home/Home";
import AppliedJobs from "./components/appliedJobs/AppliedJobs";
import Jobs from "./components/jobs/Jobs";
import Statistics from "./components/statistics/Statistics";
import Blogs from "./components/blogs/Blogs";
import ErrorPage from "./components/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
