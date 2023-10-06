import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Dashboard from "../Authentication/Dashboard";
import UserProfile from "../Authentication/UserProfile";
import Documentation from "../Pages/Home/Documentation";



 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children :[
        {
            path : '/',
            element : <Home/>
        },
        {
            path : 'login',
            element : <Login/>
        },
        {
            path : 'register',
            element : <Register/>
        },
        {
          path : 'dashboard',
          element : <Dashboard/>
      },
        {
          path : 'profile',
          element : <UserProfile/>
      },
      {
        path : 'documentation',
        element : <Documentation/>
      }
      ]
    },
  ]);