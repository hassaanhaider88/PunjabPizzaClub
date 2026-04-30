import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/userCartSlice";
import { toast } from "react-toastify";

const SpecialDealCard = ({ deal }) => {
  const dispatch = useDispatch();

  const handleDealClick = () => {
    console.log(deal)
    if (!deal.isActive) {
      toast.error("This deal is no longer available");
      return;
    }

    dispatch(
      addToCart({
        id: deal._id,
        name: deal.title,
        url: deal.image,
        price: deal.price,
        size: "Special Deal",
      })
    );

    toast.success(`${deal.title} Almost Done!`);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return null;
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  return (
    <div className="flex shrink-0 items-center justify-center p-6">
      <div className="bg-[#1a1a1a] rounded-[2.5rem] p-6 px-10 flex flex-col items-center shadow-2xl transition-transform cursor-pointer">

        {/* Deal Image */}
        <div className="relative rounded-2xl w-80 h-80 overflow-hidden drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
          <LazyLoadImage
            src={deal.image}
            alt={deal.title}
            className="w-full hover:scale-110 duration-300 transition-all h-full object-cover border-4 border-transparent hover:border-yellow-500/20"
          />

          {/* Status Badge */}
          {!deal.isActive && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
              UnActive </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-white ItalicFont text-3xl mt-3 font-bold text-center mb-2">
          {deal.title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-xs text-center mb-3 px-2 leading-relaxed">
          {deal.description}
        </p>

        {/* Expiry */}
        {deal.validUntile && (
          <p className="text-yellow-400 text-xs mb-3">
            Valid till: {formatDate(deal.validUntile)}
          </p>
        )}

        {/* Price */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#FF4757] text-3xl font-black">
            Rs.{deal.price}
          </span>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => handleDealClick()}
          disabled={!deal.isActive}
          className={`w-full font-black py-4 rounded-full transition-all transform active:scale-95 shadow-[0_10px_20px_rgba(234,179,8,0.2)]
            ${deal.isActive
              ? "bg-[#FF4757] hover:bg-[#FF4757]/80 text-white" : "bg-gray-600 cursor-not-allowed"

            }`}
        >
          {deal.isActive ? "Grab Deal" : "Unavailable"}
        </button>
      </div>
    </div>
  );
};

export default SpecialDealCard;