import React, { useState } from "react";
import styles from "./JobseekerDashboard.module.css";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Jobs from "../Jobs/Jobs";

const JobseekerDashboard = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Jobs />} />
      </Routes>
    </div>
  );
};

export default JobseekerDashboard;
