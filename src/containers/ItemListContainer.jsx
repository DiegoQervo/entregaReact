import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { db } from "../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ category }) => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let q = collection(db, "products"); // Reemplaza "products" por el nombre de tu colección en Firestore.

        if (category) {
          q = query(q, where("category", "==", category)); // Filtra por categoría si existe.
        }

        const querySnapshot = await getDocs(q);
        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          
        }));

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);



  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
            
          
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

