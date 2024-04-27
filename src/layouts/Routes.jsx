import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../mains/ErrorPage";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <h1>Hello to Home</h1>,
            },
            {
                path: '/login',
                element: <h1>Hello to Login</h1>,
            },
            {
                path: '/register',
                element: <h1>Hello to Register</h1>,
            },
        ]
    },
]);

export default Routes;