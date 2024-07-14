import React from "react";
import styles from "./UserLogin.module.css";
import { Link } from "react-router-dom";
const EmployerLogin = () => {
  return (
    <div>
      <div className={styles.infield}>
        <input type="username" placeholder="Username" required />
        <label></label>
      </div>
      <div className={styles.infield}>
        {" "}
        <input type="password" placeholder="Password" required />
        <label></label>
      </div>
      <Link to="/employer/dashboard">
        <button className={styles.loginBtn} type="submit">
          Login
        </button>
      </Link>
    </div>
  );
};

export default EmployerLogin;
