import { HiOutlineRefresh } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sideBarNavLins } from "../Constants";

const AdminNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [CrtTime, setCrtTime] = useState("");
  useEffect(() => {
    const time = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleString("en-US", {
        timeZoneName: "short",
      });
      setCrtTime(formattedDate.split("GMT+5"));
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <>
      <div className="sticky right-0 flex-wrap py-3 px-10 gap-3 flex bottom-0 justify-between items-stretch h-full">
        {sideBarNavLins.map((link, idx) => {
          return (
            <div
              onClick={() => navigate(link.link)}
              className={`flex gap-3 py-2 px-3 rounded-2xl hover:bg-[#ff4757] duration-200 transition-all cursor-pointer ${location.pathname == link.link ? "bg-[#ff4757]" : ""} w-40 items-center`}
              key={idx}
            >
              <p>
                <link.icon size={27} />
              </p>
              <h1>{link.name}</h1>
            </div>
          );
        })}
      </div>
      <div className="SecondHeader bg-gray-900 rounded-3xl py-2 px-4 flex md:flex-row flex-col justify-between items-center">
        {sideBarNavLins.map((link, idx) => (
          <h1
            key={idx}
            className={`${location.pathname == link.link ? "text-3xl" : "hidden"}`}
          >
            {link.name}
          </h1>
        ))}
        <div className="flex flex-wrap gap-2">
          <div className="flexCenter gap-2">
            <HiOutlineRefresh size={27} /> Data Refresh
          </div>
          <div className="py-2 px-8 bg-[#00183A] rounded-2xl">{CrtTime}</div>
        </div>
      </div>
    </>
  );
};

export default AdminNavBar;
