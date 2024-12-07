import React from "react";
import ProductCard from "../components/ProductCard";

const Home = ({ products }) => {
  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

