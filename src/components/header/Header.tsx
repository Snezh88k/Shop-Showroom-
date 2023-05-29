import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import clsx from "clsx";

import cart from "../../image/cart2.png";
interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [visible, setVisible] = useState(false);

  const openDropList = (e: any) => {
    setVisible(true);
  };

  const closeDropList = (e: any) => {
    setVisible(false);
  };

  return (
    <div className={clsx(styles.header, className)}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to={`/`}>главная </NavLink>{" "}
          </li>
          <li
            onMouseEnter={(e) => openDropList(e)}
            onMouseLeave={(e) => closeDropList(e)}
          >
            <NavLink to={`/catalog`}>КАТАЛОГ</NavLink>
            <ul
              className={clsx(styles.dropList, visible ? styles.open : "")}
              onClick={(e) => closeDropList(e)}
            >
              <li>
                <NavLink to={`catalog/platya`}>Платья</NavLink>
              </li>

              <li>
                <NavLink to={`catalog/yubki`}>Юбки</NavLink>
              </li>

              <li>
                <NavLink to={`catalog/bryuki`}>Брюки</NavLink>
              </li>
              <li>
                <NavLink to={`catalog/bryuki`}>Джинсы</NavLink>
              </li>
              <li>
                <NavLink to={`catalog/bryuki`}>Майки</NavLink>
              </li>
              <li>
                <NavLink to={`catalog/bryuki`}>Шляпы, блузки, рубашки</NavLink>
              </li>
              <li>
                <NavLink to={`catalog/bryuki`}>Носки</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to={`/instashopping`}>INSTASHOPPING </NavLink>
          </li>
          <li>
            <NavLink to={`/contact`}>КОНТАКТЫ </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={`/contact`}>SALE</NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.rightBar}>
        {/* <Link to={"/favotite"}>
          <div>Favorite</div>
        </Link> */}

        <div>
          {/* <a href="https://oauth.vk.com/authorize?client_id=51640846&display=page&redirect_uri=http://localhost:3000&scope=friends&response_type=token&v=5.131">*/}
          {/* <a href="https://oauth.vk.com/authorize?client_id=51640846&display=page&redirect_uri=http://localhost:3000&scope=friends&response_type=token&v=5.131">
          <div>Авторизация</div>
          
        </a> */}
          {/* <LoginPage /> */}
        </div>

        <div className={styles.cart}>
          <div className={styles.cartLogo}>
            <img src={cart} alt={cart} />
            <span className={styles.countInCart}>5</span>
          </div>

          <div>
            {" "}
            <NavLink to={`/cart`} className={styles.titleCart}>
              корзина{" "}
            </NavLink>
          </div>
        </div>
        <div className={styles.comeIn}>войти</div>
      </div>
    </div>
  );
}
