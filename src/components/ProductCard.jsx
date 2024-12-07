import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%" }} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      <Link to={`/product/${product.id}`}>Ver Detalles</Link>
    </div>
  );
};

export default ProductCard;
