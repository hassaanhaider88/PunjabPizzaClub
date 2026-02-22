import { AiOutlineTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

import {  useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  FaBars,
  FaClock,
  FaGlobe,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { MdWhatsapp } from "react-icons/md";

import { } from "../Store/cartSlice"

import { Link, useLocation } from "react-router-dom";
import CartDiv from "./CartDiv";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems)
  const Location = useLocation();
  const NAV_LINKS = [
    {
      label: "Home",
      redirectUrl: "/",
    },
    {
      label: "Menu",
      redirectUrl: "/menu",
    },
    {
      label: "Promotions",
      redirectUrl: "/promotions",
    },
    {
      label: "Shipping and Payment",
      redirectUrl: "/shipping-payment",
    },
    {
      label: "About us",
      redirectUrl: "/about",
    },
    {
      label: "Contacts",
      redirectUrl: "/contacts",
    },
  ];
  // eslint-disable-next-line no-unused-vars
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [IsCartOpen, setIsCartOpen] = useState(false);


  const cartCount = cartItems.length;
  const [IsMobileNumberHover, setIsMobileNumberHover] = useState(false);

  const handleUserMouseEnterInPhone = () => {
    setIsMobileNumberHover(true);
  };

  const handleUserMouseLeaveInPhone = () => {
    setIsMobileNumberHover(false);
  };
  return (
    <>
      {/* ── TOP BAR only show on Home Page ── */}
      <div
        className={`${Location.pathname == "/" ? "flex md:flex-row flex-col" : "hidden"} bg-[#faf7f2] border-b border-gray-100 md:py-4 py-2 px-4 md:px-15  f gap-5 items-center justify-between text-xs text-gray-500`}
      >
        <div className="flex items-center gap-6">
          <span className="sm:flex hidden items-center gap-1">
            <CiLocationOn className="text-[#c84b11]" /> Near Nawab Chock Lalian
          </span>
          <div className="relative cursor-pointer">
            <span
              onClick={() => window.open("https://wa.me/923472641138")}
              onMouseEnter={() => handleUserMouseEnterInPhone()}
              onMouseLeave={() => handleUserMouseLeaveInPhone()}
              className="flex items-center gap-2 text-[#c84b11] font-semibold select-none"
            >
              <MdWhatsapp className="text-[#c84b11] text-xl" />
              +92 347-2641138
              <IoMdArrowDropup
                className={`text-lg transition-transform duration-300 ${IsMobileNumberHover ? "rotate-0" : "rotate-180"
                  }`}
              />
            </span>

            {IsMobileNumberHover && (
              <div
                onMouseEnter={() => handleUserMouseEnterInPhone()}
                onMouseLeave={() => handleUserMouseLeaveInPhone()}
                className="absolute top-6 right-0 flex flex-col gap-2 bg-[#c84b11] shadow-lg rounded-xl py-3 px-4 z-50 transition-all duration-300 w-60"
              >
                <span
                  onClick={() => window.open("https://wa.me/923030746738")}
                  className="flex items-center gap-2 text-white font-semibold"
                >
                  <MdWhatsapp className="text-white text-lg" /> +92 303-0746738
                </span>
                <span
                  onClick={() => window.open("https://wa.me/923160746738")}
                  className="flex items-center gap-2 text-white font-semibold"
                >
                  <MdWhatsapp className="text-white text-lg" /> +92 316-0746738
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
          <Link
            to={"/login"}
            className="flex items-center gap-1 cursor-pointer hover:text-[#c84b11]"
          >
            <FaUser /> Personal Account
          </Link>
          <a
            href="https://maps.app.goo.gl/hJKxP76Pv37yszRs7" // 31.823775910447818, 72.80149055755028
            className="flex hover:text-blue-500 items-center gap-1 cursor-pointer"
          >
            <FaGlobe /> PK
          </a>
          <a
            href="https://www.facebook.com/punjabpizaclub.lallian"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.tiktok.com/discover/punjab-pizza-club-lalian"
            className="hover:text-black"
          >
            <AiOutlineTikTok size={20} />
          </a>
        </div>
      </div>

      <nav className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              className="w-22 h-13 bg-cover"
              src="./PPCLogo.png"
              alt="Punjab Pizza Club Lalian logo"
            />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {NAV_LINKS.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.redirectUrl}
                  className={`hover:text-[#c84b11] transition-colors ${link.label === "Home" ? "BrandTextColor border-b-2 border-[#c84b11] pb-0.5" : "text-gray-600"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart + Burger */}
          <div className="flex  items-center gap-3">
            <button
              onClick={() => setIsCartOpen(!IsCartOpen)}
              className="relative cursor-pointer BoxColors text-white rounded-full p-2.5  transition-colors"
            >
              <FiShoppingCart size={16} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="lg:hidden cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {/* User cart goes here */}
        {IsCartOpen && <CartDiv setIsCartOpen={setIsCartOpen} />}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t px-4 py-4">
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link, idx) => (
                <li key={idx + 2}>
                  <Link
                    to={link.redirectUrl}
                    className="block text-gray-700 hover:text-[#c84b11] font-medium"
                  >
                    {link.label}
                  </Link>
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
