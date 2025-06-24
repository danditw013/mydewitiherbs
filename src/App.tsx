 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductDetail from "./pages/productdetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produk/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}