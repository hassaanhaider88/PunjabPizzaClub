import React, { useState } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";

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
  return (
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
  );
};

export default NavBar;
