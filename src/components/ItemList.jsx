import React from "react";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <p>Categoría: {product.category}</p>
            <p>Stock: {product.stock}</p>
            <p>{product.description}</p>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemList;

