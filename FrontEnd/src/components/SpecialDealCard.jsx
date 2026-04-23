import React from "react";

const SpecialDealCard = ({ deal }) => {
  const handleDealClick = (deal) => {
    // Logic to handle the deal click, e.g., navigate to the deal page or add to cart
    console.log(`Deal clicked: ${deal.title} for Rs.${deal.price}`);
  };
  return (
    <div className="flex shrink-0 items-center justify-center  p-6">
      <div className="bg-[#1a1a1a] rounded-[2.5rem] p-6 flex flex-col items-center shadow-2xl transition-transform cursor-pointer">
        {/* Deal Image */}
        <div className="relative rounded-2xl w-80 h-80 overflow-hidden  drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
          <img
            src={deal.image}
            alt={deal.title}
            width="250"
            height="250"
            className="w-full hover:scale-110 duration-300 transition-all h-full object-cover border-4 border-transparent hover:border-yellow-500/20"
          />
        </div>

        {/* Title */}
        <h2 className="text-white ItalicFont text-3xl mt-3 font-bold text-center mb-2">
          {deal.title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-xs text-center mb-6 px-2 leading-relaxed">
          {deal.description}
        </p>

        {/* Price */}
        <div className="flex deals-center gap-3 mb-6">
          <span className="text-[#FF4757] text-3xl font-black">
            Rs.{deal.price}
          </span>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => handleDealClick(deal)}
          className="w-full bg-[#FF4757] hover:bg-[#FF4757]/80 text-white font-black py-4 rounded-full transition-all transform active:scale-95 shadow-[0_10px_20px_rgba(234,179,8,0.2)]"
        >
          Grab Deal
        </button>
      </div>
    </div>
  );
};

export default SpecialDealCard;
