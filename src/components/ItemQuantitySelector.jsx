import React, { useState } from "react";

const ItemQuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
};

export default ItemQuantitySelector;
