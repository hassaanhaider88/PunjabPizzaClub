import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import CheckOut from "./Pages/CheckOut";
import Promotion from "./Pages/Promotion"
import Menu from "./Pages/Menu";
import ShippingPayment from "./Pages/ShippingPayment";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/promotions" element={<Promotion />} />
        <Route path="/shipping-payment" element={<ShippingPayment />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
