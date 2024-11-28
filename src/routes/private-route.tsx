import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { UserContext } from "../context/user";

export function PrivateRoute({ element }: { element: JSX.Element }) {
    const { user } = useContext(UserContext);

    const route = useLocation();
    localStorage.setItem('routeCurrent', route.pathname);
    return user ? element : <Navigate to="/" replace />;
}