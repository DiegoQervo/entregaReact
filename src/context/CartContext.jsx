import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto fácilmente
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const isInCart = prevCart.find((item) => item.id === product.id);
      if (isInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const getTotal = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };
  // Eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
