import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Counter } from "../Counter/Counter";
import { UnContext } from "../../context/UnContext";

export const ItemDetail = ({
  id,
  nombre,
  category,
  precio,
  desc,
  img,
  stock,
}) => {
  const { agregarAlCarrito } = useContext(UnContext);
  const [cantidad, setCantidad] = useState(1);
  const handleAdd = () => {
    agregarAlCarrito({ category, id, nombre, desc, img, precio, cantidad });
  };

  return (
    <div className="card col-2">
      <h2>{nombre}</h2>
      <p>Precio: {precio}</p>
      <p>{desc}</p>
      <Counter
        max={stock}
        cantidad={cantidad}
        setCantidad={setCantidad}
        agregar={handleAdd}
      ></Counter>
      <img src={img} alt={nombre} height={400} width={300} />
      <Link to={`/category/${category}`} className="btn btn-primary">
        Volver
      </Link>
    </div>
  );
};
