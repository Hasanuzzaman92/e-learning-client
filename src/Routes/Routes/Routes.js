import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Blog from "../../components/Shared/Blog/Blog";
import Courses from "../../components/Shared/Courses/Courses";
import FAQ from "../../components/Shared/FAQ/FAQ";
import Home from "../../components/Shared/Home/Home";
import Login from "../../components/Shared/Login/Login";
import Register from "../../components/Shared/Register/Register";
import Main from "../../Layouts/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])