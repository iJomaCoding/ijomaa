import React from "react";
import styles from "./Header.module.css";
import ijomaLogo from "../../assets/logo/ijoma2_dark.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoSection}>
        <img src={ijomaLogo} alt="iJoma" />
      </div>
      <div className={styles.middleSection}>
        <p>How it works</p>
        <p>About</p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.rightSection}>
        <Link to="/login">LOG IN</Link>
      </div>
    </div>
  );
};

export default Header;
