/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BACK_END_API } from "../Constants";

import { LazyLoadImage } from 'react-lazy-load-image-component'
import { updateAssingToRider, updateOrderStatus } from "../store/slices/orderSlice";

const AllOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  const user = useSelector((state) => state.user);

  const [localOrders, setLocalOrders] = useState([]);
  const [riders, setRiders] = useState([]);
  const [showRiders, setShowRiders] = useState(false)

  useEffect(() => {
    if (user.role !== "admin") {
      navigate("/");
    }
  }, []);



  useEffect(() => {
    fetchRiders();
  }, []);

  const fetchRiders = async () => {
    try {
      const res = await fetch(`${BACK_END_API}/api/auth/riders`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await res.json();
      console.log(data)
      if (data.success) {
        setRiders(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const orderStatusOptions = [
    "placed",
    "confirmed",
    "preparing",
    "OnTheWay",
    "delivered",
    "cancelled",
  ];

  const paymentStatusOptions = ["paid", "unpaid"];


  const handleOrderStatus = async (id, value) => {
    try {
      const res = await fetch(
        `${BACK_END_API}/api/orders/update-order-status/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ orderStatus: value }),
        }
      );
      const result = await res.json();
      if (!result.success) {
        toast.error(result.message);
      }
      dispatch(updateOrderStatus({ id: result.data._id, paymentStatus: result.data.paymentStatus, orderStatus: result.data.orderStatus }))
      toast.success(result.message)
    } catch (err) {
      toast.error(err.message);
    }
  };


  const handlePaymentStatus = async (id, value) => {
    try {
      const res = await fetch(
        `${BACK_END_API}/api/orders/update-payment-status/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ paymentStatus: value }),
        }
      );

      const result = await res.json();
      if (!result.success) {
        toast.error(result.message);
      }
      dispatch(updateOrderStatus({ id: result.data._id, paymentStatus: result.data.paymentStatus, orderStatus: result.data.orderStatus }))
      toast.success(result.message)
    } catch (err) {
      toast.error(err.message);
    }
  };

  // ✔ Assign Rider
  const handleAssignRider = async (id, riderId) => {
    if (riderId == "") {
      return toast.error("Please Select Rider")
    }
    try {
      const res = await fetch(`${BACK_END_API}/api/orders/assgin-rider/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify({ riderId })
      })
      const result = await res.json();
      if (result.success) {
        dispatch(updateAssingToRider({ id: result.data._id, riderId: result?.data.orderAssignTo }))
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  console.log(orders)

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>
      {showRiders ? "" : <div className="overflow-x-auto">
        <table className="w-full border border-white/10 rounded-lg">
          <thead className="bg-white/5">
            <tr>
              <th className="p-3">Order By</th>
              <th className="p-3">Items</th>
              <th className="p-3">Total</th>
              <th className="p-3">Order Status</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Assign Rider</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-t border-white/10 align-top">

                {/* Order Info */}
                <td className="p-3 text-xs">
                  <p className="">{order.orderBy?.name}</p>
                  <p>{order.orderBy?.email || order.orderBy}</p>
                  <p className="text-gray-400">{order.contactNumber}</p>
                  <p className="text-gray-400">{order.deliveryAddress}</p>
                  <p className="text-gray-400">City : <span className="text-md font-semibold text-green-400">{order.city}</span></p>
                </td>

                {/* Items */}
                <td className="p-3">
                  <div className=" gap-2 grid-cols-1 md:grid-cols-2 w-full grid">
                    {order.items.map((item) => (
                      <div
                        key={item._id}
                        className="flex bg-black/5 gap-2 items-center b p-2 rounded"
                      >
                        <LazyLoadImage
                          src={item.url}
                          alt={item.name}
                          className="w-10 h-10 rounded object-cover"
                        />
                        <div className="text-md">
                          <p>{item.name}</p>
                          <p className="text-gray-400">
                            {item.size} | x{item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </td>

                {/* Price */}
                <td className="p-3 text-[#FF4757] font-bold">
                  Rs.{order.totalPrice}
                </td>

                {/* Order Status */}
                <td className="p-3">
                  <select
                    value={order.orderStatus}
                    onChange={(e) =>
                      handleOrderStatus(order._id, e.target.value)
                    }
                    className="bg-black border border-white/20 p-1 rounded"
                  >
                    {orderStatusOptions.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </td>

                {/* Payment */}
                <td className="p-3">
                  <select
                    value={order.paymentStatus}
                    onChange={(e) =>
                      handlePaymentStatus(order._id, e.target.value)
                    }
                    className="bg-black border border-white/20 p-1 rounded"
                  >
                    {paymentStatusOptions.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </td>

                {/* Assign Rider */}
                <td className="p-3">
                  <select
                    value={order.orderAssignTo || ""}
                    onChange={(e) =>
                      handleAssignRider(order._id, e.target.value)
                    }
                    className="bg-black border border-white/20 p-1 rounded"
                  >
                    <option value="">Select Rider</option>
                    {riders.map((r) => (
                      <option key={r._id} value={r._id}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>}
    </div>
  );
};

export default AllOrder;