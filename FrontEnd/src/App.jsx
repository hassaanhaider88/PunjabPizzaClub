/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import LoginAndSignUp from "./pages/LoginAndSignUp";
import TermsOfServiecs from "./pages/TermsOfServiecs";
import Privacy from "./pages/Privacy";
import PageNotFound from "./pages/PageNotFound";
import AllOrders from "./pages/AllOrder";
import UserProfile from "./pages/UserProfile";
import AllProductsAdminPage from "./pages/AllProducts";
import AllCustomers from "./pages/AllCustomers";
import Statistics from "./pages/statistics";
import AddNewProduct from "./pages/AddNewProduct";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CheckOut from "./pages/CheckOut";
import fetchUser from "./utils/fetchUserFromLC";
import fetchAllProductsFun from "./utils/fetchAllProduts";
import { login } from "./store/slices/userSlice";
import AdminNavBar from "./components/AdminNavBar";
import { fetchAllProducts } from "./store/slices/productSlice";
import { RestricetPages } from "./Constants";
import AdminProductUpdate from "./pages/UpdateProduct";
import fetchAllDealsfun from "./utils/fetchAllDeals";
import { allDeals } from "./store/slices/dealSlice"
import UpdateDeal from "./pages/updateDeal";
import fetchAllOrderfun from "./utils/fetchAllOrders";
import { allOrders } from "./store/slices/orderSlice";

const App = () => {
  const location = useLocation();
  const dispacth = useDispatch();
  const user = useSelector((state) => state.user);

  // the routes where i dont want to show navbar

  const isShownNavOrFooter = RestricetPages.includes(location.pathname);

  const fetchUserData = async (token) => {
    const data = await fetchUser(token);
    if (!data) {
      return;
    } else {
      dispacth(
        login({
          isLogged: true,
          isEmailVerified: data.isEmailVerified,
          phone: data.phone,
          role: data.role,
          profile: data.profile,
          email: data.email,
          name: data.name,
          address: data.address,
          token: token,
        }),
      );
    }
  };

  const fetchProduct = async () => {
    const result = await fetchAllProductsFun(false);
    if (result) {
      dispacth(fetchAllProducts({ result, isError: false }));
    } else {
      dispacth(fetchAllProducts({ result: [], isError: true }));
      toast.error("Something Wents Wrong While fetching Products");
    }
  };

  const fetchDeals = async () => {
    try {
      const response = await fetchAllDealsfun();
      if (response) {
        dispacth(allDeals({ deals: response, isError: false }));
      } else {
        toast.error("Something Wents Wrong While fetching Deals");
      }
    } catch (error) {
      toast.error(error.message || "Something Wents Wrong While fetching Deals");
    }
  }

  const fetchAllOrder = async () => {
    try {
      const response = await fetchAllOrderfun(user.token);
      if (response) {
        dispacth(allOrders({ orders: response, isError: false }));
      } else {
        toast.error("Something Wents Wrong While fetching Orders");
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("PPCUserToken");
    if (!token) {
      return;
    }
    fetchUserData(token);
  }, []);

  useEffect(() => {
    fetchProduct();
    fetchDeals()
    if (user.role === "admin") {
      fetchAllOrder()
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [user.role]);


  return (
    <>
      <NavBar isShow={isShownNavOrFooter} />
      {!isShownNavOrFooter && <AdminNavBar />}
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
          path="/all-orders"
          element={user?.role == "admin" ? <AllOrders /> : <Navigate to="/" replace />}
        />
        <Route
          path="/all-products"
          element={user?.role == "admin" ? <AllProductsAdminPage /> : <Navigate to="/" replace />}
        />

        <Route
          path="/all-customers"
          element={user?.role == "admin" ? <AllCustomers /> : <Navigate to="/" replace />}
        />
        <Route
          path="/statistics"
          element={user?.role == "admin" ? <Statistics /> : <Navigate to="/" replace />}
        />
        <Route
          path="/add-new-product"
          element={user?.role == "admin" ? <AddNewProduct /> : <Navigate to="/" replace />}
        />
        <Route
          path="/update/:id"
          element={user?.role == "admin" ? <AdminProductUpdate /> : <Navigate to="/" replace />}
        />
        <Route
          path="/update-deal/:id"
          element={user?.role == "admin" ? <UpdateDeal /> : <Navigate to="/" replace />}
        />
        {/* Page not found  */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer isShow={isShownNavOrFooter} />
    </>
  );
};

export default App;
