import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { CartScreen } from "../CartScreen/CartScreen";

export const NavBar = () => {
  return (
    <header className="encabezado">
      <Link to={"/"}>
        <h1>IVO STORE</h1>
      </Link>

      <nav>
        <Link className="mx-1 link" to={"/"}>
          Inicio
        </Link>
        <Link className="mx-1 link" to={"/nosotros"}>
          Nosotros
        </Link>
        <Link className="mx-1 link" to={"/category/apple"}>
          Apple
        </Link>
        <Link className="mx-1 link" to={"/category/samsung"}>
          Samsung
        </Link>
      </nav>
      <CartWidget>
        <CartScreen></CartScreen>
      </CartWidget>
    </header>
  );
};
