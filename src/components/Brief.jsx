import React from "react";

const Brief = ({ items, total }) => {
  return (
    <div>
      <h2>Resumen de tu compra</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Brief;
