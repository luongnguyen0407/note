import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NodeList from "../components/NodeList";
import AuthProvider from "../src/context/AuthProvider";
import PrivateRoute from "../src/PrivateRoute";
import Node from "../components/Node";
const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            element: <Home />,
            path: "/",
            children: [
              {
                element: <NodeList />,
                path: "folders/:idFolder",
                children: [
                  {
                    element: <Node />,
                    path: "node/:idNode",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
