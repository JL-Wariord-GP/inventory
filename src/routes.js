import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from './Layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import Products from "./pages/Products";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import PublicRoutesLayout from "./Layouts/PublicRoutesLayout";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";


export default function Router() {
    return useRoutes([
        {
            path: "/app",
            element: <DashboardLayout />,
            children: [
                { path: "dashboard", element: <Dashboard /> },
                { path: "products", element: <Products /> },
                { path: "users", element: <Users /> },
                { path: "settings", element: <Settings /> },
            ],
        },
        {
            path: "/",
            element: <PublicRoutesLayout />,
            children: [
                { index: true, element: <Login /> },
                { path: "page404", element: <Page404 /> },
                
            ],
        },
        { path: "*", element: <Navigate to="/page404" replace={true} /> },
    ]);
}
