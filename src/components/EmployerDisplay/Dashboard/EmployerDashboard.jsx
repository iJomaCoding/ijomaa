import React from "react";
import styles from "./EmployerDashboard.module.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Jobs from "../Jobs/Jobs";
import PostJob from "../Jobs/PostJob";
import Matched from "../Jobs/Matched";

const EmployerDashboard = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Jobs />} />
        <Route path="postjob" element={<PostJob />} />
        <Route path="matched" element={<Matched />} />
      </Routes>
    </div>
  );
};

export default EmployerDashboard;
