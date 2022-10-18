import "./style.css";
import { Route, Routes } from "react-router-dom";
import Store from "../../pages/Store";
import Cart from "../../pages/Cart";
import ProductDetail from "../../pages/ProductDetails";

const Content = () => {
  return (
    <div className="Content">
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default Content;
