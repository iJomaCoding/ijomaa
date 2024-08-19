import React from "react";
import styles from "./Jobs.module.css";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";

const Jobs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("postjob")}>Create a Job Post</button>
      <button onClick={() => navigate("matched")}>Matched Candidates</button>

      <h2>Job postings or Jobseekers Profile Dsiplay</h2>
    </div>
  );
};

export default Jobs;
