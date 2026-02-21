import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const SinglePizzaCart = ({ pizza }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="bg-white rounded-2xl p-4 relative group hover:shadow-xl transition-all duration-300">
      {pizza.tag && (
        <span
          className={`absolute top-3 left-3 z-10 text-white text-xs font-bold px-2 py-0.5 rounded-full ${pizza.tag === "HIT" ? "bg-red-500" : "bg-[#2d6a4f]"}`}
        >
          {pizza.tag}
        </span>
      )}
      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-3 right-3 z-10 text-gray-300 hover:text-red-400 transition-colors"
      >
        <FaHeart className={liked ? "text-red-400" : ""} />
      </button>
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
      <div className="flex items-center justify-between">
        <span className="font-bold text-gray-800">{pizza.price} uah</span>
        <button className="flex items-center gap-1.5 bg-[#1a3c2e] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-[#2d6a4f] transition-colors">
          <FaShoppingCart size={11} /> ORDER
        </button>
      </div>
    </div>
  );
};

export default SinglePizzaCart;
