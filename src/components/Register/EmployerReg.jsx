import React from "react";
import styles from "./EmployerReg.module.css";
import { Link } from "react-router-dom";
import ijomaLogo from "../../assets/logo/ijoma2_dark.png";

const EmployerReg = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={ijomaLogo} alt="iJoma" />
      </Link>
      <h2>Employer Registration</h2>
      <form>
        <p>Email:</p>
        <input type="email" placeholder="Email" required />
        <p>Password:</p>
        <input type="password" placeholder="Password" required />
        <p>Re-enter Password:</p>
        <input type="password" placeholder="Re-enter Password" required />
        <button className={styles.regBtn} type="submit">
          Register
        </button>
      </form>
      <div className={styles.footer}>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default EmployerReg;
