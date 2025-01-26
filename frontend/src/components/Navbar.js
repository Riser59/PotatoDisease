// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">
          MyApp
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="/home" className="text-white hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-gray-200">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
