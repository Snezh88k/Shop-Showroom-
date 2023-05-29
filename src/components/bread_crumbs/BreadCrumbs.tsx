import React from "react";
import { Link } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";

interface BreadCrumbsProps {
  path: string;
}
export default function BreadCrumbs({ path }: BreadCrumbsProps) {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <span>Главная страница</span>
      </Link>
      <span className={styles.arrow}>&#10140;</span>
      <Link to="/catalog">
        <span>Каталог</span>
      </Link>
      <span className={styles.arrow}>&#10140;</span>
      <Link to={`/category/${path}`}>
        {path === "bryuki" && <span>Брюки</span>}
        {path === "yubki" && <span>Юбки</span>}
        {path === "platya" && <span>Платья</span>}
      </Link>
    </div>
  );
}
