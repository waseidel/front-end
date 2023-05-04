import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export const FooterComponent = () => {
  const links = [
    { icon: <BsFacebook />, href: "https://facebook.com" },
    { icon: <BsInstagram />, href: "https://instagram.com" },
    { icon: <BsTwitter />, href: "https://twitter.com" },
  ];
  return (
    <footer className="container">
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Link to="/">ETMCorp™ 2023</Link>
        <ul className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          {links.map((link) => (
            <li key={link.href}>
              <Link to={link.href}>{link.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
