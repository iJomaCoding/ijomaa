import React from "react";
import { useNavigate } from "react-router-dom";

const Matched = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/employer/dashboard")}>back</button>
      <h2>matched candidates</h2>
    </div>
  );
};

export default Matched;
