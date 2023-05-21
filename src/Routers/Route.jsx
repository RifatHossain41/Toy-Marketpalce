import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Shared/Login/Login";
import SignUp from "../Shared/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateForm from "../Pages/MyToys/UpdateForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>,
    
      },
      {
        path: '/mytoys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "/addtoys",
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path: "/toydetails/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
      },
      // {
      //   path: "updateForm/:id",
      //   element: <PrivateRoute><UpdateForm></UpdateForm></PrivateRoute>,
      //   loader: ({params}) => fetch(`http://localhost:5000/example/${params.id}`)
      // }
    ]
  },
]);

export default router;
