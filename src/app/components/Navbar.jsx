import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleMenu = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="bg-yellow-500 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        {!navbarOpen && (
          <a
            href="#"
            className="block lg:block text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          >
            teste
          </a>
        )}
        <button
          type="button"
          onClick={toggleMenu}
          className={`${
            navbarOpen ? "hidden" : "block lg:hidden"
          } text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent outline-none focus:outline-none`}
        >
          <FaBars />
        </button>
        <div
          className={`${
            navbarOpen ? "flex lg:justify-center" : "hidden"
          } lg:flex lg:items-center lg:w-auto w-full`}
        >
          <ul className="flex flex-col lg:flex-row list-none">
            <li className="nav-item">
              <a
                href="#pablo"
                className="flex items-center px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#pablo"
                className="flex items-center px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                <span>Jogo</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#pablo"
                className="flex items-center px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                <span>História</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#pablo"
                className="flex items-center px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                <span>Créditos</span>
              </a>
            </li>
          </ul>
          {navbarOpen && (
            <FaTimes
              className="text-white text-xl cursor-pointer lg:hidden absolute top-3 right-4"
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
