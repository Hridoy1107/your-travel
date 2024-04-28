import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "../mainPages/ErrorPage";
import Login from "../profiles/Login";
import Register from "../profiles/Register";
import PrivateRoute from "./PrivateRoute";
import UserPage from "../privatePages/UserPage";
import Home from "../pages/Home";
import AddPlace from "../privatePages/AddPlace";
import AllPlaces from "../pages/AllPlaces";
import PlaceDetails from "../privatePages/PlaceDetails";

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
                element: <PrivateRoute><UserPage></UserPage></PrivateRoute>,
            },
            {
                path: "/add-place",
                element: <PrivateRoute><AddPlace></AddPlace></PrivateRoute>,
            },
            {
                path: "/all-places",
                element: <AllPlaces></AllPlaces>,
                loader: () => fetch('http://localhost:5000/place')
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><PlaceDetails></PlaceDetails></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/place')
            },
        ]
    },
]);

export default Routes;