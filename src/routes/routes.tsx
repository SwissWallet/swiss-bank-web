import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { PixPage } from "../pages/pix";
import Home from "../pages/home";

export const router = createBrowserRouter([
    {path: "/", element: <Login />},
    {path: "/pix", element: <PixPage />},
    {path: "/home", element: <Home />},
]);