import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center p-6 border-b border-zinc-700 lg:px-20">
      <Link to="/">
        <i className="fa-solid fa-earth-americas text-zinc-300 text-2xl cursor-default md:cursor-pointer"></i>
      </Link>

      <Link to="/about">
        <i className="fa-solid fa-gear text-zinc-300 text-2xl ml-5 cursor-default md:cursor-pointer"></i>
      </Link>
      <Outlet />
    </div>
  );
}

export default Header;
