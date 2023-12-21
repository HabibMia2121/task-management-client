import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import TaskList from "../pages/taskList/TaskList";

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
]);

export default myCreateRouter;