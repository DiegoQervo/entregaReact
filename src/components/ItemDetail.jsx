import React from "react";
import Description from "./Description";
import ItemQuantitySelector from "./ItemQuantitySelector";
import AddItemButton from "./AddItemButton";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Precio: ${product.price}</p>
      <Description text={product.description} />
      <ItemQuantitySelector />
      <AddItemButton product={product} />
    </div>
  );
};

export default ItemDetail;
