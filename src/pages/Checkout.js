import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Brief from "../components/Brief";

const Checkout = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  const handlePurchase = () => {
    alert("Compra realizada con éxito. ¡Gracias por tu compra!");
    // Aquí podrías limpiar el carrito o realizar acciones adicionales.
  };

  return (
    <div>
      <h1>Finalizar compra</h1>
      <Brief items={cartItems} total={totalPrice} />
      <button onClick={handlePurchase}>Confirmar compra</button>
    </div>
  );
};

export default Checkout;
