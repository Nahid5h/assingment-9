import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../pages/Home/Home";
import Update from './../Layouts/Update';
import AboutUs from './../Layouts/AboutUs';
import Error from "../Layouts/Error";
import Details from "../Layouts/Details";
import Login from "../Layouts/Login";
import Register from "../Layouts/Register";

const routes= createBrowserRouter([
    {
        path:'/',
        element:<Roots></Roots>,
       errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
               
            },
            {
                path:'/updateProfile',
                element:<Update></Update>,
               
            },
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>,
               
            },
            {
                path:'/login',
                element:<Login></Login>,
               
            },
            {
                path:'/register',
                element:<Register></Register>,
               
            }
            ,
            {
                path:'/Details/:id',
                element:<Details></Details>,
                loader: () =>fetch('/data.json')
               
            }

        ]
    }
])
export default routes;