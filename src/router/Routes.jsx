import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import TaskList from "../pages/taskList/TaskList";
import AddTask from "../pages/Dashboard/addTask/AddTask";
import PreviousTask from "../pages/Dashboard/previousTask/PreviousTask";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

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
                path:'taskList',
                element: <TaskList/>
            },
        ]
    },
    // dashboard routes here
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path:'/dashboard/main',
                element: <Dashboard/>
            },
            {
                path:'/dashboard/addTask',
                element: <AddTask/>
            },
            {
                path:'/dashboard/previousTask',
                element: <PreviousTask/>
            },
        ]
    }
]);

export default myCreateRouter;