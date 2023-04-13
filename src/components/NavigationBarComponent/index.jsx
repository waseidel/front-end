import { Avatar, Navbar, Dropdown, Button } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

const dropdownItems = [
  { name: "Configuración", icon: undefined, href: "#" },
  { name: "Perfil", icon: undefined, href: "#" },
];

export const NavigationBarComponent = ({ routes, user }) => {
  return (
    <Navbar fluid={true}>
      <Navbar.Brand to="/dashboard">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          ETMCorp
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar img={user.imageUrl} alt={user.name} rounded={true} />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.name}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            {dropdownItems.map((item, idx) => (
              <Dropdown.Item key={idx}>{item.name}</Dropdown.Item>
            ))}
            <Dropdown.Divider />
            <Dropdown.Item className="font-semibold">
              Cerrar Sesión
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <div className="flex flex-row">
            <NavLink
              to="/auth/login"
              className="px-2 py-1 border bg-blue-600 text-white rounded-md"
            >
              Iniciar Sesión
            </NavLink>
          </div>
        )}
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {routes.map((route) => (
          <Navbar.Link
            to={route.href}
            key={route.name}
            as={NavLink}
            active={route.isActive}
          >
            {route.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
