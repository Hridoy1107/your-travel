import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../mainPages/ErrorPage";
import Login from "../profiles/Login";
import Register from "../profiles/Register";
import PrivateRoute from "./PrivateRoute";
import UserPage from "../privatePages/UserPage";

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
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: "/user",
                element: <PrivateRoute><UserPage></UserPage></PrivateRoute> ,
            },
        ]
    },
]);

export default Routes;