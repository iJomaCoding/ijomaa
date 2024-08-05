// Sidebar.jsx
import React, { useEffect } from "react";
import styles from "./Sidebar.module.css";
import backIcon from "../../../assets/icon/arrow-back-circle-outline.svg";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.hiddenOverflow);
    } else {
      document.body.classList.remove(styles.hiddenOverflow);
    }
  }, [isOpen]);

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeBtn} onClick={toggleSidebar}>
        <img src={backIcon} alt="Close" className={styles.backIcon} />
      </button>
      <div className={styles.sidebarContent}>
        <h2>Sidebar</h2>
        <p>Content goes here...</p>
        <Link to="/">Log out</Link>
      </div>
    </div>
  );
};

export default Sidebar;
