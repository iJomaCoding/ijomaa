import React from "react";
import Navs from "./Navs";
import { Link } from "react-router-dom";

const Matched = () => {
  return (
    <>
      <Navs />
      <div>
        <Link to="/employer/dashboard/postjob">Create a jobpost</Link>
        <h2>matched candidates</h2>
      </div>
    </>
  );
};

export default Matched;
