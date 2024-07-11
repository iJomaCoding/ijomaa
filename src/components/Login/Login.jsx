import React, { useState } from "react";
import styles from "./slideLogin.module.css";
import JobseekerLogin from "./JobseekerLogin";
import EmployerLogin from "./EmployerLogin";
import ijoma_white from "../../assets/logo/ijoma2_light.png";
import ijomaLogo from "../../assets/logo/ijoma2_dark.png";

import { Link } from "react-router-dom";

const Login = () => {
  const [isJobseeker, setIsJobseeker] = useState(true);

  const handleSlide = () => {
    setIsJobseeker(!isJobseeker);
  };

  return (
    <div className={styles.loginContainer}>
      <Link to="/">
        <img className={styles.logo} src={ijomaLogo} alt="iJoma" />
      </Link>

      <div
        className={`${styles.formContainer} ${
          isJobseeker ? styles.slideJobseeker : styles.slideEmployer
        }`}
      >
        <div className={styles.loginSection}>
          <div className={styles.jobseekerLogin}>
            <h2>Jobseeker Login</h2>
            <form>
              <JobseekerLogin />
            </form>
          </div>
          <div className={styles.employerLogin}>
            <h2>Employer Login</h2>
            <form>
              <EmployerLogin />
            </form>
          </div>
        </div>
        <div className={styles.sideMain}>
          {" "}
          <div
            className={`${
              isJobseeker ? styles.JsideContent : styles.EsideContent
            }`}
          >
            <div
              className={`${styles.jobseekerContent} ${
                isJobseeker ? styles.show : styles.hide
              }`}
            >
              <img src={ijoma_white} alt="" />
              <h3>Have an Employer account?</h3>
              <p>
                Log in as an Employer to manage your job postings and
                applications.
              </p>
              <button onClick={handleSlide}>Employer Login</button>
            </div>
            <div
              className={`${styles.employerContent} ${
                !isJobseeker ? styles.show : styles.hide
              }`}
            >
              <img src={ijoma_white} alt="" />
              <h3>Have a Jobseeker account?</h3>
              <p>Log in as a Jobseeker to find and apply for jobs.</p>
              <button onClick={handleSlide}>Jobseeker Login</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        {isJobseeker ? (
          <span>
            Dont have an account?{" "}
            <Link to="/jobseeker">Register as Jobseeker</Link>
          </span>
        ) : (
          <span>
            Dont have an account?{" "}
            <Link to="/employer">Register as Employer</Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default Login;
