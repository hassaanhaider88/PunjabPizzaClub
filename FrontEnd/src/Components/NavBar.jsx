import { SiInstagram } from "react-icons/si"; 
import { FaFacebook } from "react-icons/fa"; 
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  FaBars,
  FaClock,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { MdWhatsapp } from "react-icons/md";

const NavBar = () => {
  const NAV_LINKS = [
    "Home",
    "Menu",
    "Promotions",
    "Shipping and Payment",
    "About us",
    "Contacts",
  ];
  // eslint-disable-next-line no-unused-vars
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const [IsMobileNumberHover, setIsMobileNumberHover] = useState(false);

  const handleUserMouseEnterInPhone = () => {
    setIsMobileNumberHover(true);
  };

  const handleUserMouseLeaveInPhone = () => {
    setIsMobileNumberHover(false);
  };
  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="bg-[#faf7f2] border-b border-gray-100 md:py-4 py-2 px-4 md:px-15  flex md:flex-row flex-col gap-5 items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-6">
          <span className="sm:flex hidden items-center gap-1">
            <CiLocationOn className="text-[#c84b11]" /> Near Nawab Chock Lalian
          </span>
          <div className="relative cursor-pointer">
            <span
              onMouseEnter={() => handleUserMouseEnterInPhone()}
              onMouseLeave={() => handleUserMouseLeaveInPhone()}
              className="flex items-center  gap-1 text-[#c84b11] font-semibold"
            >
              <MdWhatsapp className="text-[#c84b11]" /> +92 347 2641 138{" "}
              <IoMdArrowDropup
                className={`${IsMobileNumberHover ? "" : "rotate-180"} duration-300 transition-all text-lg`}
              />
            </span>
            {IsMobileNumberHover && (
              <div
                onMouseEnter={() => handleUserMouseEnterInPhone()}
                onMouseLeave={() => handleUserMouseLeaveInPhone()}
                className="absolute py-3 rounded-xl px-1 z-50 duration-300 transition-all bg-[#2D6A4F]  flex flex-col gap-2 top-5"
              >
                <span className="flex items-center  gap-1 text-white font-semibold">
                  <MdWhatsapp className="text-white" /> +92 347 2641 138{" "}
                </span>
                <span className="flex items-center  gap-1 text-white font-semibold">
                  <MdWhatsapp className="text-white" /> +92 347 2641 138{" "}
                </span>
              </div>
            )}
          </div>
          <span className="sm:flex hidden items-center gap-1">
            <FaClock /> Delivery time: 12:00 PM – 12:00 AM
          </span>
          <span className="sm:hidden flex items-center gap-1">
            <FaClock /> D.T: 12:00 PM – 12:00 AM
          </span>
        </div>
        <div className="sm:flex hidden items-center gap-4">
          <span className="flex items-center gap-1 cursor-pointer hover:text-[#c84b11]">
            <FaUser /> Personal Account
          </span>
          <span className="flex items-center gap-1 cursor-pointer">
            <FaGlobe /> UA
          </span>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            <FaFacebook />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-700">
            <SiInstagram />
          </a>
        </div>
      </div>
      <nav className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-[#1a3c2e] text-white rounded-lg p-1.5 leading-none">
              <span className="text-xs font-black tracking-tight">PEPE</span>
            </div>
            <div>
              <div className="text-[#1a3c2e] font-black text-lg leading-none tracking-tight">
                PIZZA
              </div>
              <div className="text-gray-400 text-[8px] uppercase tracking-widest">
                Pizza restaurant
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={`hover:text-[#c84b11] transition-colors ${link === "Home" ? "text-[#c84b11] border-b-2 border-[#c84b11] pb-0.5" : "text-gray-600"}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Cart + Burger */}
          <div className="flex items-center gap-3">
            <button className="relative bg-[#1a3c2e] text-white rounded-full p-2.5 hover:bg-[#2d6a4f] transition-colors">
              <FaShoppingCart size={16} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t px-4 py-4">
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="block text-gray-700 hover:text-[#c84b11] font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
