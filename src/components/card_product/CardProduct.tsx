import React, { useEffect, useState } from "react";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import { ProductLoader } from "../../loaders/ProductLoader";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";
import styles from "./CardProduct.module.css";

import like from "../../image/heartSVG.svg";
import SizeTable from "../size_table/SizeTable";

export type LoaderData<TLoaderFn extends LoaderFunction> = Awaited<
  ReturnType<TLoaderFn>
> extends Response | infer D
  ? D
  : never;

export default function CardProduct() {
  const loadData = useLoaderData() as LoaderData<typeof ProductLoader>;

  const [product, setProduct] = useState<any | null>(null);
  const [size, setSize] = useState(null);
  const [scale, setScale] = useState(1);
  const [visible, setVisible] = useState(false);

  const prod = () =>
    fetch(`https://64611a6f491f9402f49ea5c8.mockapi.io/Catalog/?id=${loadData}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data[0]);
      });

  useEffect(() => {
    prod();
  }, []);

  const changeSize = (e: any) => {
    e.preventDefault();
    setSize(e.target.value);
  };

  const increaseImage = (e: any) => {
    scale === 1 ? setScale(1.5) : setScale(1);

    e.target.style.transform = `scale(${scale})`;
  };

  const openSizeTable = () => {
    setVisible(!visible);
  };

  return (
    <div>
      {product ? (
        <div>
          <BreadCrumbs path={product.category} />
          <div className={styles.productWrapper}>
            <img
              onClick={(e) => increaseImage(e)}
              className={styles.mainImage}
              src={product.imgUrl}
              alt={product.title}
            />
            <div className={styles.productDescription}>
              <h1>{product.title}</h1>
              <span className={styles.price}>{product.price} ₽</span>

              <select
                className={styles.changeSize}
                required
                onChange={(e) => changeSize(e)}
              >
                <option selected={true} disabled>
                  Выберите размер
                </option>
                <option>Черный</option>
                <option>Белый</option>
              </select>
              <span className={styles.sizeTable} onClick={openSizeTable}>
                Таблица размеров
              </span>
              {visible ? <SizeTable onClick={openSizeTable} /> : ""}
              <div className={styles.wrapperLike}>
                <button className={styles.buttonBuy}>Добавить в корзину</button>
                <button className={styles.like}>
                  <img src={like} alt="like" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
