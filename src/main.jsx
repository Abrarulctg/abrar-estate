import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import UpdateProfile from './components/UpdateProfile/UpdateProfile.jsx';
import Root from './components/Root/Root.jsx';
import Estates from './components/Estates/Estates.jsx';
import About from './components/About/About.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/estates',
        element: <Estates></Estates>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/userProfile',
        element: <UserProfile></UserProfile>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
