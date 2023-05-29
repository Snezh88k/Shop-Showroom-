import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import clsx from "clsx";
import LoginPage from "../../pages/login_page/LoginPage";

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
    <nav className={clsx(styles.nav, className)}>
      <ul className={styles.list}>
        <li>
          <Link to={`/category`}>КАТАЛОГ</Link>
          <ul className={styles.dropList}>
            <li>
              <Link to={`category/platya`}>Платья</Link>
            </li>

            <li>
              <Link to={`category/yubki`}>Юбки</Link>
            </li>

            <li>
              <Link to={`category/bryuki`}>Брюки</Link>
            </li>
          </ul>
        </li>
        <li>INSTASHOPPING</li>
        <li>КОНТАКТЫ</li>
        <li>SALE</li>
      </ul>
      <div className={styles.rightBar}>
        <Link to={"/favotite"}>
          <div>Favorite</div>
        </Link>

        <div>Cart</div>
      </div>
      <div>
        {/* <a href="https://oauth.vk.com/authorize?client_id=51640846&display=page&redirect_uri=http://localhost:3000&scope=friends&response_type=token&v=5.131">*/}
        {/* <a href="https://oauth.vk.com/authorize?client_id=51640846&display=page&redirect_uri=http://localhost:3000&scope=friends&response_type=token&v=5.131">
          <div>Авторизация</div>
          
        </a> */}
        <LoginPage />
      </div>
    </nav>
  );
}
