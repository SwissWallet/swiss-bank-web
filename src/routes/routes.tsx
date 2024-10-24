import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { PixPage } from "../pages/pix";

export const router = createBrowserRouter([
    {path: "/", element: <Login />},
    {path: "/pix", element: <PixPage />},
]);