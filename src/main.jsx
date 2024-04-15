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
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import EstateDetails from './components/EstateDetails/EstateDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import AddReview from './components/ReviewPage/AddReview.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/abrar-estate.json')
      },
      {
        path: '/estates',
        element: <PrivateRoute><Estates></Estates></PrivateRoute>,
        loader: () => fetch('/abrar-estate.json')
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
        path: '/addReview',
        element: <AddReview></AddReview>
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
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: '/userProfile',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/estate/:id',
        element: <EstateDetails></EstateDetails>,
        loader: () => fetch('/abrar-estate.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
