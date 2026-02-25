import React from "react";

const PromotionCard = ({ promo }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        src={promo.banner}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-[#B84347]">
          {promo.title}
        </h2>

        <p className="text-gray-600">
          {promo.description}
        </p>

        <p className="mt-2 font-semibold">
          {promo.discount}% OFF
        </p>

        <div className="mt-3 flex justify-between items-center">
          <span className="bg-black text-white px-3 py-1 rounded-full">
            {promo.coupon}
          </span>

          <button className="BoxColors px-4 py-2 text-white rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;