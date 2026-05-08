import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Footer = ({ isShow }) => {
  const year = new Date().getFullYear();
  return (
    isShow && (
      <>
        <div className="flex h-fit flex-col md:flex-row justify-evenly md:gap-30 gap-5 items-center w-full">
          <div className="md:w-1/2 w-full flexCenter">
            <LazyLoadImage
              src="https://res.cloudinary.com/dcrkdgbd9/image/upload/v1777964324/PPCLLogo_bvoffl.png"
              alt="Punjab Pizza Club Lalian"
              className="w-1/2 h-full"
            />
          </div>
          <div className="md:w-1/2 w-full gap-2 text-lg flex-col flex justify-center items-center">
            <div
              onClick={() => window.open("https://wa.com/+923437117831")}
              className="flex justify-start px-10 w-full items-center py-2 gap-5"
            >
              <BsWhatsapp size={35} /> <span>+92 343 7117831</span>
            </div>
            <div
              onClick={() => window.open("https://wa.com/+923437117831")}
              className="flex justify-start px-10 w-full items-center py-2 gap-5"
            >
              <MdOutlineMail size={35} />{" "}
              <span>hassaanhaider088@gmail.com</span>
            </div>
            <div
              onClick={() => window.open("https://wa.com/+923437117831")}
              className="flex justify-start px-10 w-full items-center py-2 gap-5"
            >
              <GoLocation size={35} /> <span>Lalian,Chiniote Dis.</span>
            </div>
            <div
              onClick={() => window.open("https://wa.com/+923437117831")}
              className="flex justify-start px-10 w-full items-center py-2 gap-5"
            >
              <FaTiktok size={35} /> <span>@PunjabPizzaClub</span>
            </div>
            <div
              onClick={() => window.open("https://wa.com/+923437117831")}
              className="flex justify-start px-10 w-full items-center py-2 gap-5"
            >
              <FaFacebookF size={35} /> <span>@PunjabPizza</span>
            </div>
          </div>
        </div>
        <div className="border-t mb-2 border-gray-700  pt-5 mt-3 text-center text-gray-400 text-sm">
          <p>
            &copy; {year} Punbjab Pizza Club. All rights reserved. |{" "}
            <Link to="/privacy" className="hover:text-accent transition">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/tofs" className="hover:text-accent transition">
              Terms of Service
            </Link>
          </p>
        </div>
      </>
    )
  );
};

export default Footer;
