import React, { useState } from "react";
import styles from "./UserLogin.module.css";
import { Link } from "react-router-dom";
const EmployerLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className={styles.infield}>
        <input type="username" placeholder="Username" required />
        <label></label>
      </div>
      <div className={styles.infield}>
        {" "}
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          required
        />
        <label></label>
      </div>
      <div className={styles.checkbox}>
        <input
          className="form-check-input"
          type="checkbox"
          id="show-password"
          name="show-password"
          value="yes"
          onChange={handleShowPasswordChange}
        />
        <p>Show Password</p>
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
