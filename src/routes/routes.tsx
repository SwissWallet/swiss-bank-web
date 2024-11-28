import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { PixPage } from "../pages/pix";
import Home from "../pages/home";
import { PrivateRoute } from "./private-route";

export const router = createBrowserRouter([
    {path: "/", element: <Login />},
    {path: "/pix", element: (
        <PrivateRoute element={<PixPage />} />
    )},
    {path: "/home", element: (
        <PrivateRoute element={<Home />} />
    )},
]);