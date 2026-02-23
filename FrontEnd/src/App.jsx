import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import CheckOut from "./Pages/CheckOut";
import Menu from "./Pages/Menu";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
