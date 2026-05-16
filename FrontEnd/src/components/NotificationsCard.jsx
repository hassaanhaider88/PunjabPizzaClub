/* eslint-disable react-hooks/exhaustive-deps */

import { AiOutlineBell, AiOutlineClose } from "react-icons/ai";
import { BACK_END_API } from "../Constants.js";


const NotificationsCard = ({
  setShowNotificationCard,
  ShowNotificationCard,
}) => {
  

  const dummyNotifications = Array(10).fill(null);
  return (
    <div
      className={`md:w-[55%] w-full bg-[#0a0a0a] overflow-y-scroll h-screen right-0  fixed z-50 p-6 transition-transform ${
        ShowNotificationCard ? "bottom-30" : "top-0"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-center text-2xl font-bold">
          Notifications
        </h2>
        <button
          onClick={() => setShowNotificationCard(false)}
          className="text-white px-4 py-2 rounded-lg"
        >
          <AiOutlineClose size={30} />
        </button>
      </div>
      {/* Notifications List */}
      <div className="AllNotificationDiv">
        {dummyNotifications.map((_, index) => (
          <div
            title="Mark As Read"
            key={index}
            className="bg-[#1a1a1a] active:scale-90 cursor-pointer hover:scale-x-95 duration-200 transition-all p-4 rounded-lg mb-2 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white">
              <AiOutlineBell />
            </div>
            <div>
              <h3 className="text-white font-bold">Notification {index + 1}</h3>
              <p className="text-gray-400">
                This is a dummy notification for demonstration purposes.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsCard;
