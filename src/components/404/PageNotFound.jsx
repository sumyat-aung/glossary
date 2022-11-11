import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-mono text-zinc-600 font-extralight mt-[50px]">
        404 ↫
      </h2>
      <h1 className="mt-[30px] font-semibold leading-5 tracking-widest">
        Page Not Found
      </h1>
      <h3 className="mt-[30px] font-extralight leading-5 px-8 font-mono text-center">
        The page you are looking for might be removed or is temporarily
        unavailable
      </h3>
      <Link
        to={"/"}
        className="text-md text-zinc-900 px-5 py-3 bg-zinc-50 rounded mt-[50px] font-bold cursor-default md:cursor-pointer active:-translate-y-1"
      >
        BACK TO HOME PAGE
      </Link>
    </div>
  );
}

export default PageNotFound;
