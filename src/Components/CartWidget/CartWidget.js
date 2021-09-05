import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UnContext } from "../../context/UnContext";

export const CartWidget = () => {
  const { cantidadCarrito } = useContext(UnContext);
  return (
    <div className="cart-widget">
      <Link to="/cart">
        <FaShoppingCart />
        <span> {cantidadCarrito()} </span>
      </Link>
    </div>
  );
};
