import React from "react";
import styles from "./Footer.module.css";
import ijomalogo from "../../assets/logo/ijoma2_light.png";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <img src={ijomalogo} alt="iJoma" />
        </div>
        <div className={styles.linkSection}>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <div className={styles.socialMediaSection}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} iJoma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
