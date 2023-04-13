import React from "react";
import {
  NavigationBarComponent as Navbar,
  FooterComponent as Footer,
} from "../../components";

import { Outlet } from "react-router-dom";

const routes = [
  { name: "Tablero de control", href: "/dashboard", isActive: true },
  {
    name: "Gestión Humana",
    href: "/dashboard/gestion-humana",
    isActive: false,
  },
  { name: "Operaciones", href: "/dashboard/operaciones", isActive: false },
  { name: "Mantenimiento", href: "/dashboard/mantenimiento", isActive: false },
];
const user = {
  name: "Walther Seidel",
  email: "contacto@wasei.dev",
  imageUrl: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  status: "active",
};

export const DashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen place-content-between">
      <Navbar routes={routes} user={user} />
      <div className="bg-gray-300 h-full p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
