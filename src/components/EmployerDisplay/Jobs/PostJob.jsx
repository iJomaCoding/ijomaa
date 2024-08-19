import React, { useState } from "react";
import styles from "./PostJob.module.css";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();

  const [jobDetails, setJobDetails] = useState({
    jobtitle: "",
    jobdescription: "",
    education: "",
    technicalSkills: { name: "", level: 0 },
    coreSkills: { name: "", level: 0 },
    softSkills: { name: "", level: 0 },
    experience: "",
    certificationLevel: 0,
  });

  const skills = ["JavaScript", "React", "CSS", "HTML", "Node.js", "Python"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSkillChange = (e, skillType, field) => {
    const value =
      field === "level" ? parseInt(e.target.value, 10) : e.target.value;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [skillType]: {
        ...prevDetails[skillType],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(jobDetails);
  };

  const renderSkillSelect = (label, skillType, skillData) => (
    <div className={styles.skillField}>
      <label>{label}:</label>
      <select
        name={`${skillType}Name`}
        value={skillData.name}
        onChange={(e) => handleSkillChange(e, skillType, "name")}
        required
      >
        <option value="" disabled>
          Select a skill
        </option>
        {skills.map((skill) => (
          <option key={skill} value={skill}>
            {skill}
          </option>
        ))}
      </select>

      <label>Level:</label>
      <input
        type="range"
        min="0"
        max="100"
        step="10"
        value={skillData.level}
        onChange={(e) => handleSkillChange(e, skillType, "level")}
        className={styles.slider}
      />
      <div className={styles.levelLabel}>{skillData.level}%</div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <button onClick={() => navigate("/employer/dashboard")}>back</button>
        <h2>Post a Job</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>Job Title:</label>
            <input
              type="text"
              name="jobtitle"
              value={jobDetails.jobtitle}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label>Job Description:</label>
            <textarea
              name="jobdescription"
              value={jobDetails.jobdescription}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label>Jobseeker's Educational Attainment:</label>
            <select>
              <option value="">None</option>
              <option value="highschool">High School</option>
              <option value="associate">Associate Degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="doctorate">Doctorate Degree</option>
              <option value="other">Other</option>
            </select>
          </div>

          {renderSkillSelect(
            "Technical Skills",
            "technicalSkills",
            jobDetails.technicalSkills
          )}
          {renderSkillSelect(
            "Core Skills",
            "coreSkills",
            jobDetails.coreSkills
          )}
          {renderSkillSelect(
            "Soft Skills",
            "softSkills",
            jobDetails.softSkills
          )}

          <div className={styles.field}>
            <label>Experience:</label>
            <input
              type="text"
              name="experience"
              value={jobDetails.experience}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label>Certification Level:</label>
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              value={jobDetails.certificationLevel}
              onChange={(e) =>
                setJobDetails((prevDetails) => ({
                  ...prevDetails,
                  certificationLevel: parseInt(e.target.value, 10),
                }))
              }
              className={styles.slider}
            />
            <div className={styles.levelLabel}>
              {jobDetails.certificationLevel}%
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
