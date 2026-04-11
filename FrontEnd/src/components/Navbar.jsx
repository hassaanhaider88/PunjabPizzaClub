import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white px-6 md:px-16 lg:px-24 xl:px-32 py-4 flex items-center justify-between relative">
        <div className="flex items-center gap-20">
          <Link to={"/"}>
            <img
              src="./src/assets/NavBarIcon.png"
              alt="Punjab Pizza Logo"
              className="object-coverh-20 w-20"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              to={"/menu"}
              className="flex items-center gap-1.5 text-sm text-zinc-800 cursor-pointer bg-transparent border-0 py-2"
            >
              Our Menu
            </Link>
            <Link
              to={"/"}
              className="flex items-center gap-1.5 text-sm text-zinc-800 cursor-pointer bg-transparent border-0 py-2"
            >
              Our Menu
            </Link>
            <Link
              to={"/menu"}
              className="flex items-center gap-1.5 text-sm text-zinc-800 cursor-pointer bg-transparent border-0 py-2"
            >
              Our Menu
            </Link>
            <Link
              to={"/menu"}
              className="flex items-center gap-1.5 text-sm text-zinc-800 cursor-pointer bg-transparent border-0 py-2"
            >
              Our Menu
            </Link>
          </div>
        </div>

        <button className="hidden md:flex items-center gap-2.5 bg-linear-to-r from-zinc-950 to-zinc-500 text-zinc-50 hover:text-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full cursor-pointer border-0">
          Get this template
          <span className="size-7 rounded-full bg-white flex items-center justify-center">
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.6 4.602h10m-4-4 4 4-4 4"
                stroke="#3f3f47"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1"
        >
          <span
            className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-zinc-800 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-zinc-800 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
