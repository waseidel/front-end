import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
// { routes, user }
export const NavbarComponent = ({ routes, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkActiveClass = (isActive) => {
    const style = isActive ? "font-semibold bg-gray-900" : "";
    return `flex rounded-md items-center px-2 py-1 -mx-2 rouded-lg hover:bg-gray-700 hover:font-semibold transition duration-250 dark:text-gray-100 ${style}`;
  };

  return (
    <nav className="block md:flex md:p-2 justify-center dark:bg-gray-800 dark:text-gray-100">
      <div className="block py-4 space-y-4 md:space-y-0 md:container md:flex md:flex-row items-center md:gap-4 px-4 md:h-14 dark:bg-gray-800 dark:text-gray-100">
        <div className="flex flex-row w-full md:w-fit justify-between">
          Logo
          <button
            className="md:hidden"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <RxHamburgerMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"
          } transition-all duration-1000 space-y-3 md:space-y-0 md:flex md:flex-row w-full items-center justify-between`}
        >
          <div>
            <ul className="space-y-2 md:space-y-0 w-full md:flex md:flex-row md:gap-4">
              {routes.map((route) => (
                <li>
                  <NavLink
                    to={route.href}
                    className={({ isActive }) => navLinkActiveClass(isActive)}
                    end
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {user && user?.name ? (
              <button
                type="button"
                className="block w-full md:flex md:flex-row items-center gap-2 text-justify bg-blue-700 transition duration-300 hover:bg-blue-800 rounded px-2 py-1 -mx-2 md:mx-0"
              >
                {user.name}
              </button>
            ) : (
              <Link to="/login">Iniciar Sesión</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
