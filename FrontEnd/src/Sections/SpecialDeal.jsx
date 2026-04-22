import React, { useState } from "react";
import DealData from "../dummy/DealsData.json";
import SpecialDealCard from "../components/SpecialDealCard";

const SpecialDeal = () => {
  const [specialDeals] = useState(DealData);
  return (
    <div className="w-full py-12 px-5 md:px-10 mt-5">
      <h1 className="text-3xl">Special Offers</h1>
      <div className="SpecialOffersContainer w-full gap-10 mt-5 rounded-[30px] bg-clip-padding backdrop-filter flex-wrap backdrop-blur-sm bg-opacity-10 border-2 border-[#484848] flex items-center justify-center">
        {specialDeals.map((deal, idx) => (
          <SpecialDealCard deal={deal} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default SpecialDeal;
