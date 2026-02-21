import { RxCross1 } from "react-icons/rx";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import React from "react";

const CartDiv = ({ setIsCartOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Drawer */}
      <div className="relative ml-auto w-full md:w-96 h-full bg-white shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-400 hover:text-gray-800 text-2xl"
            aria-label="Close Cart"
          >
            <RxCross1 />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {/* Map your cart items here */}
          {[1, 2, 2, 3, 4].map((cart, idx) => (
            <div
              key={idx}
              className="flex gap-4 border rounded-lg py-1 px-3 hover:shadow-sm transition"
            >
              <img
                src="https://i.pinimg.com/originals/cc/ed/f0/ccedf0c0489a69a53238f489ca776eba.jpg"
                alt="Product"
                className="w-16 h-16  object-cover rounded-full"
              />

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">
                    Product Name
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">$120</p>
                </div>

                <div className="flex cursor-pointer items-center gap-2 mt-1">
                  <AiOutlineMinusCircle
                    className="hover:scale-95 duration-200 transition-all"
                    size={25}
                  />
                  <span className="text-gray-700 text-md font-semibold">1</span>
                  <AiOutlinePlusCircle
                    className="hover:scale-95 duration-200 transition-all"
                    size={25}
                  />
                </div>
              </div>

              <button className="text-red-500 cursor-pointer hover:text-red-600 text-sm self-start">
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t px-6 py-4">
          <div className="flex justify-between font-medium text-gray-800 mb-3">
            <span>Subtotal</span>
            <span>$120</span>
          </div>

          <button className="w-full BoxColors cursor-pointer text-white py-3 rounded-lg font-semibold transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDiv;
