import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-20 bg-[#fff8eb] flex items-center gap-8">
      <img src={logo} alt="logo" className="h-12 pl-8 cursor-pointer" />
      <ul className="flex items-center gap-8">
        <Link to="">
          <li className="list-none cursor-pointer">Home</li>
        </Link>
        <li className="list-none cursor-pointer">Categories</li>
        <li className="list-none cursor-pointer">About Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
