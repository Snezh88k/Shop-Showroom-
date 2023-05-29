import React, { useEffect, useState } from "react";
import MiniCardProduct from "../mini_card_product/MiniCardProduct";
import styles from "./Favorite.module.css";

interface ProductState {
  id: string;
  title: string;
  imgUrl: string;
  price: number;
}

export default function Favorite() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const [products, setProducts] = useState<ProductState[]>([]);

  useEffect(() => {
    setFavorites([...JSON.parse(localStorage.getItem("favorites") || "{}")]);
  }, []);

  useEffect(() => {
    Promise.all(
      favorites.map((id) =>
        fetch(`https://64611a6f491f9402f49ea5c8.mockapi.io/Catalog/?id=${id}`)
      )
    )
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => {
        data.map((item) => {
          return setProducts((oldArray) => [...oldArray, ...item]);
        });
      });
  }, [favorites]);

  return (
    <div className={styles.wrapper}>
      {products.map((product) => {
        return <MiniCardProduct product={product} />;
      })}
    </div>
  );
}
