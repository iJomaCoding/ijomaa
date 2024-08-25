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
        <Link to="jobs">
          <img src={ijomaLogo} alt="iJoma" />
        </Link>
      </div>
      <div className={styles.middleSection}>
        <Link to="/employer/dashboard">Dashboard</Link>

        <Link to="/employer/application">Applications</Link>
        <Link to="/employer/profile">Profile</Link>
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
