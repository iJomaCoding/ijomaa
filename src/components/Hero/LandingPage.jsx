import React from "react";
import Typewriter from "./Typewriter";
import styles from "./Landingpage.module.css";
import Header from "./Header";
import Footer from "./Footer"; // Import the Footer
import hero1 from "../../assets/hero/1.png";
import hero2 from "../../assets/hero/2.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}></div>
      <Header />
      <div className={styles.featuredName}>
        <p>
          Become a <span> </span>
          <span className={styles.typeText}>
            <Typewriter
              texts={["  Jobseeker", " Employer"]}
              speed={100}
              delay={2000}
            />
          </span>
        </p>
      </div>
      <div className={styles.subtitle}>
        <p>Your trusted platform for connecting jobseekers and employers.</p>
      </div>
      <div className={styles.registerNavContainer}>
        <div className={styles.jobseekerContent}>
          <div className={styles.card}>
            <img src={hero1} alt="jobseeker image" />
            <div className={styles.caption}>
              <h2>I'm a Jobseeker</h2>
              <p>Looking for Work?</p>
              <Link to="/jobseeker">
                <button>CREATE AN ACCOUNT</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.employerContent}>
          <div className={styles.card}>
            <img src={hero2} alt="jobseeker image" />
            <div className={styles.caption}>
              <h2>I'm an Employer</h2>
              <p>Looking for Talent?</p>
              <Link to="/employer">
                <button>HIRE JOBSEEKER</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
