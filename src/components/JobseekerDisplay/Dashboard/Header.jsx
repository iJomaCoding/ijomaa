// Header.jsx
import React, { useState } from "react";
import styles from "./Header.module.css";
import ijomaLogo from "../../../assets/logo/ijoma2_dark.png";
import burgerMenu from "../../../assets/icon/burger-menu.svg";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoSection}>
        <Link to="home">
          <img src={ijomaLogo} alt="iJoma" />
        </Link>
      </div>
      <div className={styles.middleSection}>
        <Link to="home">Jobs</Link>
        <Link to="applications">Applications</Link>
        <Link to="profile">Profile</Link>
      </div>
      <div className={styles.rightSection}>
        <img
          src={burgerMenu}
          alt="Menu"
          className={styles.burgerMenu}
          onClick={toggleSidebar}
        />
      </div>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Header;
