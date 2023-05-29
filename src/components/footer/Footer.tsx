import React from "react";

import styles from "./Footer.module.css";

// import tlIcon from "../../image/tl.png";
// import wsIcon from "../../image/ws.png";
// import instIcon from "../../image/instagram.png";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.firstRow}>
        <span>© 2023, SHOWROOM</span>
        <div className={styles.socialMedia}>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
      </div>
      <div className={styles.secondRow}>
        <ul>
          <li>оплата</li>
          <li>доставка</li>
          <li>возврат</li>
        </ul>
      </div>
      <div className={styles.lastRow}>
        <div className={styles.address}>г. Тбилиси</div>
      </div>
    </div>
  );
}
