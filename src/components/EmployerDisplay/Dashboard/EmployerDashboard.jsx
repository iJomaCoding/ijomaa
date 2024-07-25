import React from "react";
import styles from "./EmployerDashboard.module.css";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./Header";
import Jobs from "../Jobs/Jobs";
import Profile from "../Profile/Profile";
import Applications from "../Applications/Applications";

const EmployerDashboard = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Jobs />} />
        <Route path="home" element={<Jobs />} />
        <Route path="profile" element={<Profile />} />
        <Route path="applications" element={<Applications />} />
      </Routes>
    </div>
  );
};

export default EmployerDashboard;
