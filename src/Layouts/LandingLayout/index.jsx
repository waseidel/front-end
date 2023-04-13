import { Outlet } from "react-router-dom";
import { NavbarComponent, FooterComponent } from "../../components";

const routes = [
  { name: "Inicio", href: "#" },
  { name: "Acerca de", href: "#acerca-de" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Contacto", href: "#contacto" },
];

export const LandingLayout = () => {
  return (
    <div className="flex flex-col h-screen place-content-between">
      <NavbarComponent routes={routes} />
      <Outlet />
      <FooterComponent />
    </div>
  );
};
