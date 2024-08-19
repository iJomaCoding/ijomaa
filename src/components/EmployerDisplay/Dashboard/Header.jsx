import React from "react";
import styles from "./Header.module.css";
import ijomaLogo from "../../../assets/logo/ijoma2_dark.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoSection}>
        <Link to="jobs">
          <img src={ijomaLogo} alt="iJoma" />
        </Link>
      </div>
      <div className={styles.middleSection}>
        <Link to="/employer/dashboard">Dashboard</Link>

        <Link to="/employer/application">Applications</Link>
        <Link to="/employer/profile">Profile</Link>
      </div>
      <div className={styles.rightSection}>
        <Link to="/">Log out</Link>
        <svg
          fill="none"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <mask
            id="a"
            height="2"
            maskUnits="userSpaceOnUse"
            width="15"
            x="8"
            y="11"
          >
            <path
              clip-rule="evenodd"
              d="m8.99609 11.2501h13.54091v1.5h-13.54091z"
              fill="#fff"
              fill-rule="evenodd"
            />
          </mask>
          <mask
            id="b"
            height="8"
            maskUnits="userSpaceOnUse"
            width="5"
            x="18"
            y="8"
          >
            <path
              clip-rule="evenodd"
              d="m18.1096 8.33539h4.4274v7.33071h-4.4274z"
              fill="#fff"
              fill-rule="evenodd"
            />
          </mask>
          <path
            clip-rule="evenodd"
            d="m11.3192 22.0001h-4.88596c-2.444 0-4.433-1.989-4.433-4.435v-11.12898c0-2.446 1.989-4.436 4.433-4.436h4.87496c2.446 0 4.436 1.99 4.436 4.436v.932c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.932c0-1.62-1.317-2.936-2.936-2.936h-4.87496c-1.617 0-2.933 1.316-2.933 2.936v11.12898c0 1.619 1.316 2.935 2.933 2.935h4.88596c1.612 0 2.925-1.312 2.925-2.924v-.943c0-.414.336-.75.75-.75s.75.336.75.75v.943c0 2.44-1.986 4.424-4.425 4.424z"
            fill="#1a2a46ca"
            fill-rule="evenodd"
          />
          <g mask="url(#a)">
            <path
              clip-rule="evenodd"
              d="m21.7871 12.7501h-12.04101c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h12.04101c.414 0 .75.336.75.75s-.336.75-.75.75z"
              fill="#1a2a46ca"
              fill-rule="evenodd"
            />
          </g>
          <g mask="url(#b)">
            <path
              clip-rule="evenodd"
              d="m18.8594 15.6661c-.192 0-.385-.073-.531-.221-.292-.294-.291-.768.002-1.06l2.394-2.385-2.394-2.38396c-.293-.292-.295-.766-.002-1.06.292-.294.766-.294 1.06-.002l2.928 2.91496c.142.14.221.332.221.531s-.079.391-.221.531l-2.928 2.916c-.146.146-.338.219-.529.219z"
              fill="#1a2a46ca"
              fill-rule="evenodd"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Header;
