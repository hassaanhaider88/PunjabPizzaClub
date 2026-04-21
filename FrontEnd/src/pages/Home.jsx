import { RxVideo } from "react-icons/rx";
import React from 'react'
import BurgerBg from "../assets/BurgerBG.png"
import ChilliBg from "../assets/ChilliBg.png"


const Home = () => {
  return (
    <div className='w-full'>
      <div className="NameImageContainer w-full min-h-screen flex items-start justify-center relative">
        <div className='absolute w-full flexCenter'>
          <h1 className='text-9xl md:text-[400px] tracking-[50px] text-[#797979]  font-bold text-center mt-20'>Punjab</h1>
        </div>
        <div className='absolute z-20 w-full flexCenter'>
          <img src={BurgerBg} className='md:scale-[0.8] scale-[0.6]' alt="Burger" />
        </div>
        <div className='absolute z-10 w-full flexCenter'>
          <img className='w-full scale-[1.1] md:scale-[0.9] h-full object-fill' src={ChilliBg} alt="Chilli" />
        </div>
      </div>
      {/* Section with Text and Elements */} 
      <div className="SectionWithTextEtc relative w-full flex items-center px-10  justify-center z-50 -mt-20">
        <div className='px-10 py-14 flex border-4 border-[#c7bababd]  items-center  flex-col w-full  rounded-[30px] bg-clip-padding backdrop-filter z-50 relative backdrop-blur-sm bg-opacity-10 '>

          <h1 className='text-3xl WholeSiteFont text-white'>Try Our New</h1>
          <h1 className='text-4xl mt-5 font-semibold text-white uppercase'>Cheeze Bluster</h1>
          <p className='text-2xl mt-2 font-semibold tracking-[0.2em] text-white md:w-[90%] w-full text-center'>
            At Punjab, we invite you to embark on a culinary journey that celebrates the rich tapestry of flavors and traditions that define our beloved region. Our menu is a vibrant mosaic of authentic Punjabi dishes, crafted with love and passion by our skilled chefs. From the fiery spices of our signature curries to the comforting warmth of our freshly baked breads, every bite is a celebration of Punjab's culinary heritage. Whether you're craving the bold flavors of our tandoori delights or the comforting embrace of our hearty lentil dishes.
          </p>
          <div className='w-full text-lg mt-4 flex sm:flex-row flex-col justify-evenly items-center'>
            <button className='mt-5 px-10 border-2 border-[#FF4757] py-3 BrandBG text-white font-bold rounded-full hover:opacity-90 transition duration-300'>Order Now!</button>
            <button className='mt-5 px-10 flexCenter gap-4  py-3  font-bold rounded-full hover:bg-[#FF4757] border-2 border-[#FF4757] hover:text-white hover:border-none text-[#FF4757] transition duration-300'><RxVideo size={24} /> How to process order</button>
          </div>

          <div className="flex   justify-evenly mt-20 w-full items-center flex-wrap">
            {/* User Reviews */}
            <div className="NameImgeAndName">
              <div className="Imges flex -space-x-5">
                <img className="w-13 h-13 rounded-full " src="https://i.pinimg.com/originals/c6/f7/57/c6f7570c69360067abc28f058fa4255a.gif" alt="" />
                <img className="w-13 h-13 rounded-full " src="https://i.pinimg.com/originals/c6/f7/57/c6f7570c69360067abc28f058fa4255a.gif" alt="" />
                <img className="w-13 h-13 rounded-full " src="https://i.pinimg.com/originals/c6/f7/57/c6f7570c69360067abc28f058fa4255a.gif" alt="" />
              </div>
              <h1 className="text-white -ml-3 font-bold mt-2 tracking-[0.2em]">1.4K Reviews</h1>
            </div>
            {/* Place */}
            <div className="flex justify-center items-center flex-col">
              <img className="w-13 h-13 rounded-full " src="https://i.pinimg.com/originals/c6/f7/57/c6f7570c69360067abc28f058fa4255a.gif" alt="" />
              <h1 className="text-white font-bold mt-2 tracking-[0.2em]">12+ Locations</h1>

            </div>
            {/* items */}
            <div className="flex justify-center items-center flex-col">
              <img className="w-13 h-13 rounded-full " src="https://i.pinimg.com/originals/c6/f7/57/c6f7570c69360067abc28f058fa4255a.gif" alt="" />
              <h1 className="text-white font-bold mt-2 tracking-[0.2em]">129+ items</h1>

            </div>
          </div>
        </div>

      </div>
      <div>
        hasdklfj
      </div>
    </div>
  )
}

export default Home
