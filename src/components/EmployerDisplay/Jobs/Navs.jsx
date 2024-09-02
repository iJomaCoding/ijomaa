import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navs.module.css";

const Navs = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.navContainer}>
      <button onClick={() => navigate("/employer/dashboard")}>Jobs</button>
      <button onClick={() => navigate("/employer/dashboard/matched")}>
        Matched Candidates
      </button>
    </nav>
  );
};

export default Navs;
