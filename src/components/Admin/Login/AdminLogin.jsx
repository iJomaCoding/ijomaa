import React from "react";
import styles from "./AdminLogin.module.css";
import { Link } from "react-router-dom";
import ijoma2_dark from "../../../assets/logo/ijoma2_dark.png";

const AdminLogin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <img src={ijoma2_dark} alt="" />
        <h1>Admin user Login</h1>
        <form>
          <div className={styles.infield}>
            <input type="email" placeholder="Email" required />
            <label></label>
          </div>
          <div className={styles.infield}>
            {" "}
            <input type="password" placeholder="Password" required />
            <label></label>
          </div>
          <Link to="/admin/dashboard">
            <button className={styles.loginBtn} type="submit">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
