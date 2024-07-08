import { useState } from "react";
import SlideLogin from "./components/Login/Login";
import JobseekerReg from "./components/Register/JobseekerReg";
import EmployerReg from "./components/Register/EmployerReg";
import AdminLogin from "./components/Admin/Login/AdminLogin";
import { Route, Routes } from "react-router-dom";
import JobseekerDashboard from "./components/JobseekerDisplay/Dashboard/JobseekerDashboard";
import EmployerDashboard from "./components/EmployerDisplay/Dashboard/EmployerDashboard";
import AdminDashboard from "./components/Admin/Dashboard/AdminDashboard";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SlideLogin />}></Route>
        <Route path="/jobseeker" element={<JobseekerReg />}></Route>
        <Route
          path="/jobseeker/dashboard"
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
