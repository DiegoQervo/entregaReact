import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import {CartProvider} from "./context/CartContext";

function App() {
  const [category, setCategory] = useState(""); // Estado para manejar la categoría

  return (
    <CartProvider>
          <BrowserRouter>
      <Navbar setCategory={setCategory} />
      <Routes>
        <Route path="/" element={<ItemListContainer category={category} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>

  );
}

export default App;




