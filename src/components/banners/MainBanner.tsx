import React from "react";
import styles from "./MainBanner.module.css";

import mainBanner from "../../image/banner_main_13.jpg";

export default function MainBanner() {
  return (
    <div className={styles.bannerWrapper}>
      <img src={mainBanner} alt="main banner" />
    </div>
  );
}
