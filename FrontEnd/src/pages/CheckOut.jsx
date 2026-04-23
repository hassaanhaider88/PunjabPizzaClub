import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearWholeCart } from "../store/slices/userCartSlice";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.userCart.cartItems);

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [phone, setPhone] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handlePlaceOrder = () => {
    if (!phone) return alert("Phone number required");

    if (paymentMethod === "easypaisa" && !transactionId) {
      return alert("Enter transaction ID");
    }

    setOrderPlaced(true);
    dispatch(clearWholeCart());
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#D13E4B]">
            Order Placed Successfully
          </h1>
          <p className="text-gray-400 mt-2">Thank you for your order</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* LEFT SIDE - FORM */}
        <div className="bg-[#141414] p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-4">Customer Details</h2>

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full mb-4 p-3 rounded-lg bg-black border border-gray-700 outline-none"
          />

          <h2 className="text-xl font-bold mb-3">Payment Method</h2>

          <div className="flex flex-col gap-3 mb-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              Cash on Delivery
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="easypaisa"
                checked={paymentMethod === "easypaisa"}
                onChange={() => setPaymentMethod("easypaisa")}
              />
              EasyPaisa (Online Payment)
            </label>
          </div>

          {/* Dummy EasyPaisa UI */}
          {paymentMethod === "easypaisa" && (
            <div className="bg-black p-4 rounded-xl border border-[#D13E4B] mb-4">
              <h3 className="text-[#D13E4B] font-bold mb-2">
                EasyPaisa Payment
              </h3>

              <p className="text-gray-400 text-sm mb-2">
                Send payment to: 03XX-XXXXXXX
              </p>

              <input
                type="text"
                placeholder="Enter Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className="w-full p-3 rounded-lg bg-[#141414] border border-gray-700 outline-none"
              />
            </div>
          )}

          <button
            onClick={handlePlaceOrder}
            className="w-full bg-[#D13E4B] py-3 rounded-xl font-bold"
          >
            Place Order
          </button>
        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div className="bg-[#141414] p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex flex-col gap-4 max-h-75 overflow-y-auto">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex justify-between border-b border-gray-800 pb-2"
              >
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-gray-400 text-sm">
                    {item.size !== "default" ? item.size : ""} x {item.quantity}
                  </p>
                </div>

                <p className="text-[#D13E4B] font-bold">
                  Rs.{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-[#D13E4B]">Rs.{totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
