import React from 'react'
import NavBar from '../Components/NavBar'
import { useSelector } from 'react-redux';
import PromotionCard from "../Components/PromotionCard";
const Promotion = () => {
  const { promotions } = useSelector(
    state => state.promotion
  );

  const activePromotions =
    promotions.filter(p => p.isActive);
  return (
    <>
      <NavBar />
      <div className="min-h-screen px-5 md:px-10 py-6">

        <h1 className="text-3xl font-bold text-center text-[#B84347]">
          Hot Deals & Promotions 🔥
        </h1>

        <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {activePromotions.map(promo => (
            <PromotionCard
              key={promo.id}
              promo={promo}
            />
          ))}

        </div>

      </div>
    </>
  )
}

export default Promotion