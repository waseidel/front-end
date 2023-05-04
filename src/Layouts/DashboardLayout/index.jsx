import { Outlet } from "react-router-dom";
import { FooterComponent, NavbarComponent } from "../../components";

const routes = [
  { name: "Tablero de control", href: "/dashboard" },
  { name: "Gestión Humana", href: "/dashboard/gestion-humana" },
  { name: "Operaciones", href: "/dashboard/operaciones" },
  { name: "Mantenimiento", href: "/dashboard/mantenimiento" },
];

const user = {
  name: "Walther Seidel",
  email: "contacto@wasei.dev",
  imageUrl: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  status: "active",
};

export const DashboardLayout = () => (
  <div className="flex flex-col h-screen place-content-between">
    <NavbarComponent routes={routes} user={user} />
    <div className="bg-gray-300 h-full p-4">
      <Outlet />
    </div>
    <FooterComponent />
  </div>
);
