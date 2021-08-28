import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div key={item.id} className="card col-4">
      <img src={item.img} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>{item.desc}</p>
      <p>{item.precio}</p>
      <Link to={`/detail/${item.id}`} className="btn btn-outline-primary">
        Ver más
      </Link>
    </div>
  );
};
