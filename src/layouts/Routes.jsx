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
import MyPlaces from "../privatePages/MyPlaces";
import Edit from "../privatePages/Edit";

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
                path: "/my-places",
                element: <PrivateRoute><MyPlaces></MyPlaces></PrivateRoute>,
                loader: () => fetch('https://your-travel-server.vercel.app/place'),
            },
            {
                path: "/editPlace/:id",
                element: <PrivateRoute><Edit></Edit></PrivateRoute>,
                loader: ({ params }) => fetch(`https://your-travel-server.vercel.app/place/${params.id}`),
            },
            {
                path: "/all-places",
                element: <AllPlaces></AllPlaces>,
                loader: () => fetch('https://your-travel-server.vercel.app/place'),
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><PlaceDetails></PlaceDetails></PrivateRoute>,
                loader: () => fetch('https://your-travel-server.vercel.app/place'),
            },
        ]
    },
]);

export default Routes;