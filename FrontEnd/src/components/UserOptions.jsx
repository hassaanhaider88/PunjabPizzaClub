import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/userSlice";
import { toast } from "react-toastify";

const UserOptions = ({
  isOpenCart,
  setIsOpenCart,
  setIsOpenUserOption,
  isOpenUserOption,
}) => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const hanleUserLogout = () => {
    if (confirm("Are you sure to log Out...")) {
      dispatch(logout());
      setIsOpenUserOption(!isOpenUserOption);
      toast.success("Logout successfully..");
    }
  };
  console.log(user);
  const CommonClass =
    "py-2 px-6 cursor-pointer hover:bg-[#FF4757] rounded-4xl duration-300 transition-all";
  return (
    <div className="fixed z-50 top-120 text-lg md:top-20 right-15 bg-[#141414] drop-shadow-2xl py-6 px-8">
      {user.role == "admin" ? (
        <div className={CommonClass}>All Orders</div>
      ) : (
        <div
          onClick={() => {
            setIsOpenCart(!isOpenCart);
            setIsOpenUserOption(!isOpenUserOption);
          }}
          className={CommonClass}
        >
          Cart
        </div>
      )}
      {user.role == "admin" ? (
        <div className={CommonClass}>Dashboard</div>
      ) : (
        <div className={CommonClass}>Profile</div>
      )}
      <div onClick={hanleUserLogout} className={CommonClass}>
        Sign Out
      </div>
      <div></div>
    </div>
  );
};

export default UserOptions;
