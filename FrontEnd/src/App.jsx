import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<NavBar/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
