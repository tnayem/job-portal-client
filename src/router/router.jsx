import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JobDetails from "../pages/Home/JobDetails";
import JobApply from "../pages/JobApply";
import PrivetRout from "./PrivetRout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/jobs/:id',
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`),
          element:<JobDetails></JobDetails>,
          
        },
        {
          path:'/applyJob/:id',
          element:<PrivetRout><JobApply></JobApply></PrivetRout>
        }
    ]
  },
]);