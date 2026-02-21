import React from "react";

const DeliveryServiceSection = () => {
  return (
    <section className="py-12 bg-linear-to-b from-[#FAF2E9] via-[#FAF2E9] to-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 items-start">
        <div>
          <p className="text-lg font-bold uppercase tracking-widest BrandTextColor mb-2">
            What we serve
          </p>
          <h2 className="text-4xl font-semibold text-gray-800 mb-2">
            Our Delivery Service
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We Currently Deliver Only In{" "}
            <span className="block BrandTextColor font-bold">Lalian</span>
          </p>
        </div>
        <div className="flex flex-col mb-5 items-center text-center">
          <div className="">
            <img className="w-30 h-30" src="./DeliveryTime.svg" alt="" />
          </div>
          <p className="font-bold text-gray-700 text-sm">Delivery time:</p>
          <p className="text-black font-black text-lg">12:00 PM – 12:00 AM</p>
        </div>
        <div className="flex flex-col mt-12 items-center text-center">
          <div className="">
            <img className="w-30 h-30" src="./FreeDelivery.svg" alt="" />
          </div>
          <p className="font-bold text-gray-700 text-sm">Free delivery</p>
          <p className="text-gray-500 text-sm">Over Minimum 1k Order</p>
        </div>
        <div className="flex flex-col mb-5 items-center text-center">
          <div className="">
            <img className="w-30 h-30" src="./TimeOfDelivery.svg" alt="" />
          </div>
          <p className="font-bold text-gray-700 text-sm">Time of delivery:</p>
          <p className="text-black font-black text-lg">20 – 60 min</p>
        </div>
      </div>
    </section>
  );
};

export default DeliveryServiceSection;
