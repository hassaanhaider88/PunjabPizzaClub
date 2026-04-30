import React, { useState } from "react";
import SinglePizzaCard from "../components/SinglePizzaCard";
import { useSelector } from "react-redux";
import { AllCategory } from "../Constants";

import ErrorInFetchingProdcuts from "../components/ErrorInFetchingProdcuts";
import ProductLoading from "../components/ProductLoading"

const MenuSection = () => {
  const [activeMenu, setActiveMenu] = useState("Pizza");

  const products = useSelector((state) => state.products);

  // const [allMenuData,setAllMenuData] = useState(products?.items);
  return (
    <div className="w-full py-12 px-5 md:px-10 mt-5 flex flex-col items-start">
      <h1 className="text-3xl">Menu</h1>
      {/* Menu Filters will be displayed here */}

      <div className="flex  text-xl font-semibold items-center w-full justify-evenly flex-wrap gap-5 mt-8">
        {AllCategory?.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveMenu(category)}
            className={`px-12 py-4 rounded-[10px] border-2 border-[#FF4757] ${activeMenu === category ? "bg-[#FF4757] text-white" : "text-[#FF4757] hover:bg-[#FF4757] hover:text-white transition duration-300"}`}
          >
            {category}
          </button>
        ))}

        {products?.loading ? (
          <ProductLoading />
        ) : (
          <div className="ShowActiveMenuItems grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-12 mt-10 w-full">
            {products?.items.map((item, index) => (
              <SinglePizzaCard
                key={index}
                activeMenu={activeMenu}
                item={item}
              />
            ))}
          </div>
        )}
        {products?.isError && <ErrorInFetchingProdcuts />}
      </div>
    </div>
  );
};

export default MenuSection;
