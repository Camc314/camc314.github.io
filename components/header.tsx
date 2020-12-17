import React, { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [selected, setSelected] = useState("home");

  return (
    <div className={styles.headerItemContainer}>
      <div
        onClick={() => setSelected("home")}
        className={`${styles.headerItem} ${
          selected === "home" ? styles.selected : ""
        }`}
      >
        Home
      </div>
      <div
        onClick={() => setSelected("portfolio")}
        className={`${styles.headerItem} ${
          selected === "portfolio" ? styles.selected : ""
        }`}
      >
        Portfolio
      </div>
      <div
        onClick={() => setSelected("skills")}
        className={`${styles.headerItem} ${
          selected === "skills" ? styles.selected : ""
        }`}
      >
        Skills
      </div>
      <div
        onClick={() => setSelected("contact")}
        className={`${styles.headerItem} ${
          selected === "contact" ? styles.selected : ""
        }`}
      >
        Contact
      </div>
    </div>
  );
}
