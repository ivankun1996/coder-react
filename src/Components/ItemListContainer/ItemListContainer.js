import React, { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { getFirestore } from "../../firebase/config";

export const ItemListContainer = () => {
  const { catId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const productos = db.collection("productos");

    productos.get().then((response) => {
      const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      if (catId) {
        setData(data.filter((el) => el.category === catId));
      }
    });
  }, [catId]);

  return <>{loading ? <Loader /> : <ItemList productos={data} />};</>;
};
