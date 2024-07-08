import React from "react";
import styles from "./JobseekerReg.module.css";
import { Link } from "react-router-dom";
import ijoma_dark from "../../assets/logo/ijoma_dark.png";

const JobseekerReg = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        {" "}
        <img src={ijoma_dark} alt="ijoma" />
      </Link>

      <div className={styles.registerCon}>
        <h2>Jobseeker Registration</h2>
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
        <div className={styles.sideContainer}>
          <h3>
            Hello! Welcome to <span>iJoma</span>
          </h3>
          <p>Already have an account?</p>
          <Link to="/">
            <button className={styles.button89} type="button">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobseekerReg;
