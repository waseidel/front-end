import { Outlet } from "react-router-dom";
import { FooterComponent, NavbarComponent } from "../../components";

const routes = [
  { name: "Inicio", href: "#" },
  { name: "Acerca de", href: "#acerca-de" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Contacto", href: "#contacto" },
];

export const LandingLayout = () => (
  <div className="flex flex-col h-screen place-content-between">
    <NavbarComponent routes={routes} />
    <Outlet />
    <FooterComponent />
  </div>
);
