import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useCart();

  // Calcular el total de productos en el carrito
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png"
          alt="Carrito"
        />
        {totalItems > 0 && (
          <span
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "5px 10px",
              fontSize: "12px",
            }}
          >
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;
