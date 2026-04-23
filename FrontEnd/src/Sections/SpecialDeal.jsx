import React, { useState } from "react";
import DealData from "../dummy/DealsData.json";
import SpecialDealCard from "../components/SpecialDealCard";

const SpecialDeal = () => {
  const [specialDeals] = useState(DealData);
  return (
    <div className="w-full py-12 px-5 md:px-10 mt-5">
      <h1 className="text-3xl">Special Offers</h1>
      <div className="SpecialOffersContainer grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-12 mt-10 w-full">
        {specialDeals.map((deal, idx) => (
          <SpecialDealCard deal={deal} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default SpecialDeal;
