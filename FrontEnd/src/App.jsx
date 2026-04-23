import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import LoginAndSignUp from "./pages/LoginAndSignUp";
import TermsOfServiecs from "./pages/TermsOfServiecs";
import Privacy from "./pages/Privacy";
import PageNotFound from "./pages/PageNotFound";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { store } from "./store/store";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tofs" element={<TermsOfServiecs />} />
        <Route path="/auth" element={<LoginAndSignUp />} />

        {/* Page not found  */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Provider>
  );
};

export default App;
