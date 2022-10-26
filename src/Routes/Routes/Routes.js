import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Blog from "../../components/Shared/Blog/Blog";
import Checkout from "../../components/Shared/Courses/Checkout";
import CourseDetails from "../../components/Shared/Courses/CourseDetails";
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
                loader: () => fetch('https://e-learning-server.vercel.app/courses'),
                element:<Courses></Courses>
            },
            {
                path:'/course/:id',
                loader: ({params}) => fetch(`https://e-learning-server.vercel.app/course/${params.id}`),
                element:<CourseDetails></CourseDetails>
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
                path:'/checkout/:id',
                loader: ({params}) => fetch(`https://e-learning-server.vercel.app/course/${params.id}`),
                element:<Checkout></Checkout>
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