import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";


const SinglePizzaCart = ({ pizza }) => {
  const [SelectedSize, setSelectedSize] = useState("Large");
  return (
    <div className="bg-[#FAF2E9] rounded-2xl min-h-87.5 p-4 relative group hover:shadow-2xl cursor-pointer transition-all duration-300">
      {pizza.tag && (
        <span
          className={`absolute top-3 left-3 z-10 text-white text-xs font-bold px-2 py-0.5 rounded-full ${pizza.tag === "HIT" ? "bg-red-500" : "bg-[#2d6a4f]"}`}
        >
          {pizza.tag}
        </span>
      )}

      <div className="flex justify-center mb-3">
        <img
          src={`https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=200&h=200&fit=crop&auto=format`}
          alt={pizza.name}
          className="w-36 h-36 object-cover rounded-full"
          style={{
            filter: "saturate(1.2)",
          }}
        />
      </div>
      <p className="text-xs text-gray-400 mb-1">
        {pizza.weight} · {pizza.size}
      </p>
      <h3 className="font-bold text-gray-800 text-sm mb-1">{pizza.name}</h3>
      <p className="text-xs text-gray-400 mb-3 leading-relaxed line-clamp-2">
        {pizza.desc}
      </p>
      <p className="font-semibold text-gray-800">Select Your Size</p>
      <div className="SelectSize mt-3 mb-5 w-full flex justify-evenly items-center">
        <button
          onClick={() => setSelectedSize("Large")}
          className={`${SelectedSize === "Large" ? "bg-[#AF2A2F] border-2 border-[#1A3C2E] rounded-full text-white" : "bg-[#1A3C2E] text-white rounded-full"} py-2 px-5 border `}
        >
          Large
        </button>
        <button
          onClick={() => setSelectedSize("Medium")}
          className={`${SelectedSize === "Medium" ? "bg-[#AF2A2F] border-2 border-[#1A3C2E] rounded-full text-white" : "bg-[#1A3C2E] text-white rounded-full"} py-2 px-5 border `}
        >
          Medium
        </button>
        <button
          onClick={() => setSelectedSize("Small")}
          className={`${SelectedSize === "Small" ? "bg-[#AF2A2F] border-2 border-[#1A3C2E] rounded-full text-white" : "bg-[#1A3C2E] text-white rounded-full"} py-2 px-5 border `}
        >
          Small
        </button>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-gray-800">{pizza.price} uah</span>
        <button className="flex items-center gap-1.5 bg-[#1a3c2e] text-white text-xs font-semibold px-10 py-3 rounded-full hover:bg-[#2d6a4f] transition-colors">
          <FiShoppingCart size={20} /> ORDER
        </button>
      </div>
    </div>
  );
};

export default SinglePizzaCart;
