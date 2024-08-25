import React, { useEffect } from "react";
import styles from "./Sidebar.module.css";
import backIcon from "../../../assets/icon/arrow-back-circle-outline.svg";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.hiddenOverflow);
    } else {
      document.body.classList.remove(styles.hiddenOverflow);
    }
  }, [isOpen]);

  const handleLogout = (e) => {
    e.preventDefault(); // Prevent default navigation
    document.body.classList.remove(styles.hiddenOverflow); // Re-enable scroll
    toggleSidebar(); // Close the sidebar
    navigate("/"); // Navigate to the log out route
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={toggleSidebar}
      />
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={toggleSidebar}>
          <img src={backIcon} alt="Close" className={styles.backIcon} />
        </button>
        <div className={styles.sidebarContent}>
          <Link to="/employer/dashboard">
            <div className={styles.tileBar}>Dashboard</div>
          </Link>
          <Link to="/employer/profile">
            <div className={styles.tileBar}>Profile</div>
          </Link>
          <Link to="/employer/application">
            <div className={styles.tileBar}>Applications</div>
          </Link>
          <Link to="/" onClick={handleLogout}>
            <div className={styles.tileBar}>Log out</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
