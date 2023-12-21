import {createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";

const myCreateRouter = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home/>
            },
        ]
    },
]);

export default myCreateRouter;