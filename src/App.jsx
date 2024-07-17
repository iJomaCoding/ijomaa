import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SlideLogin from "./components/Login/Login";
import JobseekerReg from "./components/Register/JobseekerReg";
import EmployerReg from "./components/Register/EmployerReg";
import AdminLogin from "./components/Admin/Login/AdminLogin";
import JobseekerDashboard from "./components/JobseekerDisplay/Dashboard/JobseekerDashboard";
import EmployerDashboard from "./components/EmployerDisplay/Dashboard/EmployerDashboard";
import AdminDashboard from "./components/Admin/Dashboard/AdminDashboard";
import LandingPage from "./components/Hero/LandingPage";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<SlideLogin />}></Route>
        <Route path="/jobseeker" element={<JobseekerReg />}></Route>
        <Route
          path="/jobseeker/dashboard/*"
          element={<JobseekerDashboard />}
        ></Route>
        <Route path="/employer" element={<EmployerReg />}></Route>
        <Route
          path="/employer/dashboard"
          element={<EmployerDashboard />}
        ></Route>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
