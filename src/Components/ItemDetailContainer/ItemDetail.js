import React from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({ id, nombre, category, precio, desc, img }) => {
  return (
    <div className="card col-2">
      <h2>{nombre}</h2>
      <p>Precio: {precio}</p>
      <p>{desc}</p>
      <img src={img} alt={nombre} height={400} width={300} />
      <Link to={`/category/${category}`} className="btn btn-primary">
        Volver
      </Link>
    </div>
  );
};
