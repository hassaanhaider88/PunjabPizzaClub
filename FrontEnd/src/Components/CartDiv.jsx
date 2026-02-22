import { RxCross1 } from "react-icons/rx";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../Store/cartSlice";
import React from "react";
import { Link } from "react-router-dom"

const CartDiv = ({ setIsCartOpen }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  // Subtotal should use selectedVariant price
  const subtotal = cartItems.reduce(
    (total, item) => total + item.selectedVariant.price * item.quantity,
    0
  );

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
          {cartItems.length === 0 ? (
            <div className="w-full h-full flex-col flex justify-center items-center">
              <img
                src="./EmptyCart.png"
                className="bg-center rounded-3xl"
                alt="Empty cart"
              />
              <p className="text-sm text-gray-700 mt-1">
                Please Add Something in Cart
              </p>
            </div>
          ) : (
            cartItems.map((cart) => (
              <div
                key={cart.id + cart.selectedVariant.size} // composite key
                className="flex gap-4 border rounded-lg py-1 px-3 hover:shadow-sm transition"
              >
                <img
                  src={cart.selectedVariant.image}
                  alt={cart.name}
                  className="w-16 h-16 object-cover rounded-full"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800 text-sm">
                      {cart.name} ({cart.selectedVariant.size})
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Rs {cart.selectedVariant.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    <AiOutlineMinusCircle
                      size={25}
                      className="cursor-pointer"
                      onClick={() =>
                        dispatch(decreaseQty({ id: cart.id, size: cart.selectedVariant.size }))
                      }
                    />

                    <span className="text-md font-semibold">{cart.quantity}</span>

                    <AiOutlinePlusCircle
                      size={25}
                      className="cursor-pointer"
                      onClick={() =>
                        dispatch(increaseQty({ id: cart.id, size: cart.selectedVariant.size }))
                      }
                    />
                  </div>
                </div>

                <button
                  onClick={() =>
                    dispatch(removeFromCart({ id: cart.id, size: cart.selectedVariant.size }))
                  }
                  className="text-red-500 hover:text-red-600 text-sm self-start"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t px-6 py-4">
            <div className="flex justify-between font-medium text-gray-800 mb-3">
              <span>Subtotal</span>
              <span>Rs.{subtotal}</span>
            </div>

            <Link to="/checkout" className="w-full flex justify-center items-center">
              <button className="w-fit rounded-full block text-center BoxColors cursor-pointer text-white py-3 px-4 font-semibold transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDiv;
