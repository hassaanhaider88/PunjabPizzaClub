import React, { useState } from "react";
import BurgerChief from "../assets/BurgerForChief.png";
import ReviewsData from "../dummy/ReviewsData.json";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";

const ReviewSection = () => {
  const [activeReview, setActiveReview] = useState(0);

  const handleNext = () => {
    setActiveReview((prev) => (prev === ReviewsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveReview((prev) => (prev === 0 ? ReviewsData.length - 1 : prev - 1));
  };

  const review = ReviewsData[activeReview];

  return (
    <div className="w-full py-12 px-4 md:px-8 xl:px-16 flex flex-col xl:flex-row items-center gap-10">
      {/* Image Section */}
      <div className="w-full xl:w-[35%] flex justify-center">
        <img
          src={BurgerChief}
          className="w-[80%] md:w-[60%] xl:w-full object-contain"
          alt="Burger"
        />
      </div>

      {/* Review Section */}
      <div className="w-full xl:w-[65%] flex flex-col items-center xl:items-start text-center xl:text-left">
        <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold leading-snug">
          What our customers say about{" "}
          <span className="text-[#FF4757]">Punjab Pizza</span>
        </h1>

        {/* Review Card */}
        <div className="mt-10 w-full bg-black bg-clip-padding backdrop-filter   backdrop-blur-sm  shadow-lg rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative">
          {/* Profile */}
          <img
            src={review.profile}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#FF4757]"
            alt={review.name}
          />

          {/* Content */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl md:text-2xl font-semibold">{review.name}</h2>

            <p className="text-sm text-gray-500 mt-1">⭐ {review.stars} / 5</p>

            <p className="text-sm md:text-base text-gray-400 mt-3 leading-relaxed max-w-xl">
              {review.reviewText}
            </p>
          </div>

          {/* Controls */}
          <div className="absolute bottom-4 right-4 flex gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <BiLeftArrowAlt size={24} />
            </button>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#FF4757] text-white hover:scale-105 transition"
            >
              <BiRightArrowAlt size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
