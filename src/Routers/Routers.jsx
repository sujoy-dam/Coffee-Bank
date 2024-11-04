import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Coffee from "../Pages/Coffee";
import Dashboard from "../Pages/Dashboard";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/coffee",
            element:<Coffee></Coffee>
        },
        {
            path:"/dashboard",
            element:<Dashboard></Dashboard>
        }
      ]
    },
  ]);
  export default router