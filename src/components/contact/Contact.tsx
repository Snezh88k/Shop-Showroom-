import React from "react";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <h1>Контакты</h1>

      <div className={styles.contactInfoWrapper}>
        <p>
          <strong>Телефон: </strong>
          <a href="tel:+4733378901"> +47 333 78 901</a>
        </p>
        <p>
          <strong>E-mail: </strong>
          <a href="mailto:+4733378901"> +47 333 78 901</a>
        </p>

        <p>
          <strong>WhatsApp: </strong>
          <a href="https://wa.me/7XXXXXXXXXX"> +47 333 78 901</a>
        </p>
        <p>
          <strong>Telegram: </strong>
          <a href="https://t.me/agvento1"> @Telegram</a>
        </p>
      </div>
    </div>
  );
}
