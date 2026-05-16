// /* eslint-disable react-hooks/exhaustive-deps */
// import { IoMdNotificationsOutline } from "react-icons/io";
// import React from "react";
// import { useEffect } from "react";
// import { BACK_END_API } from "../Constants";
// import socket from "../utils/connectToSocket";
// import { useDispatch, useSelector } from "react-redux";
// import { setNotifications } from "../store/slices/notificationSlice";

// const NotificationIcon = ({ setShowNotificationCard }) => {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const notificationSlice = useSelector((state) => state.notifications);
//   console.log(notificationSlice, "Global State");

//   useEffect(() => {
//     if (!user?._id) return;

//     const onConnect = () => {
//       socket.emit("join", user?.email);
//     };

//     socket.on("connect", onConnect);
//     socket.on("connected", (data) => {
//       console.log(data, "data from backend");
//       dispatch(setNotifications(data.data));
//     });
//     socket.on("notification", (data) => {
//       dispatch(setNotifications((prev) => [data, ...prev]));
//     });

//     return () => {
//       socket.off("connect", onConnect);
//       socket.off("connected");
//       socket.off("notification");
//     };
//   }, [user?._id]);
//   return (
//     <div onClick={() => setShowNotificationCard(true)} className="relative">
//       <IoMdNotificationsOutline size={34} />
//       <span className="absolute -top-2 flexCenter -right-2 bg-red-400 rounded-full h-5 w-5">
//         3
//       </span>
//     </div>
//   );
// };

// export default NotificationIcon;

import { IoMdNotificationsOutline } from "react-icons/io";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { connectSSE } from "../utils/connectToSSE";

const NotificationIcon = ({ setShowNotificationCard, onNewOrder }) => {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user?._id) return;

    const cleanup = connectSSE(
      // order status changed — user refreshes their orders
      (data) => {
        console.log("Order status updated:", data);
        // dispatch your existing fetchMyOrders() thunk here
      },
      // new order placed — admin refreshes order list
      (data) => {
        console.log("New order received:", data);
        onNewOrder?.(); // call parent to re-fetch orders
      },
    );

    return cleanup;
  }, [user?._id]);

  return (
    <div onClick={() => setShowNotificationCard(true)} className="relative">
      <IoMdNotificationsOutline size={34} />
    </div>
  );
};

export default NotificationIcon;
