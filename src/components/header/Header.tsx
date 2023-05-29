import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import clsx from "clsx";
import LoginPage from "../../pages/login_page/LoginPage";

import cart from "../../image/cart2.png";
interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const pathname = document.location.pathname;

  const [currentUrl, setCurrentUrl] = React.useState(pathname);

  useEffect(() => {
    console.log(document.location.hash);
  }, [currentUrl]);

  return (
    <div className={clsx(styles.header, className)}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            {" "}
            <NavLink to={`/`}>главная </NavLink>{" "}
          </li>
          <li>
            <NavLink to={`/catalog`}>КАТАЛОГ</NavLink>
            <ul className={styles.dropList}>
              <li>
                <NavLink to={`catalog/platya`}>Платья</NavLink>
              </li>

              <li>
                <NavLink to={`catalog/yubki`}>Юбки</NavLink>
              </li>

              <li>
                <NavLink to={`catalog/bryuki`}>Брюки</NavLink>
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <NavLink to={`/instashopping`}>INSTASHOPPING </NavLink>{" "}
          </li>
          <li>КОНТАКТЫ</li>
          <li>SALE</li>
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

          <div className={styles.titleCart}>корзина</div>
        </div>
        <div className={styles.comeIn}>войти</div>
      </div>
    </div>
  );
}
