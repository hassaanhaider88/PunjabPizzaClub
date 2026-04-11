import React from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  return <div onClick={() => toast.success("CLick working...")}>Navbar</div>;
};

export default Navbar;
