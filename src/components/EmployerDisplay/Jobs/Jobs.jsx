import React from "react";
import styles from "./Jobs.module.css";
import Navs from "./Navs";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div>
      <Navs />
      <div>
        <Link to="postjob">Create a jobpost</Link>
        <h2>Job postings or Jobseekers Profile Dsiplay</h2>
      </div>
    </div>
  );
};

export default Jobs;
