import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const location = useLocation();
  const { pathname } = location;

  const navItems = [
    { id: 1, route: "/", text: "00 Home" },
    { id: 2, route: "/destination", text: "01 Destination" },
    { id: 3, route: "/crew", text: "02 Crew" },
    { id: 4, route: "/technology", text: "03 Technology" },
  ];
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-1 md:mx-10 px-4 text-white">
      <img src={Logo} className="h-1/3 md:h-auto" />

      {/* Desktop Navigation */}
      <ul className="hidden md:flex bg-gray-900 px-10 py-5">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="mx-4 m-2 cursor-pointer text-lg font-barlowCondensed text-white font-normal tracking-tight"
          >
            <Link
              to={`${item.route}`}
              className={
                item.route === pathname && "pb-2 border-b-2 border-white"
              }
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden right-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%] z-10"
        }
      >
        {/* Mobile Navigation Items */}
        <li className="my-10 ml-5">
          <AiOutlineClose size={20} onClick={handleNav} />
        </li>
        {navItems.map((item) => (
          <li
            key={item.id}
            className=" ml-5 p-4  cursor-pointer font-barlowCondensed"
          >
            <NavLink to={`${item.route}`} onClick={handleNav}>
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
