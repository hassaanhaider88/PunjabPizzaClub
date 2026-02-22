import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { addToCart } from "../Store/cartSlice";

const SinglePizzaCard = ({ pizza }) => {
  const dispatch = useDispatch();

 const handleAddToCart = () => {
    dispatch(addToCart({ ...pizza, selectedVariant }));
    toast.success("Added to Cart Successfully");
};

  // always safe now
  const [selectedVariant, setSelectedVariant] = useState(
    pizza.sizesAndPrice[0]
  );

  // check if real sizes exist
  const showSizeSelector =
    pizza.sizesAndPrice.length > 1 ||
    pizza.sizesAndPrice[0].size !== null;

  return (
    <div className="bg-[#efd0abe7] flex flex-col justify-evenly items-center rounded-2xl p-4 relative hover:shadow-2xl transition-all">

      {/* IMAGE */}
      <div className="flex justify-center items-baseline mb-3">
        <img
          src={selectedVariant.image}
          alt={pizza.name}
          className="w-36 h-36 object-cover rounded-full"
        />
      </div>

      {/* TITLE */}
      <h3 className="font-bold text-gray-800 text-sm">
        {pizza.name}
      </h3>

      {/* DESC */}
      {pizza.desc && (
        <p className="text-xs text-gray-400 mb-3 line-clamp-2">
          {pizza.desc}
        </p>
      )}

      {/* SIZE SELECTOR */}
      {showSizeSelector && (
        <>
          <p className="font-semibold text-sm mt-2">
            Select Size
          </p>

          <div className="flex gap-2 flex-wrap mt-3 mb-5">
            {pizza.sizesAndPrice.map((variant, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelectedVariant(variant)
                }
                className={`px-4 py-2 rounded-full text-xs border transition-all
                ${selectedVariant.size === variant.size
                    ? "text-black scale-105 border-[#AF2A2F]"
                    : "bg-[#AF2A2F] text-white"
                  }`}
              >
                {variant.size ?? "Regular"}
              </button>
            ))}
          </div>
        </>
      )}

      {/* PRICE + ORDER */}
      <div className="flex w-full justify-between items-center">
        <span className="font-bold text-gray-800">
          Rs. {selectedVariant.price}
        </span>

        <button onClick={handleAddToCart} className="flex items-center gap-2 bg-[#AF2A2F] text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-[#af2a2eb2]">
          <FiShoppingCart size={18} />
          ORDER
        </button>
      </div>

    </div>
  );
};

export default SinglePizzaCard;