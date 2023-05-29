import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MiniCardProduct.module.css";
import addFavorites from "../../function/addFavorites";
import clsx from "clsx";

type Products = {
  product: {
    id: string;
    title: string;
    imgUrl: string;
    price: number;
  };
};

export default function MiniCardProduct({ product }: Products) {
  const [like, setLike] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    console.log(favorites, "favInMain");
    if (favorites.length !== 0) {
      const index = favorites.includes(product.id);
      setLike(index);
    }
  }, [product.id]);

  return (
    <div className={styles.cardWrapper}>
      <div key={product.id}>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.imgUrl}
            alt={product.title}
            className={styles.productImg}
          />
        </Link>
        <div className={styles.productDescription}>
          <h3>{product.title}</h3>
          <span>{product.price} ₽</span>
          <span
            className={clsx(styles.like, like ? styles.likeActive : "")}
            onClick={() => addFavorites(product.id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 100 100">
              <path
                d="M74.39,6.49c-8.65-8.65-22.67-8.65-31.31,0l-2.64,2.64L37.8,6.49c-8.65-8.65-22.67-8.65-31.31,0l0,0
  c-8.65,8.65-8.65,22.67,0,31.31l2.64,2.64l31.31,31.31l31.31-31.31l2.64-2.64C83.03,29.15,83.03,15.13,74.39,6.49z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
