import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../pages/Home/Home";
import Update from './../Layouts/Update';
import AboutUs from '../pages/Home/AboutUs';
import Error from "../Layouts/Error";
import Details from "../Layouts/Details";
import Login from "../Layouts/Login";
import Register from "../Layouts/Register";
import PriverRout from "../PrivateRoutes/PriverRout";

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
                element:<PriverRout>
                    <Update></Update>
                </PriverRout>,
               
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
                element:<PriverRout>
                    <Details></Details>
                </PriverRout>,
                loader: () =>fetch('/data.json')
               
            }

        ]
    }
])
export default routes;