import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../mains/ErrorPage";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
    },
]);

export default Routes;