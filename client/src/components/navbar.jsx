import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="RICR LMS" className="h-6 w-auto" />
            <span className="text-xl font-bold leading-none">RICR</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
