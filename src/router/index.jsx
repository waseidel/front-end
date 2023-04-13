import { createBrowserRouter } from "react-router-dom";

import { AuthLayout, DashboardLayout, LandingLayout } from "../Layouts";
import {
  DashboardPage,
  ForgotPasswordPage,
  GestionHumanaPage,
  HomePage,
  LoginPage,
  MantenimientoPage,
  OperacionesPage,
} from "../pages";

export default createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "operaciones",
        element: <OperacionesPage />,
      },
      {
        path: "gestion-humana",
        element: <GestionHumanaPage />,
      },
      {
        path: "mantenimiento",
        element: <MantenimientoPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
    ],
  },
]);
