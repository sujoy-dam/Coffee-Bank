import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Coffee from "../Pages/Coffee";
import Dashboard from "../Pages/Dashboard";
import CoffeeCards from "../components/CoffeeCards";
import Details from "../components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children:[
          {
            path:"/",
            element:<CoffeeCards></CoffeeCards>,
            loader:()=>fetch('../coffees.json')
          },
          {
            path:"/category/:category",
            element:<CoffeeCards></CoffeeCards>,
            loader:()=>fetch('../coffees.json')
          }
        ]
      },
      {
        path: "/coffee",
        element: <Coffee></Coffee>,
        loader:()=>fetch('../coffees.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path:"/coffee/:id",
        element:<Details></Details>,
        loader:()=>fetch('../coffees.json')
      }
    ]
  },
]);
export default router