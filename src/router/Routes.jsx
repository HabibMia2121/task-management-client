import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import AddTask from "../pages/Dashboard/addTask/AddTask";
import PreviousTask from "../pages/Dashboard/previousTask/PreviousTask";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoutes from "./privateRoutes/PrivateRoutes";
import Task from "../pages/Dashboard/to-doTask/Task";
import TodoTaskEdit from "../pages/Dashboard/to-doTask/todoTaskEdit";

const myCreateRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path:'signIn',
                element: <SignIn/>
            },
            {
                path:'signUp',
                element: <SignUp/>
            },
        ]
    },
    // dashboard routes here
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout/></PrivateRoutes>,
        children: [
            {
                path:'/dashboard/main',
                element: <PrivateRoutes><Dashboard/></PrivateRoutes>
            },
            {
                path:'/dashboard/addTask',
                element: <PrivateRoutes><AddTask/></PrivateRoutes>
            },
            {
                path:'/dashboard/task',
                element: <PrivateRoutes><Task/></PrivateRoutes>
            },
            {
                path:'/dashboard/todo/:id',
                element: <PrivateRoutes><TodoTaskEdit/></PrivateRoutes>
            },
            {
                path:'/dashboard/previousTask',
                element: <PrivateRoutes><PreviousTask/></PrivateRoutes>
            },
        ]
    }
]);

export default myCreateRouter;