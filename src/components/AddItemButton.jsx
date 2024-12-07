import React from "react";
import { useCart } from "../context/CartContext";

const AddItemButton = ({ product }) => {
  const { addToCart } = useCart();

  return <button onClick={() => addToCart(product)}>Agregar al Carrito</button>;
};

export default AddItemButton;
