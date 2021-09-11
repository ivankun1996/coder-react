import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/config";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const productos = db.collection("productos");

    const item = productos.doc(itemId);
    item.get().then((doc) => {
      setItem({ ...doc.data(), id: doc.id });
    });
  }, [itemId, setLoading]);

  return <div>{loading ? <h2>Cargando...</h2> : <ItemDetail {...item} />}</div>;
};
