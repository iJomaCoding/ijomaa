import React, { useState } from "react";
import styles from "./UserLogin.module.css";
import { Link } from "react-router-dom";

const JobseekerLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className={styles.infield}>
        <input type="username" placeholder="Username" required />
        <label className={styles.inputLabel}></label>
      </div>
      <div className={styles.infield}>
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
      <Link to="/jobseeker/dashboard">
        <button className={styles.loginBtn} type="submit">
          Login
        </button>
      </Link>
    </div>
  );
};

export default JobseekerLogin;
