import { RxCross1 } from "react-icons/rx"; 
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FaLuggageCart } from "react-icons/fa";
import React, { useState } from 'react'
import Logo from "../assets/PPCLLogo.png"
import { Link } from "react-router-dom"

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className='justify-between flex items-center  px-10'>
      <div className="LogoContainer flex justify-center items-center w-[20%] md:w-[10%]">
        <img src={Logo} alt="Punjab Pizza CClub Logo" className='w-30 bg-cover' />
      </div>
      <div className="NavLinksContainer md:flex hidden ThreeDivs gap-3 justify-evenly items-center w-[80%] md:w-[90%]">
        <div className='flex gap-5 text-lg font-medium'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className='HereCartIconAndSearchbar xl:flex hidden items-center gap-5 '>
          <div className="relative">
            <AiOutlineShoppingCart size={34} />
            <span className="absolute -top-2 flexCenter -right-2 bg-red-400 rounded-full h-6 w-6">1</span>
          </div>
          <div className="flexCenter gap-3 bg-[#1a1a1a] rounded-full px-3 py-2">
            <AiOutlineSearch />
            <input type="text" placeholder="Search Your Pizza/Burgers..." className="outline-none bg-transparent w-60" />
          </div>
        </div>
        <div className='HereLoginAndSignup flex  gap-2 justify-center items-center'>
          <button className="px-6 py-2 border-2 border-[#FF4757]  rounded-full bg-[#FF4757] hover:text-[#FF4757] hover:bg-transparent  transition-all duration-300">
            Sign Up
          </button>
          <button className="px-6 py-2 border-2 border-[#FF4757] text-[#FF4757] rounded-full hover:bg-[#FF4757] hover:text-white transition-colors duration-300">
            Log In
          </button>
        </div>
      </div>
      <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="MobileMenuIcon md:hidden flex items-center">
        {isMobileMenuOpen ? <RxCross1  size={32} /> : <RxHamburgerMenu size={32} />}
      </div>

      {/* mobile menu */}
      {
        isMobileMenuOpen && (
          <div className="MobileMenu md:hidden absolute top-30 left-0 w-full bg-[#1a1a1a] text-white flex flex-col items-center gap-4 py-4">
            <Link to="/" className="text-lg font-medium">Home</Link>
            <Link to="/menu" className="text-lg font-medium">Menu</Link>
            <Link to="/about" className="text-lg font-medium">About</Link>
            <Link to="/contact" className="text-lg font-medium">Contact</Link>
            <div className="flex items-center gap-5 mt-4">
              <div className="relative">
                <AiOutlineShoppingCart size={34} />
                <span className="absolute -top-2 flexCenter -right-2 bg-red-400 rounded-full h-6 w-6">1</span>
              </div>
            </div>
            <div className='HereLoginAndSignup flex  gap-2 justify-center items-center'>
              <button className="px-6 py-2 border-2 border-[#FF4757]  rounded-full bg-[#FF4757] hover:text-[#FF4757] hover:bg-transparent  transition-all duration-300">
                Sign Up
              </button>
              <button className="px-6 py-2 border-2 border-[#FF4757] text-[#FF4757] rounded-full hover:bg-[#FF4757] hover:text-white transition-colors duration-300">
                Log In
              </button>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default NavBar
