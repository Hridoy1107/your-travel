import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../mainPages/ErrorPage";
import Login from "../profiles/Login";
import Register from "../profiles/Register";
import PrivateRoute from "./PrivateRoute";
import UserPage from "../privatePages/UserPage";
import Home from "../pages/Home";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
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
                path: "/user-profile",
                element: <PrivateRoute><UserPage></UserPage></PrivateRoute> ,
            },
        ]
    },
]);

export default Routes;