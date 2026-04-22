import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/Auth";
import Login from "./pages/login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Finance from "./pages/Finance";
import Savings from "./pages/Savings";
import Investment from "./pages/Investment"
import Solutions from "./pages/SolutionsPage";
import Resources from "./pages/Resources";
function App() {
  return (
    <BrowserRouter>

  

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/finance" element={<Finance />} />
    <Route path="/savings" element={<Savings />} />
    <Route path="/investment" element={<Investment />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/Navbar" element={<Navbar />} />
    <Route path="/solutions" element={<Solutions />} />
    <Route path="/resources" element={<Resources />} />
  </Routes>

</BrowserRouter>
  );
}

export default App;