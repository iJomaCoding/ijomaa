import React, { useState } from "react";
import styles from "./EmployerReg.module.css";
import { Link } from "react-router-dom";
import ijomaLogo from "../../assets/logo/ijoma2_dark.png";

const EmployerReg = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={ijomaLogo} alt="iJoma" />
      </Link>

      <div className={styles.registerCon}>
        <h2>Employer Registration</h2>
        <form>
          <p>Username:</p>
          <input type="text" placeholder="Username" required />
          <p>Password:</p>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <p>Re-enter Password:</p>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Re-enter Password"
            required
          />
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              id="show-password"
              name="show-password"
              value="yes"
              onChange={handleShowPasswordChange}
            />
            <p>Show Password</p>
          </div>
          <button className={styles.regBtn} type="submit">
            Register
          </button>
        </form>
        <div className={styles.sideContainer}>
          <h3>
            Hello! Welcome to <span>iJoma</span>
          </h3>
          <p>Already have an account?</p>
          <Link to="/login">
            <button className={styles.button89} type="button">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployerReg;
