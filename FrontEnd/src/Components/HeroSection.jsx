import { GiPizzaSlice } from "react-icons/gi";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section
      style={{
        background:
          "#F8EADB;background: linear-gradient(90deg, rgba(248, 234, 219, 1) 68%, rgba(245, 225, 206, 1) 94%)",
      }}
      className="relative  overflow-hidden"
    >
      <div className="max-w-7xl  mx-auto px-10 py-8 md:py-16 grid md:grid-cols-2 items-center gap-40">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#ebe8e8] rounded-full px-4 py-3 text-sm text-gray-600 shadow-sm mb-6 border border-gray-100">
            More Just Than Pizza{" "}
            <span>
              <img
                className="w-5 h-5 "
                src="./PizzaIconInHS.png"
                alt="Pizza Club Lalian Home Scren"
              />
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl  lg:text-6xl leading-[1.2] font-medium mb-4">
            <span className="BrandTextColor">Pizza</span> and
            <br />
            friends are
            <br />
            all we need
          </h1>
          <p className="text-gray-500 text-sm md:text-base mb-8 max-w-xs leading-relaxed">
            We always make our customer happy by providing as many choices as
            possible
          </p>
          <div className="flex flex-wrap items-center gap-6 md:gap-12">
            <Link
              to={"/menu"}
              className="BoxColors text-white px-10 py-3 rounded-3xl font-bold text-sm hover:bg-[#2d6a4f] transition-colors shadow-lg shadow-green-900/20"
            >
              ORDER ONLINE
            </Link>
            <div className="flex font-semibold items-center gap-4 justify-center ">
              <a
                href="tel:+923472641138"
                className="bg-white flex justify-center items-center w-12 h-12 rounded-full"
              >
                <FaPhone size={23} />
              </a>
              REQUEST A CALL
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-[#EBC597] rounded-full flex items-center justify-center"></div>
          <img
            src="./WomenEatingPizza.png"
            alt="Pizza hero"
            className="w-100 h-100 absolute scale-y-125 scale-x-110 bottom-7 object-top rounded-full"
            style={{ objectPosition: "center top" }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
