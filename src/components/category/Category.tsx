import { useLoaderData } from "react-router-dom";
import { CategoryLoader } from "../../loaders/CategoryLoader";
import { LoaderFunction, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./Category.module.css";
import addFavorites from "../../function/addFavorites";
import MiniCardProduct from "../mini_card_product/MiniCardProduct";

export type LoaderData<TLoaderFn extends LoaderFunction> = Awaited<
  ReturnType<TLoaderFn>
> extends Response | infer D
  ? D
  : never;

interface Item {
  id: string;
  title: string;
  imgUrl: string;
  price: number;
}

const Category = () => {
  const category = useLoaderData() as Awaited<
    ReturnType<typeof CategoryLoader>
  >;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://64611a6f491f9402f49ea5c8.mockapi.io/Catalog/?category=${category}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // console.log(data);
      });
  }, [category]);

  return (
    <div style={{ marginTop: "30px" }}>
      {category === "bryuki" && <h1>Брюки</h1>}
      {category === "yubki" && <h1>Юбки</h1>}
      {category === "platya" && <h1>Платья</h1>}
      <div className={styles.catalogWrapper}>
        {products
          ? products.map((item: Item) => <MiniCardProduct product={item} />)
          : ""}
      </div>
    </div>
  );
};

export default Category;
