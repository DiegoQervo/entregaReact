import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  // Simulación de datos
  const products = [
    { id: 1, name: "Mcbook", price: 100, category: "laptop", stock: "9", description: "Descripción del Producto 1" },
    { id: 2, name: "Iphone 16", price: 200, category: "phone", stock: "9", description: "Descripción del Producto 2" },
    { id: 3, name: "Tablet BMAX", price: 300, category: "tablet", stock: "9", description: "Descripción del Producto 3" },
    { id: 4, name: "Computer Alienware", price: 400, category: "computer", stock: "9", description: "Descripción del Producto 4" },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  return product ? <ItemDetail product={product} /> : <p>Producto no encontrado.</p>;
};

export default ItemDetailContainer;

