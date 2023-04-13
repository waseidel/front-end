import { Outlet } from "react-router-dom";
import {
  NavigationBarComponent as Navbar,
  FooterComponent as Footer,
} from "../../components";

const routes = [
  { name: "Inicio", href: "#", isActive: true },
  { name: "Acerca de", href: "#acerca-de", isActive: false },
  { name: "Proyectos", href: "#proyectos", isActive: false },
  { name: "Contacto", href: "#contacto", isActive: false },
];

export const LandingLayout = () => {
  return (
    <div className="flex flex-col h-screen place-content-between">
      <Navbar routes={routes} />
      <Outlet />
      <Footer />
    </div>
  );
};
