import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import SimpleMap from "./MapsComponent";

const DeliveryZoneSection = () => {
  return (
    <section className="w-full  md:px-20 px-5 bg-linear-to-b from-white via-[#f4ebe3] to-[#f4ebe3] py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/*  */}

        <SimpleMap />
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
