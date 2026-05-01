/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { BACK_END_API } from '../Constants';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

import OrderCardForUser from '../components/OrderCartForUser';


const UserProfile = () => {
  const [userOrdrers, setUserOrders] = useState([])
  const user = useSelector((state) => state.user);


  const fetchUsersOrders = async () => {
    try {
      const res = await fetch(`${BACK_END_API}/api/orders/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`
        }
      });
      const result = await res.json();
      console.log(result)
      if (result.success) {
        toast.success(result.message)
        setUserOrders(result.data)
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchUsersOrders();
  }, [])

  const handeUserCenelClcik = async (orderId) => {
    if (confirm("Are Your Sure to Cancel Order?")) {
      const res = await fetch(`${BACK_END_API}/api/orders/cancel/${orderId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      });
      const result = await res.json();
      console.log(result)
      if (result.success) {
        setUserOrders(() => userOrdrers?.filter(order => order._id !== orderId))
        toast.success(result.message)
      } else {
        toast.error(result.message)
      }
    }
  }
  return (
    <div className='w-full min-h-screen py-10 px-5'>
      <p className='text-3xl mb-4 font-semibold'>User Orders</p>
      {
        userOrdrers.length > 0 ? userOrdrers?.map((order) => {
          return <OrderCardForUser order={order} key={order._id} onCancel={handeUserCenelClcik} />
        }) : <div className="w-full flex-col h-full flexCenter">
          <img
            src="https://i.pinimg.com/originals/17/08/90/170890e64f751e6c7926f851719d4523.gif"
            className="w-[40vh] h-[40vh]"
            alt="Page not found in Punjab Pizza Club"
          />
          <h1 className="text-4xl mt-3">Ordre Not Found 404</h1>
        </div>
      }
    </div>
  )
}

export default UserProfile
