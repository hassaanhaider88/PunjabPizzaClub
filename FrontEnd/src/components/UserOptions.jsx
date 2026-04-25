import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { BACK_END_API } from "../Constants";

const UserOptions = ({
  isOpenCart,
  setIsOpenCart,
  setIsOpenUserOption,
  isOpenUserOption,
}) => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);
  const token = localStorage.getItem("PPCUserToken");
  const hanleUserLogout = async () => {
    if (confirm("Are you sure to log Out...")) {
      if (token) {
        setLoading(true);
        try {
          const res = await fetch(`${BACK_END_API}/api/auth/logout`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const result = await res.json();
          if (result.success) {
            dispatch(logout());
            setIsOpenUserOption(!isOpenUserOption);
            toast.success("Logout successfully..");
          } else {
            toast.error(result.message);
          }
        } catch (error) {
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      }
    } else {
      toast.error("Token is not avaible");
    }
  };
  console.log(user);
  const CommonClass =
    "py-2 px-6 cursor-pointer hover:bg-[#FF4757]  rounded-4xl duration-300 transition-all";
  return (
    <div className="fixed z-50 top-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-lg md:top-19 right-15  py-6 px-8">
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
      {Loading ? (
        "Signing Out..."
      ) : (
        <div onClick={hanleUserLogout} className={CommonClass}>
          Sign Out
        </div>
      )}
      <div></div>
    </div>
  );
};

export default UserOptions;
