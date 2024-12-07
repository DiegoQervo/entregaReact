import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = ({ setCategory }) => {
  const handleHomeClick = () => {
    setCategory(""); // Resetea la categoría al hacer clic en "Inicio"
  };

  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      <button onClick={() => setCategory("laptop")}>Laptops</button>
      <button onClick={() => setCategory("phone")}>Phones</button>
      <button onClick={() => setCategory("tablet")}>Tablets</button>
      <button onClick={() => setCategory("computer")}>Computers</button>
      <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
        <li>
          <Link to="/" onClick={handleHomeClick}>Inicio</Link> {/* Reset categoría al hacer clic */}
        </li>
        <li><Link to="/cart">Carrito</Link></li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

