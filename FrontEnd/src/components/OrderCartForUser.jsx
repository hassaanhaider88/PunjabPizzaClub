import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"

const OrderCardForUser = ({ order, onCancel }) => {
    return (
        <div className="bg-[#1a1a1a] p-5 md:p-6 rounded-2xl shadow-xl mb-6 border border-white/10">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5">
                <h2 className="text-white font-bold text-lg break-all">
                    Order ID: {order._id}
                </h2>

                <div className="flex gap-3">
                    <p>Current Order Status</p>
                    <span
                        className={`px-3 py-1 text-xs rounded-full border w-fit ${order.orderStatus === "placed"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500"
                            : order.orderStatus === "cancelled"
                                ? "bg-red-500/20 text-red-400 border-red-500"
                                : "bg-greejmv  n-500/20 text-green-400 border-green-500"
                            }`}
                    >
                        {order.orderStatus}
                    </span>
                </div>
            </div>


            <div className="flex flex-col md:flex-row gap-6">


                <div className="flex-1 space-y-3">
                    {order.items.map((item) => (
                        <div
                            key={item._id}
                            className="flex items-center gap-4 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition"
                        >
                            <LazyLoadImage
                                src={item.url}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-lg"
                            />

                            <div className="flex-1">
                                <h3 className="text-white font-semibold text-md md:text-base">
                                    {item.name}
                                </h3>
                                <p className="text-gray-400 text-md">
                                    Size: {item.size} | Qty: {item.quantity}
                                </p>
                            </div>

                            <div className="text-[#FF4757] font-bold text-sm md:text-base">
                                Rs.{item.price}
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT → Order Info */}
                <div className="w-full md:w-70 bg-white/5 p-4 rounded-xl space-y-2 text-sm text-gray-300">
                    <p>
                        <span className="text-white">Payment:</span>{" "}
                        {order.paymentMethod == "COD" ? "Cash On Delivery" : "EasyPaisa"}
                    </p>

                    <p>
                        <span className="text-white">Phone:</span>{" "}
                        {order.contactNumber}
                    </p>

                    <p>
                        <span className="text-white">Address:</span>{" "}
                        {order.deliveryAddress}, {order.street}, {order.city}
                    </p>

                    <div className="pt-2 border-t border-white/10 mt-2">
                        <p className="text-white font-semibold">
                            Total:{" "}
                            <span className="text-[#FF4757] text-lg">
                                Rs.{order.totalPrice}
                            </span>
                        </p>
                    </div>

                    {/* Cancel Button */}
                    {order.orderStatus === "placed" && (
                        <button
                            onClick={() => onCancel(order._id)}
                            className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-bold transition"
                        >
                            Cancel Order
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderCardForUser;