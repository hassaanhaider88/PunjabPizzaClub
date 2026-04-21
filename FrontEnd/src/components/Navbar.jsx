import { HiOutlineUserCircle } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FaLuggageCart } from "react-icons/fa";
import React, { useState } from 'react'
import Logo from "../assets/PPCLLogo.png"
import CartContainer from "./CartContainer"
import UserOptions from "./UserOptions"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenUserOption, setIsOpenUserOption] = useState(false)
  const user = useSelector(state => state.user)


  const navigate = useNavigate();
  const location = useLocation();


  const LP = location.pathname;
  return (
    <div className='justify-between flex items-center  px-10'>
      <div className="LogoContainer flex justify-center items-center w-[20%] md:w-[10%]">
        <img src={Logo} alt="Punjab Pizza CClub Logo" className='w-30 bg-cover' />
      </div>
      <div className="NavLinksContainer md:flex hidden ThreeDivs gap-3 justify-evenly items-center w-[80%] md:w-[90%]">
        <div className='flex gap-5 text-lg font-medium'>
          <Link className={LP == "/" ? "BrandColor relative" : ""} to="/">Home <span className={`absolute -bottom-1 ${LP == "/" ? "w-full" : ""}  left-0 h-0.5 bg-red-500`}></span></Link>

          <Link className={LP == "/menu" ? "BrandColor relative" : ""} to="/menu" >Menu <span className={`absolute -bottom-1 ${LP == "/menu" ? "w-full" : ""}  left-0 h-0.5 bg-red-500`}></span></Link>
          <Link className={LP == "/about" ? "BrandColor relative" : ""} to="/about">About <span className={`absolute -bottom-1 ${LP == "/about" ? "w-full" : ""}  left-0 h-0.5 bg-red-500`}></span></Link>
          <Link className={LP == "/contact" ? "BrandColor relative" : ""} to="/contact">Contact<span className={`absolute -bottom-1 ${LP == "/contact" ? "w-full" : ""}  left-0 h-0.5 bg-red-500`}></span></Link>
        </div>
        <div className='HereCartIconAndSearchbar xl:flex hidden items-center gap-5 '>
          <div onClick={() => setIsOpenCart(!isOpenCart)} className="relative">
            <AiOutlineShoppingCart size={34} />
            <span className="absolute -top-2 flexCenter -right-2 bg-red-400 rounded-full h-6 w-6">1</span>
          </div>
          <div className="flexCenter gap-3 bg-[#1a1a1a] rounded-full px-3 py-2">
            <AiOutlineSearch />
            <input type="text" placeholder="Search Your Pizza/Burgers..." className="outline-none bg-transparent w-60" />
          </div>
        </div>
        {user.isLogged ? <div onClick={() => setIsOpenUserOption(!isOpenUserOption)}> <HiOutlineUserCircle size={34} /> </div> : <div className='HereLoginAndSignup flex  gap-2 justify-center items-center'>
          <button onClick={() => navigate("auth")} className="px-6 py-2 border-2 border-[#FF4757]  rounded-full bg-[#FF4757] hover:text-[#FF4757] hover:bg-transparent  transition-all duration-300">
            Sign Up
          </button>
          <button onClick={() => navigate("auth")} className="px-6 py-2 border-2 border-[#FF4757] text-[#FF4757] rounded-full hover:bg-[#FF4757] hover:text-white transition-colors duration-300">
            Log In
          </button>
        </div>}
      </div>
      <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="MobileMenuIcon md:hidden flex items-center">
        {isMobileMenuOpen ? <RxCross1 size={32} /> : <RxHamburgerMenu size={32} />}
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
              <div onClick={() => setIsOpenCart(!isOpenCart)} className="relative">
                <AiOutlineShoppingCart size={34} />
                <span className="absolute -top-2 flexCenter -right-2 bg-red-400 rounded-full h-6 w-6">1</span>
              </div>
            </div>
            {user.isLogged ? <div onClick={() => setIsOpenUserOption(!isOpenUserOption)}> <HiOutlineUserCircle size={34} /> {
              isOpenUserOption && <UserOptions />
            } </div> : <div className='HereLoginAndSignup flex  gap-2 justify-center items-center'>
              <button onClick={() => navigate("auth")} className="px-6 py-2 border-2 border-[#FF4757]  rounded-full bg-[#FF4757] hover:text-[#FF4757] hover:bg-transparent  transition-all duration-300">
                Sign Up
              </button>
              <button onClick={() => navigate("auth")} className="px-6 py-2 border-2 border-[#FF4757] text-[#FF4757] rounded-full hover:bg-[#FF4757] hover:text-white transition-colors duration-300">
                Log In
              </button>
            </div>}
          </div>
        )
      }
      {
        isOpenCart && <CartContainer isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
      }
      {
        isOpenUserOption && <UserOptions setIsOpenUserOption={setIsOpenUserOption} isOpenUserOption={isOpenUserOption} isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
      }
    </div>
  )
}

export default NavBar
