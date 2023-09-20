import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="container mx-auto flex items-center py-3 px-3 justify-between">
        <div className="flex items-center justify-between w-full">
          <a href="/" className="text-3xl">
            Chafiki
          </a>
          {isMenuOpen ? (
            <GrClose
              className="text-3xl cursor-pointer  md:hidden"
              onClick={toggleMenu}
            />
          ) : (
            <CiMenuBurger
              className="text-3xl cursor-pointer md:hidden"
              onClick={toggleMenu}
            />
          )}
        </div>
        <ul
          className={ ` hidden md:flex items-center space-x-8 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        className={`menu_small container mx-auto px-3 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-8 py-3  md:hidden">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
