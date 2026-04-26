/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import LoginAndSignUp from "./pages/LoginAndSignUp";
import TermsOfServiecs from "./pages/TermsOfServiecs";
import Privacy from "./pages/Privacy";
import PageNotFound from "./pages/PageNotFound";
import DashBoard from "./pages/DashBoard";
import AllOrders from "./pages/AllOrder";
import UserProfile from "./pages/UserProfile";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CheckOut from "./pages/CheckOut";
import fetchUser from "./utils/fetchUserFromLC";
import { login } from "./store/slices/userSlice";
import { useState } from "react";

const App = () => {
  const location = useLocation();
  const dispacth = useDispatch();
  const user = useSelector((state) => state.user);

  // the routes where i dont want to show navbar
  const RestricetPages = ["/dashboard", "/all-orders"];

  const isShownNavOrFooter = !RestricetPages.includes(location.pathname);

  console.log(isShownNavOrFooter, "Pages in nav");

  const fetchUserData = async (token) => {
    const data = await fetchUser(token);
    console.log(data);
    if (!data) {
      return;
    } else {
      dispacth(
        login({
          isLogged: true,
          isEmailVerified: data.isEmailVerified,
          phone: data.phone,
          role: data.role,
          email: data.email,
          name: data.name,
          address: data.address,
          token: token,
        }),
      );
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  useEffect(() => {
    const token = localStorage.getItem("PPCUserToken");
    if (!token) {
      return;
    }
    fetchUserData(token);
  }, []);

  return (
    <>
      <NavBar isShow={isShownNavOrFooter} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tofs" element={<TermsOfServiecs />} />
        <Route path="/auth" element={<LoginAndSignUp />} />
        {/* Only login user can checkout */}
        <Route
          path="/checkout"
          element={user.isLogged ? <CheckOut /> : <LoginAndSignUp />}
        />
        <Route
          path="/user-profile"
          element={user.isLogged ? <UserProfile /> : <LoginAndSignUp />}
        />

        {/* Only admin can access */}
        <Route
          path="/dashboard"
          element={user?.role == "admin" ? <DashBoard /> : <Home />}
        />
        <Route
          path="/all-orders"
          element={user?.role == "admin" ? <AllOrders /> : <Home />}
        />

        {/* Page not found  */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer isShow={isShownNavOrFooter} />
    </>
  );
};

export default App;
