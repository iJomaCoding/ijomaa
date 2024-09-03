import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./PostJob.module.css";
import { Link } from "react-router-dom";

const PostJob = () => {
  const [jobDetails, setJobDetails] = useState({
    jobtitle: "",
    jobdescription: "",
    education: "",
    skills: [],
    experience: [],
    certificationLevel: 0,
    otherSkills: [],
  });

  const skillTypes = ["Technical Skills", "Core Skills", "Soft Skills"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSkillChange = (id, field, value, type) => {
    const newSkills = jobDetails[type].map((skill) =>
      skill.id === id ? { ...skill, [field]: value } : skill
    );
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [type]: newSkills,
    }));
  };

  const addSkill = (type) => {
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      skills: [
        ...prevDetails.skills,
        { id: uuidv4(), type, name: "", level: 0 },
      ],
    }));
  };

  const addOtherSkill = () => {
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      otherSkills: [
        ...prevDetails.otherSkills,
        { id: uuidv4(), name: "", level: 0 },
      ],
    }));
  };

  const addExperience = () => {
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      experience: [
        ...prevDetails.experience,
        { id: uuidv4(), description: "" },
      ],
    }));
  };

  const handleExperienceChange = (id, value) => {
    const newExperience = jobDetails.experience.map((exp) =>
      exp.id === id ? { ...exp, description: value } : exp
    );
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      experience: newExperience,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(jobDetails);
  };

  const renderSkillsByType = (type) =>
    jobDetails.skills
      .filter((skill) => skill.type === type)
      .map((skill) => (
        <div key={skill.id} className={styles.jobField}>
          <label>{skill.type}:</label>
          <input
            type="text"
            placeholder="Enter skill name"
            value={skill.name}
            onChange={(e) =>
              handleSkillChange(skill.id, "name", e.target.value, "skills")
            }
          />
          <input
            type="range"
            min="0"
            max="100"
            step="10"
            value={skill.level}
            onChange={(e) =>
              handleSkillChange(skill.id, "level", e.target.value, "skills")
            }
            className={styles.jobSlider}
            style={{
              background: `linear-gradient(to right, #1a2a46 ${skill.level}%, #ccc ${skill.level}%)`,
            }}
          />
          <div className={styles.jobWeightLabel}>Weight: {skill.level}%</div>{" "}
          {/* Updated to match certification level style */}
        </div>
      ));

  const renderExperience = () =>
    jobDetails.experience.map((exp) => (
      <div key={exp.id} className={styles.jobField}>
        <label>Experience:</label>
        <textarea
          placeholder="Enter experience description"
          value={exp.description}
          onChange={(e) => handleExperienceChange(exp.id, e.target.value)}
        />
      </div>
    ));

  const renderOtherSkills = () =>
    jobDetails.otherSkills.map((skill) => (
      <div key={skill.id} className={styles.jobField}>
        <label>Other Skill:</label>
        <input
          type="text"
          placeholder="Enter skill name"
          value={skill.name}
          onChange={(e) =>
            handleSkillChange(skill.id, "name", e.target.value, "otherSkills")
          }
        />
        <input
          type="range"
          min="0"
          max="100"
          step="10"
          value={skill.level}
          onChange={(e) =>
            handleSkillChange(skill.id, "level", e.target.value, "otherSkills")
          }
          className={styles.jobSlider}
          style={{
            background: `linear-gradient(to right, #1a2a46 ${skill.level}%, #ccc ${skill.level}%)`,
          }}
        />
        <div className={styles.jobWeightLabel}>Weight: {skill.level}%</div>{" "}
        {/* Updated to match certification level style */}
      </div>
    ));

  return (
    <div className={styles.jobContent}>
      <Link to="/employer/dashboard">Home</Link>
      <div className={styles.jobFormContainer}>
        <h2>Post a Job</h2>
        <form onSubmit={handleSubmit} className={styles.jobForm}>
          <div className={styles.jobField}>
            <label>Job Title:</label>
            <input
              type="text"
              name="jobtitle"
              value={jobDetails.jobtitle}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.jobField}>
            <label>Job Description:</label>
            <textarea
              name="jobdescription"
              value={jobDetails.jobdescription}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.jobField}>
            <label>Jobseeker's Educational Attainment:</label>
            <select
              name="education"
              onChange={handleInputChange}
              value={jobDetails.education}
            >
              <option value="">None</option>
              <option value="highschool">High School</option>
              <option value="associate">Associate Degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="doctorate">Doctorate Degree</option>
              <option value="other">Other</option>
            </select>
          </div>
          {skillTypes.map((type) => (
            <div key={type}>
              {renderSkillsByType(type)}
              <button
                type="button"
                className={styles.jobAddButton}
                onClick={() => addSkill(type)}
              >
                Add {type}
              </button>
              <hr className={styles.jobDivider} />{" "}
              {/* Divider below each button */}
            </div>
          ))}
          {renderExperience()}
          <button
            type="button"
            className={styles.jobAddButton}
            onClick={addExperience}
          >
            Add Experience
          </button>
          <hr className={styles.jobDivider} /> {/* Divider below experience */}
          {renderOtherSkills()}
          <button
            type="button"
            className={styles.jobAddButton}
            onClick={addOtherSkill}
          >
            Add Other Skill
          </button>
          <hr className={styles.jobDivider} /> {/* Divider below other skill */}
          <div className={styles.jobField}>
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
              className={styles.jobSlider}
              style={{
                background: `linear-gradient(to right, #1a2a46 ${jobDetails.certificationLevel}%, #ccc ${jobDetails.certificationLevel}%)`,
              }}
            />
            <div className={styles.jobWeightLabel}>
              Weight: {jobDetails.certificationLevel}%
            </div>
          </div>
          <button type="submit" className={styles.jobSubmitButton}>
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
