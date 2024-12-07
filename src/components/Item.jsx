import React from "react";
import { formatPrice } from "../utils/formatPrice";

const Item = ({ product, onAddToCart }) => {
  return (
    <div style={styles.item}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>{formatPrice(product.price)}</p>
      <p>{product.description}</p>
      <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

const styles = {
  item: {
    border: "1px solid #ddd",
    padding: "16px",
    textAlign: "center",
    borderRadius: "8px",
    margin: "16px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "8px",
  },
};

export default Item;
