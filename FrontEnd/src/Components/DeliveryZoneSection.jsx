import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";

const DeliveryZoneSection = () => {
  return (
    <section className="w-full bg-linear-to-b from-white via-[#f4ebe3] to-[#f4ebe3] py-16 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative  py-3 px-2 h-80 rounded-2xl overflow-hidden shadow-lg">
          {/* Map */}
          <img
            src="https://i.pinimg.com/originals/e4/26/4a/e4264af50836a4d71345ad3c6362a1bc.png"
            className=" bg-cover w-full h-full"
            alt="Maps goes here"
          />

          {/* Floating Location Card */}
          <div className="absolute top-5 left-5 bg-white rounded-xl shadow-md py-3 px-2 flex gap-3 items-center">
            <img
              src="./Google-Maps.png"
              alt="location"
              className="w-12 h-8 object-cover rounded-lg"
            />
            <div>
              <a
                href="https://maps.app.goo.gl/hJKxP76Pv37yszRs7" // 31.823775910447818, 72.80149055755028
                className="flex hover:text-blue-500 items-center gap-1 cursor-pointer"
              >
                <p className="font-semibold text-sm">
                  Punjab Pizza CLub Lalian
                </p>
              </a>
            </div>
          </div>

          {/* Address Check Box */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full px-4 py-3 flex items-center gap-4">
            <div className="text-sm">
              <p className="font-semibold">Check your address</p>
              <span className="text-gray-500 text-xs">For delivery zone</span>
            </div>

            <button className="flex items-center gap-1 bg-[#b8434763] text-[#B84347] px-4 py-1 rounded-full font-semibold text-sm">
              <IoLocationSharp />
              CHECK
            </button>
          </div>
        </div>


        <div>
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
            Delivery Zones
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-5">
            Punjab Pizza Club Lalian
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 max-w-lg">
            We currently deliver within the highlighted area. But we are willing
            to make concessions on larger orders. Check with the manager for
            details.
          </p>

          {/* Phone Button */}
          <button className="flex items-center gap-3 bg-[#f6d6c2] text-[#c84b11] px-6 py-3 rounded-full font-semibold shadow-sm hover:scale-105 transition">
            <FiPhoneCall />
            (098) 765 43 21
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryZoneSection;
