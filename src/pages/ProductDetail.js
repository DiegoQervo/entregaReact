import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // Para obtener el id del producto desde la URL
import { useCart } from "../context/CartContext";



const ProductDetail = () => {
  const { id } = useParams(); // Obtén el id del producto desde la URL
  const [product, setProduct] = useState(null); // Estado para almacenar el producto
  const { addToCart } = useCart(); // Accede a la función addToCart desde el contexto

  const products = [
    { id: 1, name: "Producto 1", price: 100, description: "Descripción del producto 1", image: "https://via.placeholder.com/500" },
    { id: 2, name: "Producto 2", price: 200, description: "Descripción del producto 2", image: "https://via.placeholder.com/500" },
    { id: 3, name: "Producto 3", price: 300, description: "Descripción del producto 3", image: "https://via.placeholder.com/500" },
    { id: 4, name: "Producto 4", price: 400, description: "Descripción del producto 4", image: "https://via.placeholder.com/500" },
  ];

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>  {/* Llama a la función addToCart */}
    </div>
  );
};

export default ProductDetail;
