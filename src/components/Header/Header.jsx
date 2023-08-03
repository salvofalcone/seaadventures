import React from "react";

import Logo from "@/components/Icons/Logo";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Logo />
      <div className={styles.Hero}>
        <div className={styles.Hero__Image}></div>
        <h2 className={styles.Hero__Description}>Lorem ipsum dolor sit amet</h2>
      </div>
    </div>
  );
};

export default Header;
