import React from "react";
import clsx from "clsx";

import styles from "./ButtonLink.module.css";

interface ButtonLinkProps {
  className?: string;
}

export default function ButtonLink({ className }: ButtonLinkProps) {
  return (
    <div className={clsx(styles.button, className)}>
      <a href="/">Перейти к покупкам</a>
    </div>
  );
}
